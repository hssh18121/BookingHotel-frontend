import React, { useState } from "react";
import { FaAddressBook, FaSwimmingPool, FaWheelchair } from "react-icons/fa";
const hotelFeaturesHelper = (id, data) => {
  const feature = data.data?.hotelFeatures.find((el) => el._id === id);
  console.log(feature);
  if (feature?.iconKeyword === "FaSwimmingPool") {
    return (
      <React.Fragment>
        ({" "}
        <div className="reviews__card hotel-feature-text">
          <div className="reviews__avatar">Hotel Features</div>
          <div className="reviews__avatar" id="hotel-feature-icon">
            <FaSwimmingPool />
          </div>
          <p className="hotel-feature-description">{feature?.description}</p>
        </div>
        )
      </React.Fragment>
    );
  } else if (feature?.iconKeyword === "FaWheelchair") {
    return (
      <React.Fragment>
        ({" "}
        <div className="reviews__card hotel-feature-text">
          <div className="reviews__avatar">Hotel Features</div>
          <div className="reviews__avatar" id="hotel-feature-icon">
            <FaWheelchair />
          </div>
          <p className="hotel-feature-description">{feature?.description}</p>
        </div>
        )
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        ({" "}
        <div className="reviews__card hotel-feature-text">
          <div className="reviews__avatar">Hotel Features</div>
          <div className="reviews__avatar" id="hotel-feature-icon">
            <FaAddressBook />
          </div>
          <p className="hotel-feature-description">{feature?.description}</p>
        </div>
        )
      </React.Fragment>
    );
  }
};

export default hotelFeaturesHelper;
