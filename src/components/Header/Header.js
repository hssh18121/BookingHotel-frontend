import React from "react";
import { Link } from "react-router-dom";
const Header = (props) => {
  // const openLoginFormHandler = () => {
  //   props.openLoginFormHandler(true);
  // };

  // const openTourHandler = () => {
  //   props.openTourHandler(true);
  // };
  return (
    <React.Fragment>
      <header className="header">

        <nav className="nav nav--tours">
          <Link className="nav__el" to="/home">
            All tours
          </Link>
          
          <form className="nav__search">
            <button className="nav__search-btn">
              <svg>
                <use xlinkHref="../../img/icons.svg#icon-search"></use>
              </svg>
            </button>           
            <input type="text" 
                   placeholder="where are you going?" 
                   className="nav__search-input"
            />           
          </form>
        </nav>

        <div className="header__logo">
          <img src={require("../../img/logo-white.png")} alt="Natours logo" />
        </div>

        <nav className="nav nav--user">
          <Link className="nav__el" to="/login">
            Login
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

      </header>
    </React.Fragment>
  );
};

export default Header;
