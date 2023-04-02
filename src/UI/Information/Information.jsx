import React from "react";
import classes from "./Information.module.css";

function Information() {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.items}>
          <h5 className={classes.item}>FREE SHIPPING</h5>
          <p className={classes.item}>Free shipping worlwide</p>
        </div>
        <div className={classes.items}>
          <h5 className={classes.item}>24 X 7 SERVICE</h5>
          <p className={classes.item}>Free shipping worlwide</p>
        </div>
        <div className={classes.items}>
          <h5 className={classes.item}>FESTIVAL OFFER</h5>
          <p className={classes.item}>Free shipping worlwide</p>
        </div>
      </div>
      <div className={classes.subscribe}>
        <div className={classes.itemsub}>
          <h3 className={classes.itemlet}>LET'S BE FRIENDS!</h3>
          <p className={classes.itemlet}>
            Nisi nisi tempor consequat laboris nisi.
          </p>
        </div>
        <div className={classes.itemsubuton}>
          <input
            className={classes.input}
            placeholder="Enter Your email adddres"
          />

          <button className={classes.btn}>Subcribe</button>
        </div>
      </div>
    </>
  );
}

export default Information;
