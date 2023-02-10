import React from "react";
import { useState } from "react";
import PictureLibraryModal from "./PictureLibraryModal/PictureLibraryModal";
const SectionPicture = (props) => {
  const [openModal, setOpenModal] = useState([false, 0]);

  const openModalHandler = (orderParam) => {
    setOpenModal([true, orderParam]);
  };

  const closeModalHandler = () => {
    setOpenModal(false);
  };

  return (
    <React.Fragment>
      {openModal[0] && (
        <PictureLibraryModal
          onClose={closeModalHandler}
          images={props.hotelDetailData.imageLibrary}
          imageOrder={openModal[1]}
        />
      )}
      <section className="section-pictures">
        <div className="picture-box">
          <img
            onClick={() => openModalHandler(0)}
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
            onClick={() => openModalHandler(1)}
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
            onClick={() => openModalHandler(2)}
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
      <p
        className="view-image-library-link"
        onClick={() => openModalHandler(0)}
      >
        View Image Library
      </p>
    </React.Fragment>
  );
};

export default SectionPicture;
