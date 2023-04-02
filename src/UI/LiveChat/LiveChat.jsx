import React from "react";
import { FaFacebookMessenger } from "react-icons/fa";
import classes from "./Livechat.module.css";
function LiveChat() {
  return (
    <div>
      <FaFacebookMessenger className={classes.Livechat} />
    </div>
  );
}
export default LiveChat;
