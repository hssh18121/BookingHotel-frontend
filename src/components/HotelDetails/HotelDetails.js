import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Rate from "../Rate/Rate";
import Room from "./Room/Room";
import "./Rating.css";
import "./HotelDetails.css";
import UserRating from "./UserRating/UserRating";
import SectionPicture from "./PictureLibraryModal/SectionPicture";
import { toast } from "react-toastify";
import { Fade } from "react-awesome-reveal";
import HotelFeatures from "./HotelFeatures/HotelFeatures";
import SectionCta from "./SectionCta/SectionCta";
const HotelDetails = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();
  const [checkinDate, setCheckinDate] = useState();
  const [checkoutDate, setCheckoutDate] = useState();
  const hotelDetailData = props.hotelData.find((Element) => Element._id === id);
  const hotelRoomData = props.roomData.filter(
    (Element) => Element.hotel === hotelDetailData._id
  );

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const testOrderedRoom = [];
  const [orderedRoom, setOrderedRoom] = useState(testOrderedRoom);

  const [hotelRating, setHotelRating] = useState([{}]);
  useEffect(() => {
    fetch(`api/rating/${hotelDetailData._id}`)
      .then((response) => response.json())
      .then((data) => {
        setHotelRating(data);
        console.log(data);
      });
  }, []);

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

  const checkinDateHandler = (e) => {
    setCheckinDate(e.target.value);
  };

  const checkoutDateHandler = (e) => {
    setCheckoutDate(e.target.value);
  };

  const commentHandler = (e) => {
    setComment(e.target.value);
  };

  hotelRoomData.forEach((element) => {
    element.quantity = 0;
    testOrderedRoom.push(element);
  });

  const getOrderedRoomQuantity = (quantity, id) => {
    setOrderedRoom((items) => {
      const objIndex = items.findIndex((obj) => obj._id === id);
      items[objIndex].quantity = quantity;
      return items;
    });
  };

  const orderSubmitHandler = (e) => {
    e.preventDefault();
    if (!localStorage.getItem("token")) {
      showErrorMessage("You need to login to perform this action!");
    }
    const sendOrder = orderedRoom.filter((room) => room.quantity !== 0);
    console.log(sendOrder);
    const bookings = sendOrder.map((anOrder) => {
      anOrder.checkIn = checkinDate;
      anOrder.checkOut = checkoutDate;
      anOrder.room = anOrder._id;
      return anOrder;
    });
    fetch("http://localhost:5000/api/booking", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },

      body: JSON.stringify({
        bookings,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          showSuccessMessage("Booking successfully");
          console.log(data.data);
          window.setTimeout(function () {
            window.location.href = "/booking-history";
          }, 2000);
        } else {
          console.log(data.message);
          showErrorMessage("An error occured! Booking failed");
        }
      });
  };

  const userRatingSubmitHandler = (e) => {
    e.preventDefault();
    if (!localStorage.getItem("token")) {
      showErrorMessage("You need to login to perform this action");
    }
    const star = rating;
    const userRating = hotelRating.data?.ratings.find(
      (element) => element.user._id === localStorage.getItem("userID")
    );
    if (userRating !== undefined) {
      fetch(`http://localhost:5000/api/rating/${hotelDetailData._id}`, {
        method: "PUT",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          star,
          comment,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.status === "success") {
            showSuccessMessage("Update rating successfully");

            window.setTimeout(function () {
              window.location.reload();
            }, 3000);
          } else {
            showErrorMessage("An error occured! Update failed");
          }
        });
    } else {
      fetch(`http://localhost:5000/api/rating/${hotelDetailData._id}`, {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          star,
          comment,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.status === "success") {
            showSuccessMessage("Create rating successfully!");

            window.setTimeout(function () {
              window.location.reload();
            }, 2000);
          } else {
            showErrorMessage("An error occured! Create rating failed");
          }
        });
    }
  };

  return (
    <React.Fragment>
      <Fade
        className="section-header"
        style={{
          backgroundImage: `linear-gradient(rgba(34, 34, 34, 0.6),rgba(34, 34, 34, 0.6)), url(${hotelDetailData.image}})`,
        }}
      >
        <div className="heading-box">
          <h1 className="heading-primary">
            <span>
              {hotelDetailData.name}
              <br />
            </span>
          </h1>
          <div className="heading-box__group">
            <div className="heading-box__detail">
              <svg className="heading-box__icon">
                {/* <use xlink:href="img/icons.svg#icon-clock"></use> */}
              </svg>
              <span className="heading-box__text">
                {hotelDetailData.province}
              </span>
            </div>
            <div className="heading-box__detail">
              <svg className="heading-box__icon">
                {/* <use xlink:href="img/icons.svg#icon-map-pin"></use> */}
              </svg>
              <span className="heading-box__text">Viet Nam</span>
            </div>
          </div>
        </div>
      </Fade>

      <section className="section-description">
        <div className="overview-box">
          <div>
            <div className="overview-box__group">
              <h2 className="heading-secondary ma-bt-lg">Thông tin chung:</h2>
              <div className="overview-box__detail">
                <svg className="overview-box__icon">
                  {/* <use xlink:href="img/icons.svg#icon-calendar"></use> */}
                </svg>
                <span className="overview-box__label">Phòng trống:</span>
                <span className="overview-box__text">Có phòng</span>
              </div>

              <div className="overview-box__detail">
                <svg className="overview-box__icon">
                  {/* <use xlink:href="img/icons.svg#icon-user"></use> */}
                </svg>
                <span className="overview-box__label">Sức chứa:</span>
                <span className="overview-box__text">160 người</span>
              </div>
              <div className="overview-box__detail">
                <svg className="overview-box__icon">
                  {/* <use xlink:href="img/icons.svg#icon-star"></use> */}
                </svg>
                <span className="overview-box__label">Rating</span>
                <span className="overview-box__text">4.9 / 5</span>
              </div>
            </div>

            <div className="overview-box__group">
              <h2 className="heading-secondary ma-bt-lg">Liên hệ</h2>

              <div className="overview-box__detail">
                <img
                  src={require("../../img/users/user-19.jpg")}
                  alt="Lead guide"
                  className="overview-box__img"
                />
                <span className="overview-box__label">Hotel Admin</span>
                <span className="overview-box__text">0969834945</span>
              </div>
              <div className="overview-box__detail">
                <img
                  src={require("../../img/users/user-18.jpg")}
                  alt="Tour guide"
                  className="overview-box__img"
                />
                <span className="overview-box__label">Hotel Admin</span>
                <span className="overview-box__text">0969834945</span>
              </div>
              <div className="overview-box__detail">
                <img
                  src={require("../../img/users/user-17.jpg")}
                  alt="Intern"
                  className="overview-box__img"
                />
                <span className="overview-box__label">Hotel Admin</span>
                <span className="overview-box__text">0969834945</span>
              </div>
            </div>
          </div>
        </div>

        <div className="description-box">
          <h2 className="heading-secondary ma-bt-lg">Mô tả về khách sạn</h2>
          <p className="description__text">{hotelDetailData.description}</p>
          <p className="description__text"></p>
        </div>
      </section>

      <SectionPicture hotelDetailData={hotelDetailData} />

      <HotelFeatures hotelFeatures={hotelDetailData.hotelFeatures} />
      <SectionCta />

      <section className="section-cta flex-justify-center">
        <form>
          <div className="checkin-checkout-container">
            <div className="checkin-checkout-wrapper">
              <label for="checkin">Checkin: </label>
              <input
                type="date"
                id="checkin"
                name="checkin"
                className="checkin-out-input"
                value={checkinDate}
                onChange={checkinDateHandler}
              />
            </div>
            <div className="checkin-checkout-wrapper">
              <label for="checkout">Checkout: </label>
              <input
                type="date"
                id="checkout"
                name="checkout"
                className="checkin-out-input"
                value={checkoutDate}
                onChange={checkoutDateHandler}
              />
            </div>
          </div>

          <table>
            <thead>
              <tr>
                <th></th>
                <th>Type</th>
                {/* <th>Description</th> */}
                <th>Suitable for</th>
                <th>Price</th>
                <th>Order</th>
                <th>Detail</th>
              </tr>
            </thead>

            <tbody>
              {hotelRoomData.map((element) => (
                <Room roomData={element} />
              ))}
            </tbody>
          </table>
          <input
            type="submit"
            value="Order room now"
            class="btn btn--green btn--small"
            onClick={orderSubmitHandler}
          />
        </form>
      </section>
      <section className="section-cta ">
        <div className="">
          <div className="cta " id="rating-section">
            <h2 id="rating-section-title">Tell us about your experience</h2>
            <div className="line" id="break-line">
              &nbsp;
            </div>
            <div id="star-component-wrapper">
              <div id="star-and-description-wrapper">
                <Rate
                  rating={rating}
                  onRating={(rate) => setRating(rate)}
                  count={10}
                />
                <p id="rating-description">Rating description - {rating}</p>
              </div>

              <textarea
                id="textarea-styling"
                placeholder="Leave your comment about this hotel in here"
                value={comment}
                onChange={commentHandler}
              ></textarea>
              <div id="button-wrapper">
                <button
                  className="btn btn--green btn--small"
                  id="add-margin-bottom"
                  onClick={userRatingSubmitHandler}
                >
                  Submit comment
                </button>
              </div>
            </div>

            <h2 id="rating-section-title">Comment section</h2>
            <div id="user-reviews-list">
              {hotelRating.data?.ratings.map((element) => (
                <UserRating ratingData={element} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default HotelDetails;
