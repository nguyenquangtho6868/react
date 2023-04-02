import React from "react";
import classes from "./Checkout.module.css";
import { useSelector } from "react-redux/es/exports";

import LiveChat from "../../UI/LiveChat/LiveChat";
import Messinger from "../../UI/LiveChat/Messinger";
import { useState } from "react";

function Checkout() {
  const cart = useSelector((state) => state.cart);
  //lấy mảng giỏ hàng đã tổ chức trong redux tookit
  const Products = cart.cartItems;
  const [liveChat, setLiveChat] = useState(false);
  //sự kiện ẩn hiện live chat
  const handleLiveChat = () => {
    setLiveChat(!liveChat);
  };
  return (
    <>
      <div className={classes.navbar}>
        <h1>CHECKOUT</h1>
        <div className={classes.icon}>
          <h2>HOME/</h2>
          <h3>CART/</h3>
          <h4>CHECKOUT</h4>
        </div>
      </div>
      <div className={classes.title}>
        <h4>BILLING DETAILS</h4>
      </div>
      <div className={classes.billing}>
        <div className={classes.placeorder}>
          <h6>FULL NAME:</h6>
          <input placeholder="Enter Your Full Name Here!"></input>
          <h6>EMAIL:</h6>
          <input placeholder="Enter Your Email Here!"></input>
          <h6>PHONE NUMBER:</h6>
          <input placeholder="Enter Your Phone Number here!"></input>
          <h6>ADDRESS:</h6>
          <input placeholder="Enter Your Address Here!"></input>
          <button>Place order</button>
        </div>
        <div className={classes.yourorder}>
          <h4>YOUR ORDER</h4>

          <div>
            {Products.map((product) => {
              return (
                <div className={classes.Products} key={product._id.$oid}>
                  <h6 className={classes.product}>{product.name}</h6>
                  <p className={classes.price}>
                    {Number(product.price)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    VND
                  </p>
                  X<h5>{product.cartQuantity}</h5>
                </div>
              );
            })}
            <div className={classes.total}>
              <h4>TOTAL</h4>
              <span>
                {Number(cart.cartTotalAmount)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                VND
              </span>
            </div>
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
      </div>
    </>
  );
}

export default Checkout;
