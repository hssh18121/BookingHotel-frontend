import React, { useState } from "react";
import "./PictureLibraryModal.css";
const PictureLibraryModal = (props) => {
  const closeModalHandler = () => {
    props.onClose();
  };

  const [imageOrder, setImageOrder] = useState(Number(props.imageOrder));

  const nextImageHandler = (orderParam) => {
    console.log(props.images.length);
    if (orderParam < props.images.length - 1) setImageOrder(orderParam + 1);
  };

  const previousImageHandler = (orderParam) => {
    if (orderParam > 0) setImageOrder(orderParam - 1);
  };
  return (
    <React.Fragment>
      <div className="library-modal">
        <button className="close-modal" onClick={closeModalHandler}>
          &times;
        </button>
        <button className="image-order-display">
          {imageOrder + 1}/{props.images.length}
        </button>
        <button
          class="previous-next-button previous"
          onClick={() => previousImageHandler(imageOrder)}
        >
          <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11 1 3 9l8 8"
              stroke="#1D2026"
              stroke-width="3"
              fill="none"
              fill-rule="evenodd"
            />
          </svg>
        </button>

        <img
          src={
            props.images[imageOrder]
              ? props.images[imageOrder]
              : require("../../../img/double-room.jpg")
          }
          alt="room-img"
          className="image-library-preview"
        />
        <button
          class="previous-next-button next"
          onClick={() => nextImageHandler(imageOrder)}
        >
          <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m2 1 8 8-8 8"
              stroke="#1D2026"
              stroke-width="3"
              fill="none"
              fill-rule="evenodd"
            />
          </svg>
        </button>
      </div>

      <div className="overlay" onClick={closeModalHandler}></div>
    </React.Fragment>
  );
};

export default PictureLibraryModal;
