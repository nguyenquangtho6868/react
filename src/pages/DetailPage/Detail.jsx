import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import Api from "../../API/API";
import { addToCart } from "../../store/Cart";
import classes from "./Detail.module.css";
import { FcPrevious, FcNext } from "react-icons/fc";
import LiveChat from "../../UI/LiveChat/LiveChat";
import Messinger from "../../UI/LiveChat/Messinger";
import { useState } from "react";

function Detail() {
  //gọi Api sp
  const { api } = Api();

  const [liveChat, setLiveChat] = useState(false);
  //sự kiện ẩn hiện live chat
  const handleLiveChat = () => {
    setLiveChat(!liveChat);
  };
  const dispatch = useDispatch();
  //sụe kiện thêm sản phẩm
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  //lấy ra thông số id sp tùe link id
  let { id } = useParams();
  //lọc qua api để lấy sp trùng id lấy từ đường link id
  const product = api.filter((element) => element._id.$oid === id);

  //const rls = rl.filter((e) => e._id.$oid !== id);
  const rld = api.filter((a) => a.category === product[0].category);
  const rldi = rld.filter((e) => e._id.$oid !== id);

  return (
    <div className={classes.products}>
      {product.map((product) => {
        return (
          <>
            <div className={classes.product}>
              <div className={classes.imagesmall}>
                <img key={product.id} src={product.img1} alt="" width="100%" />
                <img key={product.id} src={product.img2} alt="" width="100%" />
                <img key={product.id} src={product.img3} alt="" width="100%" />
                <img key={product.id} src={product.img4} alt="" width="100%" />
              </div>
              <div className={classes.imagebig}>
                <img
                  className={classes.image}
                  key={product.id}
                  src={product.img1}
                  alt=""
                  width="100%"
                />
              </div>
              <div className={classes.title}>
                <h5 className={classes.titleh5}>{product.name}</h5>

                <h1 className={classes.titleh}>
                  {" "}
                  {Number(product.price)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  VND
                </h1>
                <div className={classes.titlep}>{product.short_desc}</div>
                <div className={classes.category}>
                  <h6>CATEGORY:</h6>

                  <p>{product.category}</p>
                </div>

                <div className={classes.add}>
                  <h2>QUANTITY</h2>
                  <div>
                    <FcPrevious />
                  </div>
                  <div>1</div>
                  <div>
                    <FcNext />
                  </div>
                  <h1 onClick={() => handleAddToCart(product)}>Add to cart</h1>
                </div>
              </div>
            </div>
            <div className={classes.description}>
              <h1>DESCRIPTION</h1>
              <p>{product.long_desc}</p>
            </div>
          </>
        );
      })}

      <div className="livechat" onClick={() => handleLiveChat()}>
        <LiveChat />
      </div>
      {liveChat && (
        <div className="live">
          <Messinger />
        </div>
      )}
      <div className={classes.rld}>
        <h6>RELATED PRODUCTS</h6>
        <div>
          {rldi.map((rela) => {
            return (
              <div className={classes.rela}>
                <img src={rela.img1} alt="" width="100%" />
                <p>{rela.name}</p>
                <h1>
                  {Number(rela.price)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  VND
                </h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Detail;
