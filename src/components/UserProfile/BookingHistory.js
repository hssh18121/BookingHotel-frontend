import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const BookingHistory = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [oldPassword, setOldPassWord] = useState("");
  const [newPassword, setNewPassword] = useState("");
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
          setEmail(data.data.user.email);
          setFullname(data.data.user.fullname);
          setPhone(data.data.user.phone);
          setUsername(data.data.user.username);
        }
      });
  }, []);

  const fullnameHandler = (e) => {
    setFullname(e.target.value);
  };

  const usernameHandler = (e) => {
    setUsername(e.target.value);
  };

  const phoneHandler = (e) => {
    setPhone(e.target.value);
  };

  const oldPasswordHandler = (e) => {
    setOldPassWord(e.target.value);
  };

  const newPasswordHandler = (e) => {
    setNewPassword(e.target.value);
  };

  const updateHandler = (e) => {
    e.preventDefault();
    console.log(email, username, phone);
    fetch(`http://localhost:5000/api/me/profile`, {
      method: "PUT",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        username,
        fullname,
        phone,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          alert("update successful");
        }
      });
  };

  const savePasswordHandler = (e) => {
    e.preventDefault();
    fetch(`http://localhost:5000/api/me/password`, {
      method: "PUT",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        oldPassword,
        newPassword,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          alert("update password successful");
        }
      });
  };
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
            <div className="user-view__form-container">
              <h2 className="heading-secondary ma-bt-md">Order History</h2>
              <p>This page is currently empty...</p>
            </div>
            <div className="line">&nbsp;</div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default BookingHistory;
