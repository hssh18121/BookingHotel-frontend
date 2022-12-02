import React from "react";
import FeaturedCard from "../FeaturedCard/FeaturedCard";
const Main = (props) => {
  return (
    <React.Fragment>
      <main class="main">
        <div class="card-container">
          {props.hotelData.map((element) => (
            <FeaturedCard
              name={element.name}
              id={element._id}
              key={element._id}
              description={element.description}
            />
          ))}
        </div>
      </main>
    </React.Fragment>
  );
};

export default Main;
