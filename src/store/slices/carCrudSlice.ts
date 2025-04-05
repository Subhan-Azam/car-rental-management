import { axiosInstance } from "@/axiosInstance/axiosInstance";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

export interface Car {
  id: string;
  userID: string;
  brand: string;
  carName: string;
  model: string;
  mileage: string;
  engine: string;
  transmission: string;
  price: string;
  carType: string;
  description: string;
  image: string;
  imageUrl: string;
  views: number;
}

interface AddCarState {
  cars: Car[];
  loading: boolean;
  error: string | null;
  updateCarData: Car | null;
}

const initialState: AddCarState = {
  cars: [],
  loading: false,
  error: null,
  updateCarData: null,
};

interface carStateTypes {
  brand: string;
  carName: string;
  model: string;
  mileage: string;
  engineType: string;
  transmissionType: string;
  price: string;
  carType: string;
  description: string;
  image: string;
}

// add the car
export const addCar = createAsyncThunk(
  "CarCrud/add",
  async (carData: carStateTypes, { rejectWithValue }) => {
    try {
      const formattedCarState = {
        ...carData,
        engine: carData.engineType.toUpperCase(),
        transmission: carData.transmissionType.toUpperCase(),
        carType: carData.carType.toUpperCase(),
      };

      const response = await axiosInstance.post("/carCrud", formattedCarState);
      console.log("response========", response.data);
      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError;
      return rejectWithValue(
        axiosError.response?.data || "An unknown error occurred"
      );
    }
  }
);

// get all cars
export const fetchCars = createAsyncThunk(
  "CarCrud/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/carCrud", {});
      console.log("response.data:>>", response.data.data);
      return response.data.data;
    } catch {
      return rejectWithValue("Something went wrong. Please try again!");
    }
  }
);

// delete car
export const deleteCar = createAsyncThunk(
  "CarCrud/deleteCar",
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.delete("/carCrud", { data: { id } });
      console.log("response", response.data);
      return id;
    } catch (error) {
      const axiosError = error as AxiosError;
      console.log("error", axiosError.message);
      rejectWithValue(axiosError);
    }
  }
);

interface updateCarDataType {
  id: string;
  brand: string;
  carName: string;
  model: string;
  mileage: string;
  engineType: string;
  transmissionType: string;
  price: string;
  carType: string;
  description: string;
  image: string;
}

// update Car
export const updateCar = createAsyncThunk(
  "CarCrud/updateCar",
  async (updateCarData: updateCarDataType, { rejectWithValue }) => {
    try {
      const formatedData = {
        ...updateCarData,
        engine: updateCarData.engineType.toUpperCase(),
        transmission: updateCarData.transmissionType.toUpperCase(),
        carType: updateCarData.carType.toUpperCase(),
      };
      const response = await axiosInstance.put("/carCrud", formatedData);

      console.log("response.data", response.data);
      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError;
      return rejectWithValue(
        axiosError.response?.data || "Failed to update car"
      );
    }
  }
);

// Views
export const carViews = createAsyncThunk(
  "CarCrud/Views",
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/carViews", { id });
      console.log("response.data", response.data);
      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError;
      return rejectWithValue(axiosError.response?.data || "Failed to views");
    }
  }
);

// popular cars
export const popularCars = createAsyncThunk(
  "CarCrud/PopularCars",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/carViews");
      console.log("get.data", response.data.data);
      return response.data.data;
    } catch (error) {
      const axiosError = error as AxiosError;
      return rejectWithValue(axiosError.response?.data || "Failed to views");
    }
  }
);

export const carCrudSlice = createSlice({
  name: "CarCrud",
  initialState,
  reducers: {
    setUpdateCarData: (state, action) => {
      state.updateCarData = action.payload;
    },
    resetUpdateCarData: (state) => {
      state.updateCarData = null;
    },
  },

  extraReducers: (builder) => {
    builder
      // add car ====================
      .addCase(addCar.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addCar.fulfilled, (state, action) => {
        state.loading = false;
        state.cars.push(action.payload);
      })
      .addCase(addCar.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Fetch Cars =================
      .addCase(fetchCars.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.loading = false;
        state.cars = action.payload || [];
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Delete Car ==================
      .addCase(deleteCar.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteCar.fulfilled, (state, action) => {
        state.loading = false;
        state.cars = state.cars.filter((car) => car.id !== action.payload);
      })
      .addCase(deleteCar.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // update car ==============
      .addCase(updateCar.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateCar.fulfilled, (state, action) => {
        state.loading = false;
        state.cars = state.cars?.map((car) =>
          car.id === action.payload.id ? action.payload : car
        );
      })
      .addCase(updateCar.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // car views =============
      .addCase(carViews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(carViews.fulfilled, (state, action) => {
        state.loading = false;
        const updateCar = action.payload;
        state.cars = state.cars?.map((car) =>
          car.id === updateCar.id ? { ...car, views: updateCar?.views } : car
        );
      })
      .addCase(carViews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // popular Cars =============
      .addCase(popularCars.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(popularCars.fulfilled, (state, action) => {
        state.loading = false;
        state.cars = action.payload;
      })
      .addCase(popularCars.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default carCrudSlice.reducer;
export const { setUpdateCarData } = carCrudSlice.actions;
export const { resetUpdateCarData } = carCrudSlice.actions;
