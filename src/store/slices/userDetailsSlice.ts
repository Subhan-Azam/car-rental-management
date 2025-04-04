import { axiosInstance } from "@/axiosInstance/axiosInstance";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface userDetailsProps {
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
      console.log("response", response.data.user);
      return response.data.user;
    } catch {
      rejectWithValue("Failed to fetch user details");
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
    } catch {
      console.error("Error updating user details");
      return rejectWithValue("Failed to update user details");
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
