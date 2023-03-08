import React from "react";
import { Link } from "react-router-dom";
import "./CheckoutSuccess.css";
const CheckoutSuccess = () => {
  return (
    <>
      <div class="content-container">
        <div class="box-content">
          <h1 id="checkout-notify-text">
            Checkout Successfully. Thank you for choosing our services!
          </h1>

          <div class="click-dang-ky">
            <p style={{ marginBottom: "2rem" }}>
              Please check your booking at booking history page
            </p>
            <Link to="/order-history" className="btn btn--green btn--small">
              Order history &rarr;
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutSuccess;
