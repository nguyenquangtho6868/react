import { React } from "react";
import Navbar from "../../UI/Navbar/Navbar";
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux/es/exports";
import { productActions } from "../../store/ProductShow";
import ProductList from "./ProductList/ProductList";
import ProductAirpod from "./ProductList/ProductAirpod";
import ProductIphone from "./ProductList/ProductIphone";
import ProductIpod from "./ProductList/ProductIpod";
import ProductMacbook from "./ProductList/ProductMacbook";
import ProductWatch from "./ProductList/ProductWatch";
import LiveChat from "../../UI/LiveChat/LiveChat";
import Messinger from "../../UI/LiveChat/Messinger";
import { useState } from "react";
import classes from "./Shop.module.css";

function Shop() {
  const dispatch = useDispatch();
  const [liveChat, setLiveChat] = useState(false);
  const handleLiveChat = () => {
    setLiveChat(!liveChat);
  };

  const showAll = useSelector((state) => state.product.showAll);
  const showIphone = useSelector((state) => state.product.showIphone);
  const showIpod = useSelector((state) => state.product.showIpod);
  const showMacbook = useSelector((state) => state.product.showMacbook);
  const showAirpod = useSelector((state) => state.product.showAirpod);
  const showWatch = useSelector((state) => state.product.showWatch);

  const handlerAll = () => {
    dispatch(productActions.SHOW_ALL());
  };
  const handlerIphone = () => {
    dispatch(productActions.SHOW_IPHONE());
  };
  const handlerIpod = () => {
    dispatch(productActions.SHOW_IPOD());
  };
  const handlerMacbook = () => {
    dispatch(productActions.SHOW_MACBOOK());
  };
  const handlerAirpod = () => {
    dispatch(productActions.SHOW_AIRPOD());
  };
  const handlerWatch = () => {
    dispatch(productActions.SHOW_WATCH());
  };

  return (
    <div>
      <Navbar />
      <div className={classes.navbar}>
        <h1>SHOP</h1>
        <h6>SHOP</h6>
      </div>
      <div className={classes.shop}>
        <div className={classes.categories}>
          <h3>CATEGORIES</h3>
          <div className={classes.items}>
            <h5 className={classes.itemapple}>APPLE</h5>
            <h6
              onClick={() => {
                handlerAll();
              }}
            >
              ALL
            </h6>
            <h5 className={classes.itemiphone}>IPHONE & MAC</h5>
            <h6
              onClick={() => {
                handlerIphone();
              }}
            >
              Iphone
            </h6>
            <h6
              onClick={() => {
                handlerIpod();
              }}
            >
              Ipod
            </h6>
            <h6
              onClick={() => {
                handlerMacbook();
              }}
            >
              Macbook
            </h6>
            <h5 className={classes.itemwireless}>WIRELESS</h5>
            <h6
              onClick={() => {
                handlerAirpod();
              }}
            >
              Airpod
            </h6>
            <h6
              onClick={() => {
                handlerWatch();
              }}
            >
              Watch
            </h6>
            <h5 className={classes.itemorther}>Other</h5>
            <h6
              onClick={() => {
                handlerIpod();
              }}
            >
              Mouse
            </h6>
            <h6
              onClick={() => {
                handlerIpod();
              }}
            >
              Keyboard
            </h6>
            <h6
              onClick={() => {
                handlerIpod();
              }}
            >
              Other
            </h6>
          </div>
        </div>
        <div className={classes.productlist}>
          {showAll && <ProductList />}
          {showIphone && <ProductIphone />}
          {showIpod && <ProductIpod />}
          {showMacbook && <ProductMacbook />}
          {showAirpod && <ProductAirpod />}
          {showWatch && <ProductWatch />}
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
  );
}

export default Shop;
