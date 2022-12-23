import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Header = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("token");
    if (storedUserLoggedInInformation) {
      setIsLoggedIn(true);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };
  return (
    <React.Fragment>
      <header className="header">
        <nav className="nav nav--tours">
          <Link className="nav__el" to="/">
            Home
          </Link>
          <Link className="nav__el" to="/hotels">
            All hotels
          </Link>
        </nav>

        <div className="header__logo">
          <img src={require("../../img/logo-white.png")} alt="Natours logo" />
        </div>

        {isLoggedIn ? (
          <nav className="nav nav--user">
            <Link className="nav__el" to="/" onClick={logoutHandler}>
              Logout
            </Link>
            <Link to="/user-profile" className="nav__el">
              <img
                src={require("../../img/users/user-1.jpg")}
                alt="User "
                className="nav__user-img"
              />
              <span>Jonas</span>
            </Link>

            {/* <!-- <button class="nav__el">Log in</button>
        <button class="nav__el nav__el--cta">Sign up</button> --> */}
          </nav>
        ) : (
          <nav className="nav nav--user">
            <Link className="nav__el" to="/login">
              Login
            </Link>
            <Link className="nav__el" to="/register">
              Register
            </Link>
          </nav>
        )}
      </header>
    </React.Fragment>
  );
};

export default Header;
