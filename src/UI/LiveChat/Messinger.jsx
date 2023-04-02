import React from "react";
import { FcBusinessman } from "react-icons/fc";
import { MdOutlineAttachFile, MdTagFaces } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import classes from "./Livechat.module.css";
const Messinger = () => {
  return (
    <div className={classes.messinger}>
      <div className={classes.header}>
        <h5>Customer Support</h5>
        <p>Let's Chat App</p>
      </div>
      <div className={classes.main}>
        <h6>Xin chào</h6>
        <p>Làm thế nào để xem các sản phẩm</p>
        <div className={classes.icon}>
          <span>
            <FcBusinessman />
          </span>
          <h2>ADMIN:Chào bạn</h2>
        </div>
        <div className={classes.icon}>
          <span>
            <FcBusinessman />
          </span>
          <h3>ADMIN:Bạn có thể vào mục Shop để xem các sản phẩm</h3>
        </div>
      </div>
      <div className={classes.footer}>
        <span>
          <FcBusinessman />
        </span>
        <input placeholder="Enter Message" />
        <ab>
          <MdOutlineAttachFile />
        </ab>
        <ac>
          <MdTagFaces />
        </ac>

        <i>
          <FaTelegramPlane />
        </i>
      </div>
    </div>
  );
};
export default Messinger;
