import React from "react";

const LoginForm = () => {
  return (
    <React.Fragment>
      <main className="main ">
        <div className="login-form">
          <h2 className="heading-secondary ma-bt-lg"> Log into your account</h2>
          <form className="form form--login">
            <div className="form__group">
              <label className="form__label" for="email">
                Email address
              </label>
              <input
                className="form__input"
                id="email"
                type="email"
                placeholder="you@example.com"
                required=""
              />
            </div>
            <div className="form__group ma-bt-md">
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
              />
            </div>
            <div class="form__group">
              <button class="btn btn--green">Login</button>
            </div>
          </form>
        </div>
      </main>
    </React.Fragment>
  );
};

export default LoginForm;
