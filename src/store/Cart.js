import { createSlice } from "@reduxjs/toolkit";
//lấy thông tin đăng nhập

const email = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser"))
  : [];
//khởi tạo giá trị ban đầu
const initialState = {
  cartItems: localStorage.getItem(email.email)
    ? JSON.parse(localStorage.getItem(email.email))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      //lọc ra sp khi click vào
      const existingIndex = state.cartItems.findIndex(
        (item) => item._id.$oid === action.payload._id.$oid
      );

      if (existingIndex >= 0) {
        //kiểm tra giỏ hang nếu đã có sp thì tăng cartQuantity thêm 1
        state.cartItems[existingIndex] = {
          ...state.cartItems[existingIndex],
          cartQuantity: state.cartItems[existingIndex].cartQuantity + 1,
        };
      } else {
        //nếu chưa có sp thì thêm sp vào mảng và thêm thuộc tính cartQuantity là 1
        let tempProductItem = {
          ...action.payload,
          cartQuantity: 1,
        };
        state.cartItems.push(tempProductItem);
      }
      //lưu sp vaoaf location vs key là email của use và value là giá trị cartItems
      localStorage.setItem(email.email, JSON.stringify(state.cartItems));
    },
    decreaseCart(state, action) {
      //lấy ra sp khi click vào
      const itemIndex = state.cartItems.findIndex(
        (item) => item._id.$oid === action.payload._id.$oid
      );
      //nếu sp nhiều hơn 1 thì trừ đi 1 ,còn sản phẩm bằng 1 thì lọc mẩng để lấy lại những giá trị không trùng vs giá trị click
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (item) => item._id.$oid !== action.payload._id.$oid
        );

        state.cartItems = nextCartItems;
      }
      localStorage.setItem(email.email, JSON.stringify(state.cartItems));
    },
    removeFromCart(state, action) {
      state.cartItems.map((cartItem) => {
        //lấy ra sp click và lọc ra để lấy lại  những sp ko trùng vs sp click
        if (cartItem._id.$oid === action.payload._id.$oid) {
          const nextCartItems = state.cartItems.filter(
            (item) => item._id.$oid !== cartItem._id.$oid
          );

          state.cartItems = nextCartItems;
        }
        localStorage.setItem(email.email, JSON.stringify(state.cartItems));
        return state;
      });
    },
    getTotals(state, action) {
      //dùng reduce để tính tổng giá trị và tổng số lương sp
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem; //dùng destructuring lấy giá và số lượng trong mảng ra
          const itemTotal = price * cartQuantity; //tính tổng mỗi sản phẩm

          cartTotal.total += itemTotal; //tính tổng tất cả các sp
          cartTotal.quantity += cartQuantity; //tính tổng số lượng tất cả các sp

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0, //giá trị khởi tạo để chạy reduce
        }
      );

      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
  },
});

export const { addToCart, decreaseCart, removeFromCart, getTotals } =
  cartSlice.actions;

export default cartSlice.reducer;
