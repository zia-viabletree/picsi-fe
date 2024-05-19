import { createSlice } from "@reduxjs/toolkit";

const UserReducer = createSlice({
  name: "user",
  initialState: {
    data: {},
    isAuthenticated: false,
  },
  reducers: {
    // USER LOGIN
    loginRequest() {},
    loginSuccess(state, data) {
      state.isAuthenticated = true;
    },

    // USER SIGNOUT
    logoutRequest(state, action) {
      state.isAuthenticated = false;
    },
  },
});

export const { loginRequest, loginSuccess, logoutRequest } =
  UserReducer.actions;

export default UserReducer.reducer;
