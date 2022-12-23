import React, { useEffect, useState } from "react";
import MainContent from "./components/MainContent/MainContent";

function App() {
  const [backendData, setBackendData] = useState([{}]);
  const [backendRoomData, setBackendRoomData] = useState([{}]);
  useEffect(() => {
    fetch("api/hotel/all")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  useEffect(() => {
    fetch("api/room/all")
      .then((response) => response.json())
      .then((data) => {
        setBackendRoomData(data);
      });
  }, []);

  return (
    <React.Fragment>
      {typeof backendData.data?.hotels === "undefined" ||
      typeof backendRoomData.data?.rooms === "undefined" ? (
        <p>Loading....</p>
      ) : (
        <MainContent
          hotelData={backendData.data.hotels}
          roomData={backendRoomData.data.rooms}
        />
      )}
    </React.Fragment>
  );
}

export default App;
