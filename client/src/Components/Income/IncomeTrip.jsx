import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";

// import Tour from "../Content/Tour";

const IncomeTrip = () => {
  const [trip, setTrip] = useState([]);
  let history = useHistory();

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });

  const fetchTourData = async () => {
    const result = await axios.get("http://localhost:5001/api/v1/trip");
    const resData = result.data.data;
    setTrip(resData);
  };
  const { isLoading, isError, data, error } = useQuery("trip", fetchTourData);
  return (
    <>
      <div className="income-trip-wrapper">
        <div className="row intrip">
          <div className="col-10">
            <h3 style={{ fontSize: 28, fontWeight: 600 }}>Income Trip</h3>
          </div>
          <div className="col-2">
            <Link to="/add-trip">
              <button className="reg income-trip" style={{ color: "#fff" }}>
                Add Trip
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="main trip">
        <div className="tourList">
          {trip.map((tour) => (
            <div className="list-tour">
              {/* <Link to={`/detail/${tour.id}`}> */}
              <div
                className="tour"
                key={tour.id}
                onClick={() => {
                  history.push(`/detail/${tour.id}`);
                }}
              >
                <div className="picture">
                  <img
                    src={`http://localhost:5001/uploads/${tour.image}`}
                    height="241px"
                  />
                  <p>{tour.quota}/15</p>
                </div>
                <p>
                  {tour.day}D/{tour.night}N {tour.title}
                </p>
                <div className="price">
                  <p>{formatter.format(tour.price)}</p>
                  <p>{tour.country.name}</p>
                </div>
              </div>
              {/* </Link> */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default IncomeTrip;
