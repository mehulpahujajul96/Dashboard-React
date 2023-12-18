import React, { useState } from "react";
import Button from "../../../components/utils/Button";
import {
  AddUserBox,
  EmptyBox,
  Image,
  Label,
  Message,
  SubMessage,
} from "../allUsers.styled";
import Back from "../../../images/left-arrow-Back.svg";
import NameIcon from "../../../components/utils/NameIcon";
import EmailIcon from "../../../components/utils/EmailIcon";
import PasswordIcon from "../../../components/utils/Password";
const SelectedUser = ({ selectedUser, onBack, onEdit, updatedValue }) => {
  const [enteredName, setEnteredName] = useState(
    selectedUser.name || undefined
  );
  const [enteredEmail, setEnteredEmail] = useState(
    selectedUser.email || undefined
  );
  const [emailIsValid, setEmailIsValid] = useState();
  const [nameIsValid, setNameIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState(
    selectedUser.password || undefined
  );
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
    updatedValue({
      name: enteredName,
      email: enteredEmail,
      password: enteredPassword,
      id: selectedUser.id,
    });
  };
  return (
    <div>
      <Button className="back" onClick={onBack}>
        <Image src={Back} alt="back" />
        Back
      </Button>
      {onEdit ? (
        <AddUserBox>
          <form onSubmit={submitHandler}>
            <div
              className={`control ${nameIsValid === false ? "invalid" : ""}`}
            >
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
            <div
              className={`control ${emailIsValid === false ? "invalid" : ""}`}
            >
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
              className={`control ${
                passwordIsValid === false ? "invalid" : ""
              }`}
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
                Update User
              </Button>
            </div>
          </form>
        </AddUserBox>
      ) : (
        <>
          <EmptyBox className="detailBox">
            <Message>{enteredName}</Message>
            <SubMessage>
              <b>Email: </b> {enteredEmail}
            </SubMessage>
            <SubMessage>
              <b>Password: </b> {enteredPassword}
            </SubMessage>
          </EmptyBox>
        </>
      )}
    </div>
  );
};
export default SelectedUser;
