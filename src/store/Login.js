import { createSlice } from "@reduxjs/toolkit";

const initialsLoginState = { login: false };

const loginSlice = createSlice({
  name: "login",
  initialState: initialsLoginState,
  reducers: {
    ON_LOGIN(state) {
      state.login = true;
    },
    ON_LOGOUT(state) {
      state.login = false;
    },
  },
});

export const loginActions = loginSlice.actions;

export default loginSlice.reducer;
