import React from "react";
import "./HotelFeatures.css";
import { FaSwimmingPool } from "react-icons/fa";
const HotelFeatures = (props) => {
  return (
    <React.Fragment>
      <section className="section-reviews">
        <div className="reviews">
          <div className="reviews__card">
            <div className="reviews__avatar" id="hotel-feature-icon">
              <FaSwimmingPool />
            </div>
            <p className="hotel-feature-description">Swimming Pool</p>
          </div>

          <div className="reviews__card">
            <div className="reviews__avatar" id="hotel-feature-icon">
              <FaSwimmingPool />
            </div>
            <p className="hotel-feature-description">Swimming Pool </p>
          </div>

          <div className="reviews__card">
            <div className="reviews__avatar" id="hotel-feature-icon">
              <FaSwimmingPool />
            </div>
            <p className="hotel-feature-description">WheelChair </p>
          </div>

          <div className="reviews__card">
            <div className="reviews__avatar" id="hotel-feature-icon">
              <FaSwimmingPool />
            </div>
            <p className="hotel-feature-description">Air Conditioning</p>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default HotelFeatures;
