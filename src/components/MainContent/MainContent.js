import React from "react";
import "../../App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import LoginForm from "../LoginForm/LoginForm";
import RegisterForm from "../RegisterForm/RegisterForm";
import { Route, Switch, HashRouter } from "react-router-dom";
import HotelDetails from "../HotelDetails/HotelDetails";
import UserProfile from "../UserProfile/UserProfile";
import Home from "../Home/Home";
import BookingHistory from "../UserProfile/BookingHistory";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReviewHistory from "../UserProfile/ReviewHistory";
const MainContent = (props) => {
  return (
    <HashRouter>
      <Header
        hotelData={props.hotelData}
        // getFilteredHotelData={getFilteredHotelData}
      />

      <Switch>
        <Route exact path="/">
          <Home hotelData={props.hotelData} />
        </Route>
        <Route exact path="/hotels">
          <Main hotelData={props.hotelData} />
        </Route>
        <Route exact path="/login">
          <LoginForm />
        </Route>
        <Route exact path="/register">
          <RegisterForm />
        </Route>
        <Route path="/hotels/details/:id">
          <HotelDetails hotelData={props.hotelData} roomData={props.roomData} />
        </Route>
        <Route exact path="/user-profile">
          <UserProfile />
        </Route>
        <Route exact path="/order-history">
          <BookingHistory
            allRoomData={props.roomData}
            allHotelData={props.hotelData}
          />
        </Route>
        <Route exact path="/my-reviews-history">
          <ReviewHistory />
        </Route>
      </Switch>
      {/* {openLoginForm ? <LoginForm /> : <Main hotelData={props.hotelData} />} */}
      <Footer />
    </HashRouter>
  );
};
export default MainContent;
