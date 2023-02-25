import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  isAuth: boolean;
  error: boolean;
  errorMessage: string;
}

const initialState: AuthState = {
  isAuth: false,
  error: false,
  errorMessage: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authSuccess: (state) => {
      state.isAuth = true;
      state.error = false;
      state.errorMessage = "";
    },
    authFail: (state) => {
      state.isAuth = false;
      state.error = true;
      state.errorMessage = "Incorrect login or password";
    },
    clearError: (state) => {
      state.error = false;
      state.errorMessage = "";
    },
    logout: (state) => {
      state.isAuth = false;
    },
  },
});

export const { authSuccess, authFail, clearError, logout } = authSlice.actions;
export default authSlice.reducer;
