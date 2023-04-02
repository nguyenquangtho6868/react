import React from "react";
import Iphone from "../../image/product_1.png";
import Mac from "../../image/product_2.png";
import Ipad from "../../image/product_3.png";
import Watch from "../../image/product_4.png";
import Airpod from "../../image/product_5.png";
import classes from "./ListCategories.module.css";
import { useNavigate } from "react-router-dom";
//Danh sách các danh mục
function ListCategories() {
  const navigate = useNavigate();
  //sự kiện chuyển trang
  const handlerClick = () => {
    navigate("/shop");
  };
  return (
    <div className={classes.catogories} onClick={handlerClick}>
      <div className={classes.above}>
        <img className={classes.imgabove} src={Iphone} alt="" width="100%" />

        <img
          className={classes.imgabove}
          src={Mac}
          alt=""
          width="100%"
          height="300"
        />
      </div>
      <div className={classes.below}>
        <img
          className={classes.imgbelow}
          src={Ipad}
          alt=""
          width="100%"
          height="300"
        />
        <img
          className={classes.imgbelow}
          src={Watch}
          alt=""
          width="100%"
          height="300"
        />
        <img
          className={classes.imgbelow}
          src={Airpod}
          alt=""
          width="100%"
          height="300"
        />
      </div>
    </div>
  );
}

export default ListCategories;
