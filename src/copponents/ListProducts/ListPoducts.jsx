import React from "react";
import Api from "../../API/API";
import { useState } from "react";
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux/es/exports";
import { popupActions } from "../../store/PopupShow";
import Popup from "./Popup/Popup";
import classes from "./ListProducts.module.css";

function ListPoducts() {
  const [product, setProduct] = useState(null);

  const dispatch = useDispatch();
  //gọi show từ showPopup
  const show = useSelector((state) => state.popup.showPopup);
  //sự kiện hiển thị popup
  const handlerPoduct = (event) => {
    setProduct(event);
    dispatch(popupActions.SHOW_POPUP());
  };
  const { api } = Api();

  return (
    <div className={classes.products}>
      {api.map((product, index) => {
        return (
          <div key={index} className={classes.product}>
            <img
              className={classes.image}
              onClick={() => {
                handlerPoduct(product);
              }}
              src={product.img1}
              alt=""
              width="100%"
              height="300"
            />
            <h5>{product.name}</h5>
            <p>
              {Number(product.price)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
              VND
            </p>
          </div>
        );
      })}
      {show && (
        <div className={classes.popup}>
          <Popup Product={product} />
        </div>
      )}
    </div>
  );
}

export default ListPoducts;
