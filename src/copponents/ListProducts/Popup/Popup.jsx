import React from "react";
import { useDispatch } from "react-redux/es/exports";
import { popupActions } from "../../../store/PopupShow";
import "./Popup.css";
import { RiLuggageCartFill } from "react-icons/ri";
function Popup(props) {
  //nhận product từ ListPoducts
  const Pd = props.Product;
  console.log(Pd);
  const dispatch = useDispatch();
  //sự kiện tắt popup
  const close = () => {
    dispatch(popupActions.HIDE_POPUP());
  };

  return (
    <div className="popup">
      <div className="popup_img">
        <img src={Pd.img1} alt="" width="100%" height="100%" />
      </div>
      <div className="popup_inner">
        <h3>{Pd.name}</h3>
        <h6>
          {" "}
          {Number(Pd.price)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          VND
        </h6>
        <p>{Pd.long_desc}</p>
        <button>
          <span>
            <RiLuggageCartFill></RiLuggageCartFill>
          </span>
          View Detail
        </button>
        <p onClick={close} className="close">
          X
        </p>
      </div>
    </div>
  );
}

export default Popup;
