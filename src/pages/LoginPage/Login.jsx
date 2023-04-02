import React from "react";
import image from "../../image/banner1.jpg";
import BasicForm from "./BasicForm";
import "./Login.css";

function Login() {
  return (
    <div className="Login">
      <img src={image} alt="" width="100%" height="1000px" />
      <div className="title">Sing UP</div>
      <div className="form">
        <BasicForm />
      </div>
    </div>
  );
}

export default Login;
