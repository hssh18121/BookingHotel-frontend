import React from "react";
import "./RegisterForm.css";
const RegisterForm = () => {
  return (
    <React.Fragment>
      <main className="main ">
        <div className="login-form" id="register-form">
          <h2 className="heading-secondary ma-bt-lg"> Register Page</h2>
          <form className="form form--login">
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
                  // onChange={setEnteredEmail}
                />
              </div>
              <div className="form__group" id="form__group">
                <label className="form__label">Full name</label>
                <input
                  className="form__input"
                  id="email"
                  type="email"
                  placeholder="Nguyen Van A"
                  required=""
                  // onChange={setEnteredEmail}
                />
              </div>
            </div>

            <div className="display-flex">
              <div className="form__group " id="form__group">
                <label className="form__label" for="password">
                  Password
                </label>
                <input
                  class="form__input"
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  required=""
                  minlength="8"
                  // onChange={setEnteredPassword}
                />
              </div>
              <div className="form__group " id="form__group">
                <label className="form__label" for="password">
                  Password Confirm
                </label>
                <input
                  class="form__input"
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  required=""
                  minlength="8"
                  // onChange={setEnteredPassword}
                />
              </div>
            </div>

            <div className="form__group">
              <label className="form__label">Phone number</label>
              <input
                className="form__input"
                id="email"
                type="email"
                placeholder="0902930941"
                required=""
                // onChange={setEnteredEmail}
              />
            </div>

            <div class="form__group">
              <button class="btn btn--green">Register</button>
            </div>
          </form>
        </div>
      </main>
    </React.Fragment>
  );
};

export default RegisterForm;
