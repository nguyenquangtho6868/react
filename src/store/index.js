import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./Login";
import popupReducer from "./PopupShow";
import productReducer from "./ProductShow";
import cartReducer from "./Cart";
//cấu hình redux
const store = configureStore({
  reducer: {
    popup: popupReducer,
    product: productReducer,
    login: loginReducer,
    cart: cartReducer,
  },
});

export default store;
