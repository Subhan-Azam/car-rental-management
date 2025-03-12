import { axiosInstance } from "@/axiosInstance/axiosInstance";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

export interface Car {
  id: string;
  userID: string;
  carName: string;
  model: string;
  mileage: string;
  engine: string;
  transmission: string;
  price: string;
  description: string;
  image: string;
  imageUrl: string;
}

interface AddCarState {
  cars: Car[];
  loading: boolean;
  error: string | null;
}

const initialState: AddCarState = {
  cars: [],
  loading: false,
  error: null,
};

interface carStateTypes {
  carName: string;
  model: string;
  mileage: string;
  engineType: string;
  transmissionType: string;
  price: string;
  description: string;
  image: string;
}

// add the car
export const addCar = createAsyncThunk(
  "CarCrud/add",
  async (carData: carStateTypes, { rejectWithValue }) => {
    try {
      console.log("Sending car data to API:", carData);

      const formattedCarState = {
        ...carData,
        engine: carData.engineType.toUpperCase(),
        transmission: carData.transmissionType.toUpperCase(),
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
      const response = await axiosInstance.get("/carCrud");
      console.log("Fetched cars:", response.data);
      return response.data.data;
    } catch (error) {
      console.log(error);
      rejectWithValue(error);
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

export const carCrudSlice = createSlice({
  name: "CarCrud",
  initialState,
  reducers: {
    updateCar: (state, action) => {
      const carIndex = state.cars.findIndex(
        (car) => car.id === action.payload.id
      );
      if (carIndex !== -1) {
        state.cars[carIndex] = action.payload;
      } else {
        console.log("Car not found to update");
      }
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
        state.cars = action.payload;
        console.log("this is acction", state.cars);
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
        // state.cars = action.payload;
        state.cars = state.cars.filter((car) => car.id !== action.payload);
        console.log("state.cars------", state.cars);
      })
      .addCase(deleteCar.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });

    // Delete Car ==================
    // .addCase(deleteCar.pending, (state) => {
    //   state.loading = true;
    //   state.error = null;
    // })
    // .addCase(deleteCar.fulfilled, (state, action) => {
    //   state.loading = false;
    //   state.cars = state.cars.filter((car) => car.id !== action.payload); // Use action.payload (deleted ID)
    //   console.log("Updated cars list:", state.cars);
    // })
    // .addCase(deleteCar.rejected, (state, action) => {
    //   state.loading = false;
    //   state.error = action.payload as string;
    // });
  },
});

export default carCrudSlice.reducer;
