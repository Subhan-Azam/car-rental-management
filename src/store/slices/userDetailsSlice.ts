import { axiosInstance } from "@/axiosInstance/axiosInstance";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface userDetailsProps {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  city: string;
  street: string;
  dateOfBirth: Date;
  gender: string;
  profilePhoto: string;
}

interface UserState {
  userDetails: userDetailsProps | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  userDetails: null,
  loading: false,
  error: null,
};

// Get Details
export const fetchUserDetails = createAsyncThunk(
  "userDetails/get",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/getUserDetails");
      const data = await response.data.user;
      return data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const errorMessage =
          (error.response?.data as { message?: string })?.message ||
          "Failed to fetch user details";
        return rejectWithValue(errorMessage);
      }
      return rejectWithValue("An unexpected error occurred");
    }
  }
);

// update user details
export const updateUser = createAsyncThunk(
  "userDetails/updateUser",
  async (updatedData: Partial<userDetailsProps>, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.put("/getUserDetails", updatedData);
      console.log("response", response.data.user);
      return response.data.user;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(
          error.response?.data?.message || "Failed to update user details"
        );
      }
      return rejectWithValue("An unexpected error occurred");
    }
  }
);

export const userDetailsSlice = createSlice({
  name: "userDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // get user details
      .addCase(fetchUserDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.userDetails = action.payload;
      })
      .addCase(fetchUserDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // update user details
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
        if (state.userDetails) {
          state.userDetails = { ...state.userDetails, ...action.payload };
        }
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default userDetailsSlice.reducer;
