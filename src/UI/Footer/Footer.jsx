import React from "react";

import classes from "./Footer.module.css";

function Footer() {
  return (
    <>
      <div className={classes.fLists}>
        <ul className={classes.fList && classes.left}>
          <li className={classes.fListItembig}>
            <em>CUSTOM SERVICES</em>
          </li>
          <li className={classes.fListItem}>
            <em>Help & Contact Us</em>
          </li>
          <li className={classes.fListItem}>
            <em>Returns & Refunds</em>
          </li>
          <li className={classes.fListItem}>
            <em>Online Stores</em>
          </li>
          <li className={classes.fListItem}>
            <em>Teems & Conditions</em>
          </li>
        </ul>

        <ul className={classes.fList}>
          <li className={classes.fListItembig}>
            <em>COMPANY</em>
          </li>
          <li className={classes.fListItem}>
            <em>What We Do</em>
          </li>
          <li className={classes.fListItem}>
            <em>Available Sevices</em>
          </li>
          <li className={classes.fListItem}>
            <em>Lasters Posts</em>
          </li>
          <li className={classes.fListItem}>
            <em>FAQs</em>
          </li>
        </ul>

        <ul className={classes.fList && classes.right}>
          <li className={classes.fListItembig}>
            <em>SOCIAL MEDIA</em>
          </li>
          <li className={classes.fListItem}>
            <em>Twiter</em>
          </li>
          <li className={classes.fListItem}>
            <em>Instagram</em>
          </li>
          <li className={classes.fListItem}>
            <em>Facebook</em>
          </li>
          <li className={classes.fListItem}>
            <em>Pinterest</em>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Footer;
