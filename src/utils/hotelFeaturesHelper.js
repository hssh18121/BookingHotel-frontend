import React, { useState } from "react";
import {
  FaAddressBook,
  FaCoffee,
  FaParking,
  FaQuestion,
  FaSnowflake,
  FaSwimmingPool,
  FaTv,
  FaUtensils,
  FaUtensilSpoon,
  FaWheelchair,
  FaWifi,
} from "react-icons/fa";
const htmlContainer = (component, description) => {
  return (
    <React.Fragment>
      ({" "}
      <div className="reviews__card hotel-feature-text">
        <div className="reviews__avatar">Hotel Features</div>
        <div className="reviews__avatar" id="hotel-feature-icon">
          {component}
        </div>
        <p className="hotel-feature-description">{description}</p>
      </div>
      )
    </React.Fragment>
  );
};
const hotelFeaturesHelper = (id, data) => {
  const feature = data.data?.hotelFeatures.find((el) => el._id === id);
  console.log(feature);
  if (feature?.iconKeyword === "FaSwimmingPool") {
    return (
      <React.Fragment>
        {htmlContainer(<FaSwimmingPool />, feature?.description)}
      </React.Fragment>
    );
  } else if (feature?.iconKeyword === "FaSnowflake") {
    return (
      <React.Fragment>
        {htmlContainer(<FaSnowflake />, feature?.description)}
      </React.Fragment>
    );
  } else if (feature?.iconKeyword === "FaWheelchair") {
    return (
      <React.Fragment>
        {htmlContainer(<FaWheelchair />, feature?.description)}
      </React.Fragment>
    );
  } else if (feature?.iconKeyword === "FaWifi") {
    return (
      <React.Fragment>
        {htmlContainer(<FaWifi />, feature?.description)}
      </React.Fragment>
    );
  } else if (feature?.iconKeyword === "FaCoffee") {
    return (
      <React.Fragment>
        {htmlContainer(<FaCoffee />, feature?.description)}
      </React.Fragment>
    );
  } else if (feature?.iconKeyword === "FaTv") {
    return (
      <React.Fragment>
        {htmlContainer(<FaTv />, feature?.description)}
      </React.Fragment>
    );
  } else if (feature?.iconKeyword === "FaParking") {
    return (
      <React.Fragment>
        {htmlContainer(<FaParking />, feature?.description)}
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        {htmlContainer(<FaUtensils />, "Restaurant Available")}
      </React.Fragment>
    );
  }
};

export default hotelFeaturesHelper;
