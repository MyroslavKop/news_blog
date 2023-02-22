import { createSlice } from "@reduxjs/toolkit";

type Modal = {
  isOpen: boolean;
};

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: false,
    error: false,
    errorMessage: "",
  },
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
  },
});

export const { authSuccess, authFail, clearError } = authSlice.actions;
export default authSlice.reducer;
