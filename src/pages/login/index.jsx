import React, { useState } from "react";
import { Heading, Image, LoginBox, LoginContainer } from "./login.styled";
import logo from "../../images/logo.svg";
import { useNavigate } from "react-router-dom";
import Button from "../../components/utils/Button";
import NameIcon from "../../components/utils/NameIcon";
import EmailIcon from "../../components/utils/EmailIcon";
import PasswordIcon from "../../components/utils/Password";
const Login = ({ onLogin }) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [nameIsValid, setNameIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  const navigate = useNavigate();

  //Name Validations
  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);

    setFormIsValid(
      event.target.value.trim().length > 0 &&
        enteredPassword.trim().length > 6 &&
        enteredEmail.includes("@")
    );
  };
  const validateNameHandler = () => {
    setNameIsValid(enteredName.trim().length > 0);
  };

  //Email Validations

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
    setFormIsValid(
      event.target.value.includes("@") &&
        enteredPassword.trim().length > 6 &&
        enteredName.trim().length > 0
    );
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes("@"));
  };

  //Password Validations
  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
    setFormIsValid(
      event.target.value.trim().length > 6 &&
        enteredEmail.includes("@") &&
        enteredName.trim().length > 0
    );
  };
  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    onLogin({
      name: enteredName,
      email: enteredEmail,
      password: enteredPassword,
    });
    navigate("/users");
  };

  return (
    <LoginContainer>
      <LoginBox>
        <form onSubmit={submitHandler}>
          <Image src={logo} alt="logo" />
          <Heading>Member Login</Heading>
          <div className={`control ${nameIsValid === false ? "invalid" : ""}`}>
            <input
              type="text"
              id="name"
              value={enteredName}
              onChange={nameChangeHandler}
              onBlur={validateNameHandler}
              placeholder="Enter Name"
            />

            <span>
              <NameIcon />
            </span>

            {nameIsValid === false && <p>Name is required</p>}
          </div>
          <div className={`control ${emailIsValid === false ? "invalid" : ""}`}>
            <input
              type="email"
              id="email"
              value={enteredEmail}
              onChange={emailChangeHandler}
              onBlur={validateEmailHandler}
              placeholder="Enter Email"
            />

            <span>
              <EmailIcon />
            </span>

            {emailIsValid === false && (
              <p>Email is required and should include @</p>
            )}
          </div>
          <div
            className={`control ${passwordIsValid === false ? "invalid" : ""}`}
          >
            <input
              type="password"
              id="password"
              value={enteredPassword}
              onChange={passwordChangeHandler}
              onBlur={validatePasswordHandler}
              placeholder="Enter Password"
            />
            <span>
              <PasswordIcon />
            </span>
            {passwordIsValid === false && (
              <p>Password is required and should be 7 letters</p>
            )}
          </div>
          <div className="actions">
            <Button type="submit" disabled={!formIsValid}>
              Login
            </Button>
          </div>
        </form>
      </LoginBox>
    </LoginContainer>
  );
};

export default Login;
