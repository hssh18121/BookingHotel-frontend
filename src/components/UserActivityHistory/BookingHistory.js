import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "./BookingHistory.css";
import BookingRoomInfo from "../BookingRoomInfo/BookingRoomInfo";
const BookingHistory = (props) => {
  const [bookingsList, setBookingsList] = useState([{}]);
  const showErrorMessage = (message) => {
    toast.error(`${message}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  useEffect(() => {
    fetch(`http://localhost:5000/api/me`, {
      method: "GET",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          setBookingsList(data.data.user.bookings);
          console.log(data.data.user.bookings);
        } else {
          console.log(data.message);
          showErrorMessage("An error occured! Get booking data failed!");
        }
      });
  }, []);

  const formattedBookingsList = bookingsList.map((el) => {
    const createdDate = new Date(el.createdAt);
    const checkinDate = new Date(el.checkinAt);
    const checkoutDate = new Date(el.checkoutAt);

    el.createdAt = createdDate.toDateString();
    el.checkinAt = checkinDate.toDateString();
    el.checkoutAt = checkoutDate.toDateString();
    const roomData = props.allRoomData.find((room) => room._id === el.room);
    const hotelName = props.allHotelData.find(
      (hotel) => hotel._id === roomData?.hotel
    )?.name;

    el.roomData = roomData;
    el.hotelName = hotelName;
    console.log(el);
    return el;
  });

  return (
    <React.Fragment>
      <main className="main">
        <div className="user-view">
          <nav className="user-view__menu">
            <ul className="side-nav">
              <li>
                <Link to="/user-profile">
                  <svg>
                    {/* <use xlink:href="img/icons.svg#icon-settings"></use> */}
                  </svg>
                  Settings
                </Link>
              </li>
              <li className="side-nav--active">
                <Link to="/order-history">
                  <svg>
                    {/* <use xlink:href="img/icons.svg#icon-briefcase"></use> */}
                  </svg>
                  My bookings
                </Link>
              </li>
            </ul>
          </nav>

          <div className="user-view__content">
            <div
              className="user-view__form-container"
              id="booking-history-view__form-container"
            >
              <h2 className="heading-secondary ma-bt-md">Order History</h2>
              <table id="booking-history-table">
                <thead>
                  <tr>
                    <th id="booking-history-table-orderedDate">Date</th>
                    <th>Hotel</th>
                    <th id="booking-history-table-roomName">Room info</th>
                    <th>Status</th>
                    <th>Detail</th>
                  </tr>
                </thead>

                <tbody>
                  {formattedBookingsList
                    ?.slice(0)
                    .reverse()
                    .map((element) => (
                      <BookingRoomInfo roomInfo={element} />
                    ))}
                </tbody>
              </table>
            </div>
            <div className="line">&nbsp;</div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default BookingHistory;
