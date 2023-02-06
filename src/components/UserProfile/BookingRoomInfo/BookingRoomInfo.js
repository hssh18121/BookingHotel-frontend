import React, { useEffect, useState } from "react";
import "../BookingHistory.css";
import BookingDetailModal from "./BookingDetailModal";
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
          <button id="view-detail-button" onClick={openModalHandler}>
            View detail
          </button>
        </th>
      </tr>
    </React.Fragment>
  );
};

export default BookingRoomInfo;
