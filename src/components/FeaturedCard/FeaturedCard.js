import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaLocationArrow,
  FaGlobeAsia,
  FaMoneyBillWave,
  FaHotel,
  FaStar,
} from "react-icons/fa";
const FeaturedCard = (props) => {
  const [avgRating, setAvgRating] = useState("");
  useEffect(() => {
    fetch(`api/rating/${props.id}`)
      .then((response) => response.json())
      .then((data) => {
        setAvgRating(data.data.starAvg);
        console.log(data);
      });
  }, [props.id]);
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
          <p></p>
          <p className="card__ratings">
            <span className="card__footer-value">
              {avgRating ? avgRating : 5} stars
            </span>
            <span className="card__footer-text"> Rating </span>
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
