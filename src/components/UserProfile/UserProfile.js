import React from "react";
import { useEffect, useState } from "react";
const UserProfile = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [oldPassword, setOldPassWord] = useState("");
  const [newPassword, setNewPassword] = useState("");
  useEffect(() => {
    fetch(`http://localhost:5000/api/me/${localStorage.getItem("userID")}`, {
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

  const updateHandler = (e) => {
    e.preventDefault();
    console.log(email, username, phone);
    fetch(
      `http://localhost:5000/api/me/profile/${localStorage.getItem("userID")}`,
      {
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
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          alert("update successful");
        }
      });
  };

  const savePasswordHandler = (e) => {
    e.preventDefault();
    fetch(`http://localhost:5000/api/me/password`, {
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
          alert("update password successful");
        }
      });
  };
  return (
    <React.Fragment>
      <main class="main">
        <div class="user-view">
          <nav class="user-view__menu">
            <ul class="side-nav">
              <li class="side-nav--active">
                <a href="google.com">
                  <svg>
                    {/* <use xlink:href="img/icons.svg#icon-settings"></use> */}
                  </svg>
                  Settings
                </a>
              </li>
              <li>
                <a href="/my-tours">
                  <svg>
                    {/* <use xlink:href="img/icons.svg#icon-briefcase"></use> */}
                  </svg>
                  My bookings
                </a>
              </li>
              <li>
                <a href="abc.com">
                  <svg>
                    {/* <use xlink:href="img/icons.svg#icon-star"></use> */}
                  </svg>
                  My reviews
                </a>
              </li>
              <li>
                <a href="abc.com">
                  <svg>
                    {/* <use xlink:href="img/icons.svg#icon-credit-card"></use> */}
                  </svg>
                  Billing
                </a>
              </li>
            </ul>
          </nav>

          <div class="user-view__content">
            <div class="user-view__form-container">
              <h2 class="heading-secondary ma-bt-md">Your account settings</h2>
              <form class="form form-user-data">
                <div class="form__group">
                  <label class="form__label" for="name">
                    Fullname
                  </label>

                  <input
                    class="form__input"
                    id="name"
                    type="text"
                    value={fullname}
                    required=""
                    name="name"
                    onChange={fullnameHandler}
                  />
                </div>
                <div class="form__group ma-bt-md">
                  <label class="form__label" for="username">
                    Username
                  </label>
                  <input
                    class="form__input"
                    id="username"
                    type="text"
                    value={username}
                    required=""
                    name="email"
                    onChange={usernameHandler}
                  />
                </div>
                <div class="form__group ma-bt-md">
                  <label class="form__label" for="email">
                    Phone
                  </label>
                  <input
                    class="form__input"
                    id="phone"
                    type="text"
                    value={phone}
                    required=""
                    name="phone"
                    onChange={phoneHandler}
                  />
                </div>
                <div class="form__group form__photo-upload">
                  <img
                    class="form__user-photo"
                    src="/img/users/user-14.jpg"
                    alt="User"
                  />
                  <input
                    class="form__upload"
                    type="file"
                    accept="image/*"
                    id="photo"
                    name="photo"
                  />
                  <label for="photo">Choose new photo</label>
                </div>
                <div class="form__group right">
                  <button
                    className="btn btn--small btn--green"
                    type="submit"
                    onClick={updateHandler}
                  >
                    Save settings
                  </button>
                </div>
              </form>
            </div>
            <div class="line">&nbsp;</div>
            <div class="user-view__form-container">
              <h2 class="heading-secondary ma-bt-md">Password change</h2>
              <form class="form form-user-password">
                <div class="form__group">
                  <label class="form__label" for="password-current">
                    Current password
                  </label>
                  <input
                    class="form__input"
                    id="password-current"
                    type="password"
                    placeholder="••••••••"
                    required=""
                    minlength="8"
                    value={oldPassword}
                    onChange={oldPasswordHandler}
                  />
                </div>
                <div class="form__group">
                  <label class="form__label" for="password">
                    New password
                  </label>
                  <input
                    class="form__input"
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    required=""
                    minlength="8"
                    value={newPassword}
                    onChange={newPasswordHandler}
                  />
                </div>
                <div class="form__group ma-bt-lg">
                  <label class="form__label" for="password-confirm">
                    Confirm password
                  </label>
                  <input
                    class="form__input"
                    id="password-confirm"
                    type="password"
                    placeholder="••••••••"
                    required=""
                    minlength="8"
                  />
                </div>
                <div class="form__group right">
                  <button
                    class="btn btn--small btn--green btn--save-password"
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
