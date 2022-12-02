import React, { useEffect, useState } from "react";
import "../../App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import LoginForm from "../LoginForm/LoginForm";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HotelDetails from "../HotelDetails/HotelDetails";
import UserProfile from "../UserProfile/UserProfile";

const Home = (props) => {
  const [openLoginForm, setOpenLoginForm] = useState();

  // const openTourHandler = (Boolean) => {
  //   if (Boolean) {
  //     setOpenLoginForm(false);
  //   }
  // };

  // const openLoginFormHandler = (Boolean) => {
  //   if (Boolean) {
  //     setOpenLoginForm(true);
  //   }
  // };

  return (
    <Router>
      <Header
      // openLoginFormHandler={openLoginFormHandler}
      // openTourHandler={openTourHandler}
      />
      <Switch>
        <Route exact path="/home">
          <Main hotelData={props.hotelData} />
        </Route>
        <Route exact path="/login">
          <LoginForm />
        </Route>
        <Route path="/hotels/details/:id">
          {/* {props.hotelData.filter(function (element) {
            if (element._id === props.match.params.id)
              return (
                <HotelDetails
                  name={element.name}
                  id={element._id}
                  key={element._id}
                  description={element.description}
                />
              );
          })} */}
          <HotelDetails />
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
export default Home;
