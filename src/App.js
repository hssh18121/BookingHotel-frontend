import React, { useEffect, useState } from "react";
import MainContent from "./components/MainContent/MainContent";

function App() {
  const [backendData, setBackendData] = useState([{}]);
  useEffect(() => {
    fetch("/hotels")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  return (
    <React.Fragment>
      {/* {" "}
      {typeof backendData.data === "undefined" ? (
        <p>Loading....</p>
      ) : (
        backendData.data.hotels.map((testData, i) => (
          <p key={testData._id}>{testData.name}</p>
        ))
      )}{" "}
      */}
      {typeof backendData.data === "undefined" ? (
        <p>Loading....</p>
      ) : (
        <MainContent hotelData={backendData.data.hotels} />
      )}
    </React.Fragment>
  );
}

export default App;
