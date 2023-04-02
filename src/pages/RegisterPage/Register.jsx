import React from "react";
import BasicForm from "./BasicForm";
import image from "../../image/banner1.jpg";

function Register() {
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

export default Register;
