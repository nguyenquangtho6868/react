import { createSlice } from "@reduxjs/toolkit";

const initialProductsState = {
  showAll: true,
  showIphone: false,
  showIpod: false,
  showMacbook: false,
  showAirpod: false,
  showWatch: false,
};

const productSlice = createSlice({
  name: "popup",
  initialState: initialProductsState,
  reducers: {
    SHOW_ALL(state) {
      state.showAll = true;
      state.showIphone = false;
      state.showIpod = false;
      state.showMacbook = false;
      state.showAirpod = false;
      state.showWatch = false;
    },
    SHOW_IPHONE(state) {
      state.showAll = false;
      state.showIphone = true;
      state.showIpod = false;
      state.showMacbook = false;
      state.showAirpod = false;
      state.showWatch = false;
    },
    SHOW_IPOD(state) {
      state.showAll = false;
      state.showIphone = false;
      state.showIpod = true;
      state.showMacbook = false;
      state.showAirpod = false;
      state.showWatch = false;
    },
    SHOW_MACBOOK(state) {
      state.showAll = false;
      state.showIphone = false;
      state.showIpod = false;
      state.showMacbook = true;
      state.showAirpod = false;
      state.showWatch = false;
    },
    SHOW_AIRPOD(state) {
      state.showAll = false;
      state.showIphone = false;
      state.showIpod = false;
      state.showMacbook = false;
      state.showAirpod = true;
      state.showWatch = false;
    },
    SHOW_WATCH(state) {
      state.showAll = false;
      state.showIphone = false;
      state.showIpod = false;
      state.showMacbook = false;
      state.showAirpod = false;
      state.showWatch = true;
    },
  },
});

export const productActions = productSlice.actions;

export default productSlice.reducer;
