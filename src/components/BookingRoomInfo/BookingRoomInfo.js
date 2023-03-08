import React, { useEffect, useState } from "react";
import "../UserActivityHistory/BookingHistory.css";
import BookingDetailModal from "./BookingDetailModal";
import { BsFillEyeFill } from "react-icons/bs";
const BookingRoomInfo = (props) => {
  const [openModal, setOpenModal] = useState(false);
  const openModalHandler = () => {
    setOpenModal(true);
  };

  const closeModalHandler = () => {
    setOpenModal(false);
  };
  return (
    <React.Fragment>
      {openModal && (
        <BookingDetailModal
          onClose={closeModalHandler}
          roomInfo={props.roomInfo}
        />
      )}
      <tr id="booking-history-data">
        <th>{props.roomInfo.createdAt}</th>
        <th>{props.roomInfo.hotelName}</th>
        <th>{props.roomInfo.roomData?.name}</th>
        <th id="status--processing">{props.roomInfo.status}</th>
        <th>
          <button
            id="view-detail-button"
            onClick={openModalHandler}
            style={{ align: "center" }}
          >
            <BsFillEyeFill className="bs-eye-fill" />
          </button>
        </th>
      </tr>
    </React.Fragment>
  );
};

export default BookingRoomInfo;
