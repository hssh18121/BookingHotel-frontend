import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { showSuccessMessage, showErrorMessage } from "../../utils/notificationHelper";

const UserProfile = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [oldPassword, setOldPassWord] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [avatar, setAvatar] = useState("");
  useEffect(() => {
    fetch(`/api/me`, {
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
          setEmail(data.data.user.email);
          setFullname(data.data.user.fullname);
          setPhone(data.data.user.phone);
          setUsername(data.data.user.username);
          setAvatar(data.data.user.avatar);
        } else {
          showErrorMessage("An error occured! Can not get user data!");
        }
      });
  }, []);

  const fullnameHandler = (e) => {
    setFullname(e.target.value);
  };

  const usernameHandler = (e) => {
    setUsername(e.target.value);
  };

  const phoneHandler = (e) => {
    setPhone(e.target.value);
  };

  const oldPasswordHandler = (e) => {
    setOldPassWord(e.target.value);
  };

  const newPasswordHandler = (e) => {
    setNewPassword(e.target.value);
  };

  const avatarHandler = (e) => {
    setAvatar(e.target.files[0]);
  };

  const updateHandler = (e) => {
    e.preventDefault();
    console.log(email, username, phone);
    fetch(`/api/me/profile`, {
      method: "PUT",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        username,
        fullname,
        phone,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          showSuccessMessage("Update profile successfully!");
        } else {
          showErrorMessage("An error occured! Update avatar failed!");
        }
      });
  };

  const updateProfileHandler = (e) => {
    e.preventDefault();
    console.log(avatar);
    const formData = new FormData();

    formData.append("avatar", avatar, avatar.name);
    console.log(formData);
    fetch(`/api/me/avatar`, {
      method: "PUT",
      crossDomain: true,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Access-Control-Allow-Origin": "*",
      },
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
         showSuccessMessage("Update avatar successfully!");
          window.setTimeout(function () {
            window.location.reload();
          }, 3000);
        } else {
          showErrorMessage("Can not update avatar");
        }
      });
  };

  const savePasswordHandler = (e) => {
    e.preventDefault();
    fetch(`/api/me/password`, {
      method: "PUT",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        oldPassword,
        newPassword,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
         showSuccessMessage("Update avatar successfully!");
          // window.setTimeout(function () {
          //   window.location.href = "./hotels";
          // }, 3000);
        } else {
          showErrorMessage("Change password failed!");
        }
      });
  };
  return (
    <React.Fragment>
      <main className="main">
        <div className="user-view">
          <nav className="user-view__menu">
            <ul className="side-nav">
              <li className="side-nav--active">
                <Link to="/user-profile">
                  <svg>
                    {/* <use xlink:href="img/icons.svg#icon-settings"></use> */}
                  </svg>
                  Settings
                </Link>
              </li>
              <li>
                <Link to="/order-history">
                  <svg>
                    {/* <use xlink:href="img/icons.svg#icon-briefcase"></use> */}
                  </svg>
                  My bookings
                </Link>
              </li>
            </ul>
          </nav>

          <div className="user-view__content">
            <div className="user-view__form-container">
              <h2 className="heading-secondary ma-bt-md">Update Avatar</h2>
              <form className="form form-user-data"></form>
              <div className="form__group form__photo-upload">
                <img
                  className="form__user-photo"
                  src={avatar ? avatar : require("../../img/users/default.jpg")}
                  alt="User"
                />
                <input
                  className="form__upload"
                  type="file"
                  accept="image/*"
                  id="photo"
                  name="photo"
                  onChange={avatarHandler}
                />
                <label for="photo">Choose new photo</label>
              </div>
              <div className="form__group right ">
                <button
                  className="btn btn--small btn--green"
                  to="/user-profile"
                  onClick={updateProfileHandler}
                >
                  Update avatar
                </button>
              </div>
            </div>

            <div className="line">&nbsp;</div>

            <div className="user-view__form-container">
              <h2 className="heading-secondary ma-bt-md">
                Your account settings
              </h2>
              <form className="form form-user-data">
                <div className="form__group">
                  <label className="form__label" for="name">
                    Fullname
                  </label>

                  <input
                    className="form__input"
                    id="name"
                    type="text"
                    value={fullname}
                    required=""
                    name="name"
                    onChange={fullnameHandler}
                  />
                </div>
                <div className="form__group ma-bt-md">
                  <label className="form__label" for="username">
                    Username
                  </label>
                  <input
                    className="form__input"
                    id="username"
                    type="text"
                    value={username}
                    required=""
                    name="email"
                    onChange={usernameHandler}
                  />
                </div>
                <div className="form__group ma-bt-md">
                  <label className="form__label" for="email">
                    Phone
                  </label>
                  <input
                    className="form__input"
                    id="phone"
                    type="text"
                    value={phone}
                    required=""
                    name="phone"
                    onChange={phoneHandler}
                  />
                </div>

                <div className="form__group right ">
                  <button
                    className="btn btn--small btn--green"
                    to="/user-profile"
                    onClick={updateHandler}
                  >
                    Save settings
                  </button>
                </div>
              </form>
            </div>
            <div className="line">&nbsp;</div>

            <div className="user-view__form-container">
              <h2 className="heading-secondary ma-bt-md">Password change</h2>
              <form className="form form-user-password">
                <div className="form__group">
                  <label className="form__label" for="password-current">
                    Current password
                  </label>
                  <input
                    className="form__input"
                    id="password-current"
                    type="password"
                    placeholder="••••••••"
                    required=""
                    minlength="8"
                    value={oldPassword}
                    onChange={oldPasswordHandler}
                  />
                </div>
                <div className="form__group">
                  <label className="form__label" for="password">
                    New password
                  </label>
                  <input
                    className="form__input"
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    required=""
                    minlength="8"
                    value={newPassword}
                    onChange={newPasswordHandler}
                  />
                </div>
                <div className="form__group ma-bt-lg">
                  <label className="form__label" for="password-confirm">
                    Confirm password
                  </label>
                  <input
                    className="form__input"
                    id="password-confirm"
                    type="password"
                    placeholder="••••••••"
                    required=""
                    minlength="8"
                  />
                </div>
                <div className="form__group right">
                  <button
                    className="btn btn--small btn--green btn--save-password"
                    onClick={savePasswordHandler}
                  >
                    Save password
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default UserProfile;
