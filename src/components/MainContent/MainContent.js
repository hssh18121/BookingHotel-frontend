import React, { useEffect, useState } from "react";
import "../../App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import LoginForm from "../LoginForm/LoginForm";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HotelDetails from "../HotelDetails/HotelDetails";
import UserProfile from "../UserProfile/UserProfile";
import Home from "../Home/Home";
const MainContent = (props) => {
  // const [filteredHotelData, setFilteredHotelData] = useState(props.hotelData);
  // useEffect(() => {
  //   setFilteredHotelData(props.hotelData);
  // }, []);
  // const getFilteredHotelData = (searchedText) => {
  //   if (searchedText !== undefined) {
  //     setFilteredHotelData((filteredHotelData) => {
  //       const newFilteredHotelData = filteredHotelData.filter((hotel) =>
  //         hotel.name.toLowerCase().includes(searchedText.toLowerCase())
  //       );
  //       return newFilteredHotelData;
  //     });
  //   }
  // };
  return (
    <Router>
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
        <Route path="/hotels/details/:id">
          <HotelDetails hotelData={props.hotelData} />
        </Route>
        <Route exact path="/user-profile">
          <UserProfile />
        </Route>
      </Switch>
      {/* {openLoginForm ? <LoginForm /> : <Main hotelData={props.hotelData} />} */}
      <Footer />
    </Router>
  );
};
export default MainContent;
