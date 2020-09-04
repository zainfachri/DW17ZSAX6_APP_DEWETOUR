import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useQuery } from "react-query";

// import tourData from "../../DataTour/TourData";

const Tour = ({ trip, history, fetchTourData, filteredName }) => {
  // const [trip, setTrip] = useState([]);
  // let history = useHistory();

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });

  // const fetchTourData = async () => {
  //   const result = await axios.get("http://localhost:5001/api/v1/trip");
  //   const resData = result.data.data;
  //   setTrip(resData);
  // };
  const { isLoading, isError, data, error } = useQuery("trip", fetchTourData);
  return (
    <div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="tourList">
          {filteredName.map((tour) => (
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
      )}
    </div>
  );
};
export default Tour;
