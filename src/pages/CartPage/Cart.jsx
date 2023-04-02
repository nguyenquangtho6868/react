import React, { useEffect } from "react";
import { BsGiftFill } from "react-icons/bs";

import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/exports";
import classes from "./Cart.module.css";
import { getTotals } from "../../store/Cart";
import LiveChat from "../../UI/LiveChat/LiveChat";
import Messinger from "../../UI/LiveChat/Messinger";
import { useState } from "react";
import CartItem from "./CartItem";
function Cart() {
  const cart = useSelector((state) => state.cart);
  const [liveChat, setLiveChat] = useState(false);
  const handleLiveChat = () => {
    setLiveChat(!liveChat);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  //sự kiện chuyển trang
  const handleShopping = () => {
    navigate("/shop");
  };
  const handleCheckout = () => {
    navigate("/checkout");
  };
  //gọi hàm tính tổng để lấy giá trị giỏ hàng
  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  // const handleAddToCart = (product) => {
  //   dispatch(addToCart(product));
  // };
  // const handleDecreaseCart = (product) => {
  //   dispatch(decreaseCart(product));
  // };

  // const handleClearCart = () => {
  //   dispatch(clearCart());
  // };
  return (
    <>
      <div className={classes.navbar}>
        <h1>CART</h1>
        <h6>CART</h6>
      </div>
      <div className={classes.shopping}>
        <h5>SHOPPING CART</h5>
      </div>
      <div className={classes.container}>
        <div className={classes.cart}>
          <div className={classes.information}>
            <h6 className={classes.price}>IMAGE</h6>
            <h6 className={classes.price}>PRODUCT</h6>
            <h6 className={classes.price}>PRICE</h6>
            <h6 className={classes.price}>QUANTITY</h6>
            <h6 className={classes.price}>TOTAL</h6>
            <h6 className={classes.price}>REMOVE</h6>
          </div>
          <CartItem />
        </div>
        <div className={classes.carttotal}>
          <h4>CART TOTAL</h4>
          <div className={classes.subtotal}>
            <h5>SUBTOTAL</h5>{" "}
            <span>
              {Number(cart.cartTotalAmount)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              VND
            </span>
          </div>
          <div className={classes.totalb}>
            <h5>TOTAL</h5>{" "}
            <span>
              {Number(cart.cartTotalAmount)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              VND
            </span>
          </div>
          <div>
            <input
              className={classes.coupon}
              type="text"
              placeholder="Enter your coupon"
            />
          </div>
          <div className={classes.apply}>
            <BsGiftFill className={classes.gift} />
            Apply counpon
          </div>
        </div>
      </div>
      <div className={classes.continue}>
        <div onClick={handleShopping}>
          <FaLongArrowAltLeft />
          <h3>Continue shoping</h3>
        </div>

        <div className={classes.proceed} onClick={handleCheckout}>
          <p>Proceed to checkour</p>
          <FaLongArrowAltRight />
        </div>
      </div>
      <div className="livechat" onClick={() => handleLiveChat()}>
        <LiveChat />
      </div>
      {liveChat && (
        <div className="live">
          <Messinger />
        </div>
      )}
    </>
  );
}

export default Cart;
