import React, { useState, useEffect } from "react";
import "./CheckoutPage.css";
import { toast } from "react-toastify";

const CheckoutPage = (props) => {
  const showSuccessMessage = (message) => {
    toast.success(`${message}`, {
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

  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");

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
        } else {
          toast.error("An error occured! Can not get user data!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      });
  }, []);

  const fullnameHandler = (e) => {
    setFullname(e.target.value);
  };

  const phoneHandler = (e) => {
    setPhone(e.target.value);
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const closeModalHandler = () => {
    props.onClose();
  };

  const bookRoomHandler = (e) => {
    e.preventDefault();
    const checkIn = props.checkinDate;
    const checkOut = props.checkoutDate;
    if (!localStorage.getItem("token")) {
      showErrorMessage("You need to login to perform this action!");
    }

    fetch(`http://localhost:5000/api/booking/${props.roomInfo._id}`, {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },

      body: JSON.stringify({
        checkIn,
        checkOut,
        userInfo: {
          name: fullname,
          phone: phone,
          email: email,
        },
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          showSuccessMessage("Booking successfully");
          console.log(data.data);
          window.setTimeout(function () {
            window.location.href = "/checkout-success";
          }, 2000);
        } else {
          console.log(data.message);
          showErrorMessage("An error occured! Booking failed");
        }
      });
  };
  return (
    <>
      <div className="checkout-modal">
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

        <form className="form form-user-data" id="checkout-form">
          <h1 className="checkout-form-title">
            One more step! Fill your contact info
          </h1>
          <h5 className="room-order-description">
            <b>Order description: </b>
            {props.roomInfo.name}, suitable for{" "}
            {props.roomInfo.peopleAmount.adults} adults and{" "}
            {props.roomInfo.peopleAmount.child} children
          </h5>
          <div className="form__group">
            <label className="form__label" for="name">
              Your Fullname
            </label>

            <input
              className="form__input"
              id="name"
              type="text"
              value={fullname}
              required=""
              name="name"
              onChange={fullnameHandler}
            />
          </div>
          <div className="form__group ma-bt-md"></div>
          <div className="form__group ma-bt-md">
            <label className="form__label" for="email">
              Your Phone Number
            </label>
            <input
              className="form__input"
              id="phone"
              type="text"
              value={phone}
              required=""
              name="phone"
              onChange={phoneHandler}
            />
          </div>
          <div className="form__group ma-bt-md">
            <label className="form__label" for="email">
              Your Email Address
            </label>
            <input
              className="form__input"
              id="phone"
              type="text"
              value={email}
              required=""
              name="phone"
              onChange={emailHandler}
            />
          </div>

          <div className="order-room-button-container">
            <button
              className="btn btn--green span-all-rows"
              id="order-room-button"
              onClick={bookRoomHandler}
            >
              Checkout
            </button>
          </div>
        </form>
      </div>
      <div className="overlay" onClick={closeModalHandler}></div>
    </>
  );
};

export default CheckoutPage;
