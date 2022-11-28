import React, { useEffect, useState } from "react";
import "../../App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import LoginForm from "../LoginForm/LoginForm";
const Home = (props) => {
  return (
    <React.Fragment>
      <Header />
      <Main hotelData={props.hotelData} />
      <LoginForm />
      <Footer />
    </React.Fragment>
  );
};
export default Home;
