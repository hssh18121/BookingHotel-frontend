import React from "react";

const FeaturedCard = (props) => {
  return (
    <React.Fragment>
      <div className="card">
        <div className="card__header">
          <div className="card__picture">
            <div className="">&nbsp;</div>
            <img
              src={require("../../img/tours/tour-1-cover.jpg")}
              alt="Tour 1"
              className="card__picture-img"
            />
          </div>

          <h3 className="heading-tertirary">
            <span>{props.name}</span>
          </h3>
        </div>

        <div className="card__details">
          <h4 className="card__sub-heading">Difficult 14-day tour</h4>
          <p className="card__text">{props.description}</p>
          <div className="card__data">
            <svg className="card__icon">
              {/* <use xlink:href="img/icons.svg#icon-map-pin"></use> */}
            </svg>
            <span>California, USA</span>
          </div>
          <div className="card__data">
            <svg className="card__icon">
              {/* <use xlink:href="img/icons.svg#icon-calendar"></use> */}
            </svg>
            <span>July 2021</span>
          </div>
          <div className="card__data">
            <svg className="card__icon">
              {/* <use xlink:href="img/icons.svg#icon-flag"></use> */}
            </svg>
            <span>5 stops</span>
          </div>
          <div className="card__data">
            <svg className="card__icon">
              {/* <use xlink:href="img/icons.svg#icon-user"></use> */}
            </svg>
            <span>8 people</span>
          </div>
        </div>

        <div className="card__footer">
          <p>
            <span className="card__footer-value">$1,997</span>
            <span className="card__footer-text">per person</span>
          </p>
          <p className="card__ratings">
            <span className="card__footer-value">4.7</span>
            <span className="card__footer-text">rating (23)</span>
          </p>
          <a href="google.com" className="btn btn--green btn--small">
            Details
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FeaturedCard;
