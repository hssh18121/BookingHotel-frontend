import React, { useState } from "react";
import "./RegisterForm.css";
const RegisterForm = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredFullname, setEnteredFullname] = useState("");
  const [enteredPhone, setEnteredPhone] = useState("");
  const EnteredEmailHandler = (e) => {
    setEnteredEmail(e.target.value);
  };
  const EnteredUsernameHander = (e) => {
    setEnteredUsername(e.target.value);
  };
  const EnteredPasswordHandler = (e) => {
    setEnteredPassword(e.target.value);
  };
  const EnteredFullnameHandler = (e) => {
    setEnteredFullname(e.target.value);
  };
  const EnteredPhoneHandler = (e) => {
    setEnteredPhone(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let username = enteredUsername;
    let password = enteredPassword;
    let email = enteredEmail;
    let fullname = enteredFullname;
    let phone = enteredPhone;
    console.log(username, password, email, fullname, phone);

    fetch("http://localhost:5000/api/auth/signup", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        username,
        password,
        email,
        fullname,
        phone,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          alert("Signup successful");

          window.location.href = "./login";
        }
      });
  };

  return (
    <React.Fragment>
      <main className="main ">
        <div className="login-form" id="register-form">
          <h2 className="heading-secondary ma-bt-lg"> Register Page</h2>
          <form className="form form--login" onSubmit={handleSubmit}>
            <div className="display-flex">
              <div className="form__group" id="form__group">
                <label className="form__label" for="email">
                  Email address
                </label>
                <input
                  className="form__input"
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  required=""
                  onChange={EnteredEmailHandler}
                />
              </div>
              <div className="form__group" id="form__group">
                <label className="form__label">Username</label>
                <input
                  className="form__input"
                  id="username"
                  type="text"
                  placeholder="Hason123"
                  required=""
                  onChange={EnteredUsernameHander}
                />
              </div>
            </div>

            <div className="display-flex">
              <div className="form__group " id="form__group">
                <label className="form__label" for="password">
                  Password
                </label>
                <input
                  className="form__input"
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  required=""
                  minlength="8"
                  onChange={EnteredPasswordHandler}
                />
              </div>
              <div className="form__group " id="form__group">
                <label className="form__label">Full name</label>
                <input
                  className="form__input"
                  type="text"
                  id="fullname"
                  placeholder="Nguyen Van A"
                  required=""
                  minlength="6"
                  onChange={EnteredFullnameHandler}
                />
              </div>
            </div>

            <div className="form__group">
              <label className="form__label">Phone number</label>
              <input
                className="form__input"
                id="phone"
                type="text"
                placeholder="0902930941"
                required=""
                onChange={EnteredPhoneHandler}
              />
            </div>

            <div className="form__group">
              <button className="btn btn--green">Register</button>
            </div>
          </form>
        </div>
      </main>
    </React.Fragment>
  );
};

export default RegisterForm;
