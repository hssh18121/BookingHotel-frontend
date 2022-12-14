import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Rate from "../Rate/Rate";
import Room from "./Room/Room";
import "./Rating.css";
import { FaStar } from "react-icons/fa";
import UserRating from "./UserRating.js/UserRating";
import { ToastContainer, toast } from "react-toastify";
const HotelDetails = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();

  const [hotelDetailData, setHotelDetailedData] = useState(
    props.hotelData.find((Element) => Element._id === id)
  );
  const [hotelRoomData, setHotelRoomData] = useState(
    props.roomData.filter((Element) => Element.hotel === hotelDetailData._id)
  );

  const [hotelRating, setHotelRating] = useState([{}]);
  useEffect(() => {
    fetch(`api/rating/${hotelDetailData._id}`)
      .then((response) => response.json())
      .then((data) => {
        setHotelRating(data);
        console.log(data);
      });
  }, []);

  const [rating, setRating] = useState(0);

  const [comment, setComment] = useState("");

  const testOrderedRoom = [];

  hotelRoomData.forEach((element) => {
    element.quantity = 0;
    testOrderedRoom.push(element);
  });
  const [orderedRoom, setOrderedRoom] = useState(testOrderedRoom);

  const getOrderedRoomQuantity = (quantity, id) => {
    setOrderedRoom((items) => {
      const objIndex = items.findIndex((obj) => obj._id === id);
      items[objIndex].quantity = quantity;
      return items;
    });
  };

  const orderSubmitHandler = (e) => {
    e.preventDefault();
    const sendOrder = orderedRoom.filter((room) => room.quantity !== 0);
    console.log(sendOrder);
    const bookings = sendOrder.map((anOrder) => {
      anOrder.checkIn = "2023-01-6";
      anOrder.checkOut = "2023-01-8";
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
          alert("Booking successfully");
          console.log(data.data);
          // window.location.href = "./hotels";
        } else {
          console.log(data.message);
        }
      });
  };

  const commentHandler = (e) => {
    setComment(e.target.value);
  };

  const userRatingSubmitHandler = (e) => {
    console.log(rating, comment);
    e.preventDefault();
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
            toast.success("Updating rating successfully!", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });

            window.setTimeout(function () {
              window.location.reload();
            }, 3000);
          } else {
            toast.error("An error occured! Update rating failed", {
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
            toast.success("Create rating successfully!", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });

            window.setTimeout(function () {
              window.location.reload();
            }, 3000);
          } else {
            toast.error("An error occured! Create rating failed", {
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
    }
  };

  return (
    <React.Fragment>
      <section
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
              <span className="heading-box__text">Ha Noi</span>
            </div>
            <div className="heading-box__detail">
              <svg className="heading-box__icon">
                {/* <use xlink:href="img/icons.svg#icon-map-pin"></use> */}
              </svg>
              <span className="heading-box__text">Viet Nam</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-description">
        <div className="overview-box">
          <div>
            <div className="overview-box__group">
              <h2 className="heading-secondary ma-bt-lg">Th??ng tin chung:</h2>
              <div className="overview-box__detail">
                <svg className="overview-box__icon">
                  {/* <use xlink:href="img/icons.svg#icon-calendar"></use> */}
                </svg>
                <span className="overview-box__label">Ph??ng tr???ng:</span>
                <span className="overview-box__text">C?? ph??ng</span>
              </div>

              <div className="overview-box__detail">
                <svg className="overview-box__icon">
                  {/* <use xlink:href="img/icons.svg#icon-user"></use> */}
                </svg>
                <span className="overview-box__label">S???c ch???a:</span>
                <span className="overview-box__text">160 ng?????i</span>
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
              <h2 className="heading-secondary ma-bt-lg">Li??n h???</h2>

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
          <h2 className="heading-secondary ma-bt-lg">M?? t??? v??? kh??ch s???n</h2>
          <p className="description__text">{hotelDetailData.description}</p>
          <p className="description__text">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum!
          </p>
        </div>
      </section>

      <section className="section-pictures">
        <div className="picture-box">
          <img
            className="picture-box__img picture-box__img--1"
            src={require("../../img/tours/tour-5-1.jpg")}
            alt="The Park Camper Tour 1"
          />
        </div>
        <div className="picture-box">
          <img
            className="picture-box__img picture-box__img--2"
            src={require("../../img/tours/tour-5-2.jpg")}
            alt="The Park Camper Tour 1"
          />
        </div>
        <div className="picture-box">
          <img
            className="picture-box__img picture-box__img--3"
            src={require("../../img/tours/tour-5-3.jpg")}
            alt="The Park Camper Tour 1"
          />
        </div>
      </section>

      <section className="section-map">
        <div id="map"></div>
      </section>

      <section className="section-reviews">
        <div className="reviews">
          <div className="reviews__card">
            <div className="reviews__avatar">
              <img
                src={require("../../img/users/user-7.jpg")}
                alt="Jim Brown"
                className="reviews__avatar-img"
              />
              <h6 className="reviews__user">Jim Brown</h6>
            </div>
            <p className="reviews__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              dignissimos sint quo commodi corrupti accusantium veniam saepe
              numquam.
            </p>
            <div className="reviews__rating">
              <svg className="reviews__star reviews__star--active">
                {/* <use xlink:href="img/icons.svg#icon-star"></use> */}
              </svg>
              <svg className="reviews__star reviews__star--active">
                {/* <use xlink:href="img/icons.svg#icon-star"></use> */}
              </svg>
              <svg className="reviews__star reviews__star--active">
                {/* <use xlink:href="img/icons.svg#icon-star"></use> */}
              </svg>
              <svg className="reviews__star reviews__star--active">
                {/* <use xlink:href="img/icons.svg#icon-star"></use> */}
              </svg>
              <svg className="reviews__star reviews__star--active">
                {/* <use xlink:href="img/icons.svg#icon-star"></use> */}
              </svg>
            </div>
          </div>

          <div className="reviews__card">
            <div className="reviews__avatar">
              <img
                src={require("../../img/users/user-14.jpg")}
                alt="Laura Wilson"
                className="reviews__avatar-img"
              />
              <h6 className="reviews__user">Laura Wilson</h6>
            </div>
            <p className="reviews__text">
              Veniam adipisci blanditiis, corporis sit magnam aperiam ad, fuga
              reiciendis provident deleniti cumque similique itaque animi,
              sapiente obcaecati beatae accusantium.
            </p>
            <div className="reviews__rating">
              <svg className="reviews__star reviews__star--active">
                {/* <use xlink:href="img/icons.svg#icon-star"></use> */}
              </svg>
              <svg className="reviews__star reviews__star--active">
                {/* <use xlink:href="img/icons.svg#icon-star"></use> */}
              </svg>
              <svg className="reviews__star reviews__star--active">
                {/* <use xlinkHref={require("../../img/icons.svg#icon-star")}></use> */}
              </svg>
              <svg className="reviews__star reviews__star--active">
                {/* <use xlink:href="img/icons.svg#icon-star"></use> */}
              </svg>
              <svg className="reviews__star reviews__star--inactive">
                {/* <use xlink:href="img/icons.svg#icon-star"></use> */}
              </svg>
            </div>
          </div>

          <div className="reviews__card">
            <div className="reviews__avatar">
              <img
                src={require("../../img/users/user-15.jpg")}
                alt="Ben Hadley"
                className="reviews__avatar-img"
              />
              <h6 className="reviews__user">Ben Hadley</h6>
            </div>
            <p className="reviews__text">
              Debitis, nesciunt itaque! At quis officia natus. Suscipit,
              reprehenderit blanditiis mollitia distinctio ducimus porro tempore
              perspiciatis sunt vel.
            </p>
            <div className="reviews__rating">
              <svg className="reviews__star reviews__star--active">
                {/* <use xlink:href="img/icons.svg#icon-star"></use> */}
              </svg>
              <svg className="reviews__star reviews__star--active">
                {/* <use xlink:href="img/icons.svg#icon-star"></use> */}
              </svg>
              <svg className="reviews__star reviews__star--active">
                {/* <use xlink:href="img/icons.svg#icon-star"></use> */}
              </svg>
              <svg className="reviews__star reviews__star--active">
                {/* <use xlink:href="img/icons.svg#icon-star"></use> */}
              </svg>
              <svg className="reviews__star reviews__star--active">
                {/* <use xlink:href="img/icons.svg#icon-star"></use> */}
              </svg>
            </div>
          </div>

          <div className="reviews__card">
            <div className="reviews__avatar">
              <img
                src={require("../../img/users/user-6.jpg")}
                alt="Alexander Jones"
                className="reviews__avatar-img"
              />
              <h6 className="reviews__user">Alexander Jones</h6>
            </div>
            <p className="reviews__text">
              Quaerat laborum eveniet ut aut maiores doloribus mollitia aperiam
              quis praesentium sed inventore harum aliquam veritatis at adipisci
              ea assumenda!
            </p>
            <div className="reviews__rating">
              <svg className="reviews__star reviews__star--active">
                {/* <use xlink:href="img/icons.svg#icon-star"></use> */}
              </svg>
              <svg className="reviews__star reviews__star--active">
                {/* <use xlink:href="img/icons.svg#icon-star"></use> */}
              </svg>
              <svg className="reviews__star reviews__star--active">
                {/* <use xlink:href="img/icons.svg#icon-star"></use> */}
              </svg>
              <svg className="reviews__star reviews__star--active">
                {/* <use xlink:href="img/icons.svg#icon-star"></use> */}
              </svg>
              <svg className="reviews__star reviews__star--active">
                {/* <use xlink:href="img/icons.svg#icon-star"></use> */}
              </svg>
            </div>
          </div>

          <div className="reviews__card">
            <div className="reviews__avatar">
              <img
                src={require("../../img/users/user-3.jpg")}
                alt="Ayla Cornell"
                className="reviews__avatar-img"
              />
              <h6 className="reviews__user">Ayla Cornell</h6>
            </div>
            <p className="reviews__text">
              Perferendis quo aliquid iste quas laboriosam molestias illo est
              voluptatem odit ea. Vero placeat culpa provident dicta maiores!
            </p>
            <div className="reviews__rating">
              <svg className="reviews__star reviews__star--active">
                {/* <use xlink:href="img/icons.svg#icon-star"></use> */}
              </svg>
              <svg className="reviews__star reviews__star--active">
                {/* <use xlink:href="img/icons.svg#icon-star"></use> */}
              </svg>
              <svg className="reviews__star reviews__star--active">
                {/* <use xlink:href="img/icons.svg#icon-star"></use> */}
              </svg>
              <svg className="reviews__star reviews__star--active">
                {/* <use xlink:href="img/icons.svg#icon-star"></use> */}
              </svg>
              <svg className="reviews__star reviews__star--active">
                {/* <use xlink:href="img/icons.svg#icon-star"></use> */}
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section className="section-cta">
        <div className="cta">
          <div className="cta__img cta__img--logo">
            <img
              src={require("../../img/logo-white.png")}
              alt="Natours logo"
              className=""
            />
          </div>
          <img
            src={require("../../img/tours/tour-5-2.jpg")}
            alt=""
            className="cta__img cta__img--1"
          />
          <img
            src={require("../../img/tours/tour-5-1.jpg")}
            alt=""
            className="cta__img cta__img--2"
          />

          <div className="cta__content">
            <h2 className="heading-secondary">What are you waiting for?</h2>
            <p className="cta__text">
              10 days. 1 adventure. Infinite memories. Make it yours today!
            </p>
            <button className="btn btn--green span-all-rows">
              Book room now!
            </button>
          </div>
        </div>
      </section>

      <section className="section-cta flex-justify-center">
        <form>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Type</th>
                <th>Description</th>
                <th>Suitable for</th>
                <th>Price</th>
                <th>Order</th>
              </tr>
            </thead>

            <tbody>
              {hotelRoomData.map((element) => (
                <Room
                  name={element.name}
                  description={element.description}
                  id={element._id}
                  onGetOrderedRoomQuantity={getOrderedRoomQuantity}
                />
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
