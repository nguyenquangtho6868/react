import React from "react";
import { useNavigate } from "react-router-dom";
import { RiLuggageCartFill } from "react-icons/ri";
import { BsFillPersonFill } from "react-icons/bs";
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux";
import { loginActions } from "../../store/Login";
import classes from "./Navbar.module.css";

function Navbar() {
  const User =
    localStorage.getItem("currentUser") === null
      ? []
      : JSON.parse(localStorage.getItem("currentUser"));

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const login = useSelector((state) => state.login.login);
  if (localStorage.getItem("currentUser") !== null) {
    dispatch(loginActions.ON_LOGIN());
  }

  const handlerHome = () => {
    navigate("/");
  };
  const handlerLogin = () => {
    navigate("/login");
  };
  const handlerCart = () => {
    navigate("/cart");
  };

  const handlerShop = () => {
    navigate("/shop");
  };
  const handlerLogout = () => {
    localStorage.removeItem("currentUser");

    dispatch(loginActions.ON_LOGOUT());
  };

  return (
    <div className={classes.navContainer}>
      <div className={classes.logo}>
        <span className={classes.home} onClick={handlerHome}>
          Home
        </span>
        <span className={classes.shop} onClick={handlerShop}>
          Shop
        </span>
      </div>
      <div className={classes.boutique}>BOUTIQUE</div>
      <div className={classes.navButton}>
        <span className={classes.icon}>
          <RiLuggageCartFill />
        </span>
        <span className={classes.cart} onClick={handlerCart}>
          Cart
        </span>
        <span className={classes.icon}>
          <BsFillPersonFill />
        </span>
        {login ? (
          <span onClick={handlerLogout}>
            <span>{User.fullname}</span>(Logout)
          </span>
        ) : (
          <span className={classes.login} onClick={handlerLogin}>
            Login
          </span>
        )}
      </div>
    </div>
  );
}

export default Navbar;
