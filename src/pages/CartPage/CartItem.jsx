import React from "react";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { BsTrashFill } from "react-icons/bs";
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux/es/exports";
import classes from "./Cart.module.css";
import { removeFromCart, addToCart, decreaseCart } from "../../store/Cart";
const CartItem = () => {
  const cart = useSelector((state) => state.cart);
  const Products = cart.cartItems;

  const dispatch = useDispatch();
  //sự kiện remove sản phẩm
  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };
  //sự kiện thêm 1sản phảm
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  //sự kiện giẩm  1 sản phẩm
  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product));
  };
  return (
    <div className={classes.cartproduct}>
      {Products.map((cartItem) => {
        return (
          <div className={classes.products} key={cartItem._id.$oid}>
            <img className={classes.image} src={cartItem.img1} alt="" />
            <h6 className={classes.product}>{cartItem.name}</h6>
            <p className={classes.price}>
              {Number(cartItem.price)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              VND
            </p>
            <div className={classes.iomarow}>
              <IoMdArrowDropleft onClick={() => handleDecreaseCart(cartItem)} />
              <h5>{cartItem.cartQuantity}</h5>
              <IoMdArrowDropright onClick={() => handleAddToCart(cartItem)} />
            </div>

            <p className={classes.total}>
              {Number(cartItem.price * cartItem.cartQuantity)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              VND
            </p>
            <div className={classes.remove}>
              <BsTrashFill onClick={() => handleRemoveFromCart(cartItem)} />
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default CartItem;
