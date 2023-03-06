import React, { useEffect, useState } from "react";
import "./HotelFeatures.css";
import { FaParking } from "react-icons/fa";
import hotelFeaturesHelper from "../../utils/hotelFeaturesHelper";
const HotelFeatures = (props) => {
  const data = props.hotelDetailData.hotelFeatures;
  const [featureData, setFeatureData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/api/hotelFeature/all`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setFeatureData(data);
      });
  }, []);

  return (
    <React.Fragment>
      <section className="section-reviews">
        <div className="reviews">
          {data.map((el) => {
            return hotelFeaturesHelper(`${el}`, featureData);
          })}
          {hotelFeaturesHelper("unknown", featureData)}
          {hotelFeaturesHelper("63ea6fe80117e3e38cd5026a", featureData)}
          {/* <div className="reviews__card">
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
          </div> */}
        </div>
      </section>
    </React.Fragment>
  );
};

export default HotelFeatures;