import useInput from "./hooks/use-input";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux/es/exports";
import { loginActions } from "../../store/Login";

import "./Form.css";
//tạo biến validate
const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) =>
  value
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ) && value.trim() !== "";

const BasicForm = (props) => {
  const dispatch = useDispatch();
  //taọ cac biến và truyền giá trị valide vào hàm useInput đã custom
  const {
    value: passwordValue,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPassword,
  } = useInput(isNotEmpty);

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);

  let formIsValid = false;

  if (passwordIsValid && emailIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();
    const userArr = JSON.parse(localStorage.getItem("userArr"));
    console.log(userArr);

    if (!formIsValid) {
      return;
    }

    console.log(passwordValue, emailValue);
    const userlogin = {
      password: passwordValue,
      email: emailValue,
    };
    //lấy dữ liệu user từ localStorage và kiểm tra xem thông tin đăng nhập có trùng vs user ko
    const Data =
      localStorage.getItem("userArr") === null
        ? []
        : JSON.parse(localStorage.getItem("userArr"));
    const user = Data.find(
      (item) =>
        item.email === userlogin.email && item.password === userlogin.password
    );
    if (user) {
      console.log(user);
      alert("Đăng nhập thành công !");
      localStorage.setItem("currentUser", JSON.stringify(user));
      dispatch(loginActions.ON_LOGIN());
      navigate("/");
      window.location.reload();
    } else {
      alert("Thông tin đăng nhập không đúng");
    }

    resetPassword();
    resetEmail();
  };

  const passwordClasses = passwordHasError
    ? "form-control invalid"
    : "form-control";
  const emailClasses = emailHasError ? "form-control invalid" : "form-control";
  const navigate = useNavigate();
  const handlerChangePage = () => {
    navigate("/register");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={emailClasses}>
        <input
          placeholder="Email"
          type="email"
          id="name"
          onKeyUp="ch"
          value={emailValue}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailHasError && (
          <p className="error-text">Please enter a valid email address.</p>
        )}
      </div>
      <div className="control-group">
        <div className={passwordClasses}>
          <input
            placeholder="Password"
            type="password"
            pattern=".{8,}"
            title="password phai dai hoen 8 ky tu"
            id="name"
            value={passwordValue}
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
          />
          {passwordHasError && (
            <p className="error-text">Please enter a password</p>
          )}
        </div>
      </div>

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
      <div>
        <span>Create an account?</span>
        <span onClick={handlerChangePage} style={{ color: "blue" }}>
          Sing up
        </span>
      </div>
    </form>
  );
};

export default BasicForm;
