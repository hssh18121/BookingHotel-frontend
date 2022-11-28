import React from "react";

const Header = () => {
  return (
    <React.Fragment>
      <header className="header">
        <nav className="nav nav--tours">
          <a href="google.come" className="nav__el">
            All tours
          </a>
          <form className="nav__search">
            <button className="nav__search-btn">
              <svg>
                <use xlinkHref="../../img/icons.svg#icon-search"></use>
              </svg>
            </button>
            <input
              type="text"
              placeholder="Search tours"
              className="nav__search-input"
            />
          </form>
        </nav>
        <div className="header__logo">
          <img src={require("../../img/logo-white.png")} alt="Natours logo" />
        </div>
        <nav className="nav nav--user">
          <a href="google.com" className="nav__el">
            My bookings
          </a>
          <a href="google.com" className="nav__el">
            <img
              src={require("../../img/users/user-1.jpg")}
              alt="User "
              className="nav__user-img"
            />
            <span>Jonas</span>
          </a>

          {/* <!-- <button class="nav__el">Log in</button>
        <button class="nav__el nav__el--cta">Sign up</button> --> */}
        </nav>
      </header>
    </React.Fragment>
  );
};

export default Header;
