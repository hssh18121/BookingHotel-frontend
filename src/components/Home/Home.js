import React from "react";
import Main from "../Main/Main";
import { Link } from "react-router-dom";
import FeaturedCard from "../FeaturedCard/FeaturedCard";
const Home = (props) => {
  return (
    <React.Fragment>
      <header id="header">
        <div id="header__logo-box"></div>

        <div id="header__text-box">
          <h1 id="heading-primary">
            <span id="heading-primary--main">Travelling</span>
            <span id="heading-primary--sub">is where life happens</span>
          </h1>

          <Link to="/hotels" className="btn  btn--animated" id="btn--white">
            Discover our hotels
          </Link>
        </div>
      </header>
      <main className="main">
        <div className="card-container">
          {props.hotelData.length !== 0 ? (
            props.hotelData.map((element) => (
              <FeaturedCard
                name={element.name}
                id={element._id}
                key={element._id}
                image={element.image}
                description={element.description}
                province={element.province}
              />
            ))
          ) : (
            <h1>No Data Available</h1>
          )}
        </div>
      </main>
    </React.Fragment>
  );
};

export default Home;
