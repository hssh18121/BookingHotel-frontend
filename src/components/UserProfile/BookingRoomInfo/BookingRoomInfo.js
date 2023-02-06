import React, { useEffect } from "react";
import "../BookingHistory.css";
const BookingRoomInfo = (props) => {
  return (
    <React.Fragment>
      <tr id="booking-history-data">
        <th>{props.roomInfo.createdAt}</th>
        <th>{props.roomInfo.hotelName}</th>
        <th>{props.roomInfo.roomData?.name}</th>
        <th id="status--processing">{props.roomInfo.status}</th>
        <th>View detail</th>
      </tr>
    </React.Fragment>
  );
};

export default BookingRoomInfo;
