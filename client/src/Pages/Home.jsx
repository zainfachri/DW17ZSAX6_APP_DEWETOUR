import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

import Header from "../Components/Header/Header";
import Content from "../Components/Content/Content";
import Tour from "../Components/Content/Tour";

const Home = () => {
  const [trip, setTrip] = useState([]);
  let history = useHistory();
  const [search, setSearch] = useState("");
  const [filteredName, setFilteredName] = useState([]);

  useEffect(() => {
    setFilteredName(
      trip.filter((tour) =>
        tour.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, trip]);

  const fetchTourData = async () => {
    const result = await axios.get("http://localhost:5001/api/v1/trip");
    const resData = result.data.data;
    setTrip(resData);
  };

  return (
    <div className="App">
      <Header setSearch={setSearch} />
      <Content />
      <div className="main">
        <p>Group Tour</p>
        <Tour
          trip={trip}
          setTrip={setTrip}
          history={history}
          fetchTourData={fetchTourData}
          filteredName={filteredName}
        />
      </div>
    </div>
  );
};
export default Home;
