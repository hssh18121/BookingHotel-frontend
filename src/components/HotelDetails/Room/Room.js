import { Fragment, useState } from "react";
import "./Room.css";
const Room = (props) => {
  const [roomOrderQuantity, setRoomOrderQuantity] = useState(0);
  const roomOrderQuantityHandler = (e) => {
    setRoomOrderQuantity(Number(e.target.value) || 0);
    props.onGetOrderedRoomQuantity(Number(e.target.value), props.id);
  };

  const addQuantityHandler = () => {
    setRoomOrderQuantity(Number(roomOrderQuantity) + 1);
    props.onGetOrderedRoomQuantity(roomOrderQuantity + 1, props.id);
  };

  const subtractQuantityHandler = () => {
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
            class="room-overview-image"
            alt="room preview"
          />
        </th>
        <th>{props.name}</th>
        <td class="description-table-data">
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
              class="number-input-field"
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
