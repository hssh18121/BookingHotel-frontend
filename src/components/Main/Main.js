import React from "react";
import FeaturedCard from "../FeaturedCard/FeaturedCard";
import "./Main.css";
const Main = (props) => {
  return (
    <React.Fragment>
      <main class="main">
        <div class="search-container">
          <div class="tool-bar">
            <button class="categories-selector">
              <div class="flex-categories">
                Calendar
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 arrow-down"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </button>
            <input
              class="search-bar"
              placeholder="Click here to search"
            ></input>
            <button class="search-button-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 features-icon features-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                // className="features-icon"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>

        <div class="card-container">
          {props.hotelData.map((element) => (
            <FeaturedCard
              name={element.name}
              id={element._id}
              key={element._id}
              image={element.image}
              description={element.description}
            />
          ))}
        </div>
      </main>
    </React.Fragment>
  );
};

export default Main;
