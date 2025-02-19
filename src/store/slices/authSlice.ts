import { axiosInstance } from "@/axiosInstance/axiosInstance";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface StateProps {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  loading: boolean;
  error: string | null;
}

const initialState: StateProps = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  loading: false,
  error: null,
};

// signUp slice
export const userSignUp = createAsyncThunk(
  "auth/signUp",
  async (
    {
      firstName,
      lastName,
      email,
      password,
    }: {
      firstName: string;
      lastName: string;
      email: string;
      password: string;
    },
    { rejectWithValue }
  ) => {
    try {
      const response = await axiosInstance.post("/signUpApi", {
        firstName,
        lastName,
        email,
        password,
      });

      alert("Data saved successfully");

      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(
          error.response?.data?.message ||
            "Server error. Please try again later."
        );
      } else {
        console.error("Unexpected error:", error);
        return rejectWithValue(
          "An unexpected error occurred. Please try again."
        );
      }
    }
  }
);

// Forget password
export const userForgetPassword = createAsyncThunk(
  "auth/forgetPassword",
  async (email: string, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/forgetPassword", { email });

      return response.data;
    } catch (error) {
      console.log("error", error);
      if (axios.isAxiosError(error)) {
        return rejectWithValue(
          error.response?.data?.message ||
            "Error sending reset password email. Please try again later."
        );
      } else {
        return rejectWithValue("An unexpected error occurred.");
      }
    }
  }
);

// update newPassword
export const userNewPassword = createAsyncThunk(
  "auth/userUpdatePassword",
  async (
    { newPassword, token }: { newPassword: string; token: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await axiosInstance.put("/forgetPassword", {
        password: newPassword,
        token,
      });

      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(
          error.response?.data?.message ||
            "Error sending reset password email. Please try again later."
        );
      } else {
        return rejectWithValue("An unexpected error occurred.");
      }
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userSignUp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userSignUp.fulfilled, (state, action) => {
        state.loading = false;
        state.firstName = action.payload.firstName || "";
        state.lastName = action.payload.lastName || "";
        state.email = action.payload.email || "";
        state.password = action.payload.password || "";
      })
      .addCase(userSignUp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Handling forget password actions
      .addCase(userForgetPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userForgetPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.email =
          action.payload.message || "Password reset link sent successfully.";
      })
      .addCase(userForgetPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // NewPassword
      .addCase(userNewPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userNewPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.password = action.payload.message;
      })
      .addCase(userNewPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default authSlice.reducer;
