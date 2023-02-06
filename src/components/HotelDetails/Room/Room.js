import { Fragment, useState } from "react";
import "./Room.css";
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
  return (
    <Fragment>
      <tr>
        <th>
          <img
            src={require("../../../img/double-room.jpg")}
            className="room-overview-image"
            alt="room preview"
          />
        </th>
        <th>{props.name}</th>
        <td className="description-table-data">
          {`${props.description.substring(0, 100)}...`}
        </td>
        <td>4 người</td>
        <td>1000000</td>
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
      </tr>
    </Fragment>
  );
};

export default Room;
