import React from "react";
import "../../App.css";
import Header from "../../layouts/Header/Header";
import Main from "../../pages/Main/Main";
import Footer from "../../layouts/Footer/Footer";
import LoginForm from "../../pages/LoginForm/LoginForm";
import RegisterForm from "../../pages/RegisterForm/RegisterForm";
import { Route, Switch, HashRouter } from "react-router-dom";
import HotelDetails from "../HotelDetails/HotelDetails";
import UserProfile from "../UserProfile/UserProfile";
import Home from "../../pages/Home/Home";
import BookingHistory from "../UserActivityHistory/BookingHistory";
import "react-toastify/dist/ReactToastify.css";
import ReviewHistory from "../UserActivityHistory/ReviewHistory";
import CheckoutPage from "../../pages/CheckoutPage/CheckoutPage";
import CheckoutSuccess from "../../pages/CheckoutSuccess/CheckoutSuccess";
const MainContent = (props) => {
  return (
    <HashRouter>
      <Header hotelData={props.hotelData} />

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
        <Route exact path="/checkout-form">
          <CheckoutPage />
        </Route>
        <Route exact path="/checkout-success">
          <CheckoutSuccess />
        </Route>
      </Switch>
    </HashRouter>
  );
};
export default MainContent;
