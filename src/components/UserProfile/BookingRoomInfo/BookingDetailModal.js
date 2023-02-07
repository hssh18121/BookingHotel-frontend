import React from "react";
import { useState } from "react";
import "./BookingDetailModal.css";

const BookingDetailModal = (props) => {
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
            props.roomInfo.roomData.image
              ? props.roomInfo.roomData.image
              : require("../../../img/double-room.jpg")
          }
          alt="room-img"
          className="room-preview"
        />
        <div className="order-detail-container">
          <h2 className="order-detail-title">Order detail info:</h2>
          <p className="order-detail-paragraph">
            <strong>Checkin Date:</strong> {props.roomInfo.checkinAt}
          </p>
          <p className="order-detail-paragraph">
            <strong>Checkout Date:</strong> {props.roomInfo.checkoutAt}
          </p>
          <p className="order-detail-paragraph">
            <strong>Price:</strong> {props.roomInfo.roomData.price}
          </p>

          <p className="order-detail-paragraph">
            <strong>Status:</strong> {props.roomInfo.status}
          </p>

          <hr />
        </div>
        <div className="order-detail-container">
          <h2 className="order-detail-title">Room description:</h2>
          <p className="order-detail-paragraph">
            <strong>Room Description:</strong>{" "}
            {props.roomInfo.roomData.description}
          </p>
        </div>
      </div>
      <div className="overlay" onClick={closeModalHandler}></div>
    </React.Fragment>
  );
};

export default BookingDetailModal;
