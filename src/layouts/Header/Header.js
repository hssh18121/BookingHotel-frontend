import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { toast } from "react-toastify";
import "./Header.css";
import "react-toastify/dist/ReactToastify.css";
const Header = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userAvatar, setUserAvatar] = useState("");

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("token");

    if (storedUserLoggedInInformation) {
      setIsLoggedIn(true);
      // toast.success("Login under user role!", {
      //   position: "top-right",
      //   autoClose: 5000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: "light",
      // });
    }
  }, []);

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
          setUserAvatar(data.data.user.avatar);
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

  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("userID");
    setIsLoggedIn(false);
    toast.success("Logout successfully!", {
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
  return (
    <React.Fragment>
      <header className="header sticky">
        <nav className="nav nav--tours">
          <Link className="nav__el" to="/">
            <FaHome />
          </Link>

          <Link className="nav__el" to="/hotels">
            All hotels
          </Link>
        </nav>

        <div className="header__logo">
          <img src={require("../../img/logo-white.png")} alt="Natours logo" />
        </div>

        {isLoggedIn ? (
          <nav className="nav nav--user">
            <Link className="nav__el" to="/" onClick={logoutHandler}>
              Logout
            </Link>
            <Link to="/user-profile" className="nav__el">
              <img
                src={
                  userAvatar
                    ? userAvatar
                    : require("../../img/users/default.jpg")
                }
                alt="User "
                className="nav__user-img"
              />
              <span>{localStorage.getItem("username")}</span>
            </Link>

            {/* <!-- <button class="nav__el">Log in</button>
        <button class="nav__el nav__el--cta">Sign up</button> --> */}
          </nav>
        ) : (
          <nav className="nav nav--user">
            <Link className="nav__el" to="/login">
              Login
            </Link>
            <Link className="nav__el" to="/register">
              Register
            </Link>
          </nav>
        )}
      </header>
    </React.Fragment>
  );
};

export default Header;
