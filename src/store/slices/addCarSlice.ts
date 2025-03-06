import { axiosInstance } from "@/axiosInstance/axiosInstance";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface Car {
  carName: string;
  model: string;
  mileage: string;
  engine: string;
  transmission: string;
  price: string;
  description: string;
  image: string;
}

interface AddCarState {
  Cars: Car[];
  loading: boolean;
  error: string | null;
}

const initialState: AddCarState = {
  Cars: [],
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

export const addCar = createAsyncThunk(
  "addCar/add",
  async (carData: carStateTypes, { rejectWithValue }) => {
    try {
      console.log("Sending car data to API:", carData);

      const formattedCarState = {
        ...carData,
        engine: carData.engineType.toUpperCase(),
        transmission: carData.transmissionType.toUpperCase(),
      };

      const response = await axiosInstance.post("/addCar", formattedCarState);
      console.log("response========", response.data);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data || "An unknown error occurred"
      );
    }
  }
);

export const addCarSlice = createSlice({
  name: "AddCar",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addCar.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addCar.fulfilled, (state, action) => {
        state.loading = false;
        state.Cars.push(action.payload);
      })
      .addCase(addCar.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default addCarSlice.reducer;
