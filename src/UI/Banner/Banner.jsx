import React from "react";
import classes from "./Banner.module.css";
import banner from "../../image/banner1.jpg";
import { useNavigate } from "react-router-dom";
function Banner() {
  const navigate = useNavigate();
  const handlerButton = () => {
    navigate("/shop");
  };
  return (
    <div className={classes.banner}>
      <div className={classes.image}>
        <img src={banner} alt="" width="100%" height="400" />
        <div className={classes.title}>NEW INSPIRATION 2020</div>
        <div className={classes.saleoff}>
          <h4>20% OFF ON NEW</h4>
          <h4> SEASON</h4>
        </div>
        <div className={classes.button}>
          <button onClick={handlerButton}>Browse collections</button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
