import React, { useState } from "react";
import Button from "../../../components/utils/Button";
import { AddUserBox, Image } from "../../allUsers/allUsers.styled";
import Back from "../../../images/left-arrow-Back.svg";
import NameIcon from "../../../components/utils/NameIcon";
import PasswordIcon from "../../../components/utils/Password";
import EmailIcon from "../../../components/utils/EmailIcon";
const AddUser = ({ newUser, onBack }) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [nameIsValid, setNameIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

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
    newUser({
      name: enteredName,
      email: enteredEmail,
      password: enteredPassword,
    });
  };
  return (
    <>
      <Button className="back" onClick={onBack}>
        <Image src={Back} alt="back" />
        Back
      </Button>
      <AddUserBox>
        <form onSubmit={submitHandler}>
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
              Add User
            </Button>
          </div>
        </form>
      </AddUserBox>
    </>
  );
};
export default AddUser;
