import React from "react";
import { FaStar } from "react-icons/fa";
const UserRating = (props) => {
  return (
    <React.Fragment>
      <div className="line" id="break-line">
        &nbsp;
      </div>
      <div id="comment-container">
        <div id="comment-user-info-container">
          <div>
            <img
              //   src={require("../../../img/users/user-1.jpg")}
              src={
                props.ratingData.user.avatar
                  ? props.ratingData.user.avatar
                  : require("../../../img/users/default.jpg")
              }
              alt="User "
              className="nav__user-img"
              id="comment-user-img"
            />
          </div>
          <div id="comment-user-info">
            <div id="comment-user-name">
              <span>
                {props.ratingData.user.username}
                <span style={{ color: "#666", fontSize: "1.5rem" }}>
                  - {props.ratingData.star}
                </span>
              </span>
              <FaStar id="star-display" />
            </div>
            <div id="comment-time">
              Commented on{" "}
              {new Date(props.ratingData.createdAt).toLocaleDateString({
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
          </div>
        </div>

        <div id="comment-content">{props.ratingData.comment}</div>
      </div>
    </React.Fragment>
  );
};

export default UserRating;
