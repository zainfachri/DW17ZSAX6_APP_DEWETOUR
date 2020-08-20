import React, { useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { useQuery, useMutation, queryCache } from "react-query";

// import tourData from "../../DataTour/TourData";

const Tour = () => {
  const [trip, setTrip] = useState([]);
  let history = useHistory();

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });

  const fetchTourData = async () => {
    // const response = await fetch("http://localhost:5001/api/v1/trip");
    // return response.json();
    const result = await axios.get("http://localhost:5001/api/v1/trip");
    const resData = result.data.data;
    setTrip(resData);
  };
  const { isLoading, isError, data, error } = useQuery("trip", fetchTourData);
  return (
    <div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
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
                  <img src={`http://localhost:5001/uploads/${tour.image}`} />
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
      )}
    </div>
  );
};
export default Tour;
