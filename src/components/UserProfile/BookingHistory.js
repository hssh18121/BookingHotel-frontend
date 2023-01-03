import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./BookingHistory.css";
const BookingHistory = () => {
  useEffect(() => {
    fetch(
      `http://localhost:5000/api/booking/${localStorage.getItem("userID")}`,
      {
        method: "GET",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Access-Control-Allow-Origin": "*",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          console.log("Success");
        }
      });
  }, []);

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
              <li>
                <Link to="/my-reviews-history">
                  <svg>
                    {/* <use xlink:href="img/icons.svg#icon-star"></use> */}
                  </svg>
                  My reviews
                </Link>
              </li>
              <li>
                <Link to="/my-rating-history">
                  <svg>
                    {/* <use xlink:href="img/icons.svg#icon-credit-card"></use> */}
                  </svg>
                  Rating
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
                    <th>Date</th>
                    <th>Price</th>
                    <th>Hotel</th>
                    <th>Status</th>
                    <th>View detail</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <th>12-01-2022</th>
                    <td>3400000</td>
                    <td>Mgallery Cat Ba</td>
                    <td>Success</td>
                    <td>
                      <Link to="./">View more</Link>
                    </td>
                  </tr>
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
