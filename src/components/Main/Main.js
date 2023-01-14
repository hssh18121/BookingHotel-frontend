import React, { useState } from "react";
import FeaturedCard from "../FeaturedCard/FeaturedCard";

import "./Main.css";
const Main = (props) => {
  const [filteredData, setFilteredData] = useState(props.hotelData);
  const [searchedTerm, setSearchedTerm] = useState("");
  const searchHandler = (event) => {
    event.preventDefault();

    const updatedData = props.hotelData.filter((element) => {
      if (
        element.name.toLowerCase().includes(searchedTerm.toLowerCase().trim())
      ) {
        return element;
      }
    });
    setFilteredData(updatedData);
  };

  const inputHandler = (event) => {
    setSearchedTerm(event.target.value);
    console.log(searchedTerm);
  };

  return (
    <React.Fragment>
      <main className="main">
        <form className="search-container" onSubmit={searchHandler}>
          <div className="tool-bar">
            <button className="categories-selector">
              <div className="flex-categories">
                Search bar
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 arrow-down"
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
              className="search-bar"
              placeholder="Click here to search"
              onChange={(e) => inputHandler(e)}
              value={searchedTerm}
            ></input>
            <button
              className="search-button-container"
              type="submit"
              onClick={searchHandler}
            >
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
        </form>

        <div className="card-container">
          {filteredData.length !== 0 ? (
            filteredData.map((element) => (
              <FeaturedCard
                name={element.name}
                id={element._id}
                key={element._id}
                image={element.image}
                description={element.description}
                province={element.province}
              />
            ))
          ) : (
            <h1>No Data Available</h1>
          )}
        </div>
      </main>
    </React.Fragment>
  );
};

export default Main;
