import React from "react";

const UserProfile = () => {
  return (
    <React.Fragment>
      <main class="main">
        <div class="user-view">
          <nav class="user-view__menu">
            <ul class="side-nav">
              <li class="side-nav--active">
                <a href="#">
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
                <a href="#">
                  <svg>
                    {/* <use xlink:href="img/icons.svg#icon-star"></use> */}
                  </svg>
                  My reviews
                </a>
              </li>
              <li>
                <a href="#">
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
                    Name
                  </label>
                  <input
                    class="form__input"
                    id="name"
                    type="text"
                    value="Laura Sarah Wilson"
                    required=""
                    name="name"
                  />
                </div>
                <div class="form__group ma-bt-md">
                  <label class="form__label" for="email">
                    Email address
                  </label>
                  <input
                    class="form__input"
                    id="email"
                    type="email"
                    value="laura@example.com"
                    required=""
                    name="email"
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
                  <button class="btn btn--small btn--green">
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
                  <button class="btn btn--small btn--green btn--save-password">
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
