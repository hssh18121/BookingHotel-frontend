import React from "react";
import Main from "../Main/Main";
const Home = (props) => {
  return (
    <React.Fragment>
      <header id="header">
        <div id="header__logo-box">
          <img src="img/logo-white.png" alt="Logo" id="header__logo" />
        </div>

        <div id="header__text-box">
          <h1 id="heading-primary">
            <span id="heading-primary--main">Travelling</span>
            <span id="heading-primary--sub">is where life happens</span>
          </h1>

          <a href="/hotels" className="btn  btn--animated" id="btn--white">
            Discover our hotels
          </a>
        </div>
      </header>
      <Main hotelData={props.hotelData} />
    </React.Fragment>
  );
};

export default Home;
