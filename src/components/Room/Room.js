import { Fragment, useState } from "react";
import "./Room.css";
import { BsPeopleFill, BsFillEyeFill } from "react-icons/bs";
import RoomDetailModal from "../RoomDetailModal/RoomDetailModal";
const Room = (props) => {
  const [roomOrderQuantity, setRoomOrderQuantity] = useState(0);

  const roomOrderQuantityHandler = (e) => {
    setRoomOrderQuantity(Number(e.target.value) || 0);
    props.onGetOrderedRoomQuantity(Number(e.target.value), props.id);
  };

  const addQuantityHandler = (e) => {
    e.preventDefault();
    setRoomOrderQuantity(Number(roomOrderQuantity) + 1);
    props.onGetOrderedRoomQuantity(roomOrderQuantity + 1, props.id);
  };

  const subtractQuantityHandler = (e) => {
    e.preventDefault();
    if (Number(roomOrderQuantity) > 0) {
      setRoomOrderQuantity(Number(roomOrderQuantity) - 1);
      props.onGetOrderedRoomQuantity(roomOrderQuantity - 1, props.id);
    }
  };

  const [openModal, setOpenModal] = useState(false);
  const openModalHandler = () => {
    setOpenModal(true);
  };

  const closeModalHandler = () => {
    setOpenModal(false);
  };

  return (
    <Fragment>
      {openModal && (
        <RoomDetailModal
          onClose={closeModalHandler}
          roomInfo={props.roomData}
        />
      )}
      <tr>
        <th>
          <img
            src={
              props.roomData.image
                ? props.roomData.image
                : require("../../img/double-room.jpg")
            }
            className="room-overview-image"
            alt="room preview"
          />
        </th>
        <th>{props.roomData.name}</th>
        {/* <td className="description-table-data">
          {`${props.roomData.description.substring(0, 100)}...`}
          <div className="see-room-detail-span">
            <i>see detail</i>
          </div>
        </td> */}
        <td>
          <div className="people-number-display-container">
            <div className="people-number">
              {props.roomData.peopleAmount.adults +
                props.roomData.peopleAmount.child}{" "}
            </div>
            <BsPeopleFill className="bs-people-fill" />
          </div>
        </td>
        <td className="price-table-td">{props.roomData.price} vnd</td>

        <td>
          <div className="input-field-display-flex">
            <button
              className="add-subtract-button"
              onClick={subtractQuantityHandler}
            >
              -
            </button>
            <input
              type="number"
              className="number-input-field"
              value={roomOrderQuantity}
              onChange={roomOrderQuantityHandler}
              min="0"
              max="5"
            />
            <button
              className="add-subtract-button"
              onClick={addQuantityHandler}
            >
              +
            </button>
          </div>
        </td>
        <td>
          <div className="see-room-detail-span" onClick={openModalHandler}>
            <BsFillEyeFill className="bs-eye-fill" />
          </div>
        </td>
      </tr>
    </Fragment>
  );
};

export default Room;
