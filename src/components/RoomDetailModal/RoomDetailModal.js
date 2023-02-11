import React from "react";
import { FaBed, FaCheck, FaRegImage } from "react-icons/fa";
import "./RoomDetailModal.css";
const RoomDetailModal = (props) => {
  const closeModalHandler = () => {
    props.onClose();
  };

  return (
    <React.Fragment>
      <div className="modal">
        <button className="close-modal" onClick={closeModalHandler}>
          &times;
        </button>
        <img
          src={
            props.roomInfo.image
              ? props.roomInfo.image
              : require("../../img/double-room.jpg")
          }
          alt="room-img"
          className="room-preview"
        />

        <div className="room-detail-container">
          <h2 className="room-detail-title">{props.roomInfo.name}</h2>
          <div className="room-detail-info-container">
            <p className="room-description-paragraph">
              {props.roomInfo.description}
            </p>
            <div>
              <div className="people-number-detail-div">
                <p>
                  <strong>Max. number of persons: </strong>
                </p>
                <p className="adult-children-number">
                  {props.roomInfo.peopleAmount.adults} adults
                </p>
                <p className="adult-children-number">
                  {props.roomInfo.peopleAmount.child} children
                </p>
              </div>
              <div className="room-price-div">
                <p>
                  <strong>Price: </strong>
                </p>
                <p className="adult-children-number">
                  {props.roomInfo.price} VND
                </p>
              </div>
            </div>
          </div>
          <hr />
        </div>

        <div className="room-detail-container">
          <h2 className="room-detail-title">Special Services</h2>
          <div className="service-info-container">
            <p className="service-paragraph">
              <FaCheck />
              {"  "}King size beds x1
            </p>
            <p className="service-paragraph">
              <FaCheck /> {"  "}
              Extra bed in room for adult on request
            </p>
          </div>
        </div>
        <div className="order-room-button-container">
          <button
            className="btn btn--green span-all-rows"
            id="order-room-button"
            onClick={closeModalHandler}
          >
            Close modal
          </button>
        </div>
      </div>
      <div className="overlay" onClick={closeModalHandler}></div>
    </React.Fragment>
  );
};

export default RoomDetailModal;
