import { createSlice } from "@reduxjs/toolkit";

const initialPopupState = { showPopup: false };

const popupSlice = createSlice({
  name: "popup",
  initialState: initialPopupState,
  reducers: {
    SHOW_POPUP(state) {
      state.showPopup = true;
    },
    HIDE_POPUP(state) {
      state.showPopup = false;
    },
  },
});

export const popupActions = popupSlice.actions;

export default popupSlice.reducer;
