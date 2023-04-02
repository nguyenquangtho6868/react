import useInput from "./hooks/use-input";
import "./Form.css";
import { useNavigate } from "react-router-dom";
//điều kiện validate
const isNotEmpty = (value) => value.trim() !== "";
const isPassword = (value) => value.length >= 8;
const isEmail = (value) =>
  value
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

const BasicForm = (props) => {
  //truyền đk validate vào hàm input custom
  const {
    value: fullNameValue,
    isValid: fullNameIsValid,
    hasError: fullNameHasError,
    valueChangeHandler: fullNameChangeHandler,
    inputBlurHandler: fullNameBlurHandler,
    reset: resetFullName,
  } = useInput(isNotEmpty);
  const {
    value: passwordValue,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPassword,
  } = useInput(isPassword);
  const {
    value: phoneValue,
    isValid: phoneIsValid,
    hasError: phoneHasError,
    valueChangeHandler: phoneChangeHandler,
    inputBlurHandler: phoneBlurHandler,
    reset: resetPhone,
  } = useInput(isPassword);

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);

  let formIsValid = false;
  //tạo giá trị formIsValid để có thể vô hiệu hoá nút submit
  if (fullNameIsValid && passwordIsValid && emailIsValid && phoneIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    const user = {
      password: passwordValue,
      email: emailValue,
      phone: phoneValue,
      fullname: fullNameValue,
    };
    if (localStorage.getItem("userArr") === null) {
      const Data = [];
      Data.push(user);
      localStorage.setItem("userArr", JSON.stringify(Data));
    } else {
      const Data = JSON.parse(localStorage.getItem("userArr"));

      if (Data.every((e) => e.email !== user.email)) {
        Data.push(user);
        localStorage.setItem("userArr", JSON.stringify(Data));
        resetFullName();
        resetPassword();
        resetEmail();
        resetPhone();
      } else {
        alert("Email Đã Tồn Tại");
      }
    }
  };

  const fullNameClasses = fullNameHasError
    ? "form-control invalid"
    : "form-control";
  const passwordClasses = passwordHasError
    ? "form-control invalid"
    : "form-control";
  const emailClasses = emailHasError ? "form-control invalid" : "form-control";
  const phoneClasses = passwordHasError
    ? "form-control invalid"
    : "form-control";

  const navigate = useNavigate();
  const handlerChangePage = () => {
    navigate("/login");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={fullNameClasses}>
          <input
            placeholder="Full Name"
            type="text"
            pattern=".{0,}"
            title="vui long nhap ten"
            id="name"
            value={fullNameValue}
            onChange={fullNameChangeHandler}
            onBlur={fullNameBlurHandler}
          />
          {fullNameHasError && (
            <p className="error-text">Please enter a first name.</p>
          )}
        </div>
      </div>
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
            <p className="error-text">Please enter a first name.</p>
          )}
        </div>
      </div>
      <div className="control-group">
        <div className={phoneClasses}>
          <input
            placeholder="Phone"
            type="number"
            pattern="[0-9]{10}"
            id="Phone"
            value={phoneValue}
            onChange={phoneChangeHandler}
            onBlur={phoneBlurHandler}
          />
          {phoneHasError && (
            <p className="error-text">Please enter a first name.</p>
          )}
        </div>
      </div>

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
      <div>
        <span>Login?</span>
        <span onClick={handlerChangePage} style={{ color: "blue" }}>
          Click
        </span>
      </div>
    </form>
  );
};

export default BasicForm;
