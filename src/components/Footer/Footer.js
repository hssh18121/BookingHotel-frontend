import React from "react";
// import "./footer.css";
const Footer = () => {
  return (
    <React.Fragment>
      <div className="footer">
        <div className="footer__logo">
          <img
            src={require("../../img/logo-green-small.png")}
            alt="Natours logo"
          />
        </div>
        <ul className="footer__nav">
          <li>
            <a href="google.com">About us</a>
          </li>
          <li>
            <a href="google.com">Download apps</a>
          </li>
          <li>
            <a href="google.com">Become a guide</a>
          </li>
          <li>
            <a href="google.com">Careers</a>
          </li>
          <li>
            <a href="google.com">Contact</a>
          </li>
        </ul>
        <p className="footer__copyright">
          &copy; by Jonas Schmedtmann. All rights reserved.
        </p>
      </div>
    </React.Fragment>
  );
};

export default Footer;
