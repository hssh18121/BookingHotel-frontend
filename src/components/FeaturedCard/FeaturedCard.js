import React from "react";
import { Link } from "react-router-dom";
import {
  FaLocationArrow,
  FaGlobeAsia,
  FaMoneyBillWave,
  FaHotel,
} from "react-icons/fa";
const FeaturedCard = (props) => {
  return (
    <React.Fragment>
      <div className="card">
        <div className="card__header">
          <div className="card__picture ">
            <div className="card__picture-overlay">&nbsp;</div>
            <img src={props.image} alt="Tour 1" className="card__picture-img" />
          </div>

          <h3 className="heading-tertirary">
            <span>{props.name}</span>
          </h3>
        </div>

        <div className="card__details">
          <h4 className="card__sub-heading">Accor Franchise</h4>
          <p className="card__text">Featured Hotel</p>
          <div className="card__data">
            <FaLocationArrow />

            <span>{props.province}</span>
          </div>
          <div className="card__data">
            <FaGlobeAsia />
            <span>Vietnam</span>
          </div>
          <div className="card__data">
            <FaMoneyBillWave />
            <span>Discount Available</span>
          </div>
          <div className="card__data">
            <FaHotel />
            <span>Room Available</span>
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
          <Link
            to={`/hotels/details/${props.id}`}
            className="btn btn--green btn--small"
            // onClick={(e) => e.preventDefault()}
          >
            Details
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FeaturedCard;
