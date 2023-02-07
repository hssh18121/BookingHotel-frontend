import React from "react";

const SectionPicture = (props) => {
  return (
    <React.Fragment>
      <section className="section-pictures">
        <div className="picture-box">
          <img
            className="picture-box__img picture-box__img--1"
            src={
              props.hotelDetailData.imageLibrary[0]
                ? props.hotelDetailData.imageLibrary[0]
                : require("../../../img/tours/tour-5-1.jpg")
            }
            alt="The Park Camper Tour 1"
          />
        </div>
        <div className="picture-box">
          <img
            className="picture-box__img picture-box__img--2"
            src={
              props.hotelDetailData.imageLibrary[1]
                ? props.hotelDetailData.imageLibrary[1]
                : require("../../../img/tours/tour-5-2.jpg")
            }
            alt="The Park Camper Tour 1"
          />
        </div>
        <div className="picture-box">
          <img
            className="picture-box__img picture-box__img--3"
            src={
              props.hotelDetailData.imageLibrary[2]
                ? props.hotelDetailData.imageLibrary[2]
                : require("../../../img/tours/tour-5-3.jpg")
            }
            alt="The Park Camper Tour 1"
          />
        </div>
      </section>
    </React.Fragment>
  );
};

export default SectionPicture;
