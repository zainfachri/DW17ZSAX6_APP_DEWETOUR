import React, { useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useQuery, useMutation, queryCache } from "react-query";

import ImageTour from "./ImageTour";
import InfoTrip from "./InfoTrip";
import DescTour from "./DescTour";
import PriceTour from "./PriceTour";
import "./DetailTour.css";

import a1 from "../../img/tour/a1.png";
import a2 from "../../img/tour/a2.png";
import a3 from "../../img/tour/a3.png";
import a4 from "../../img/tour/a4.png";

const DetailTour = ({ setModalLogin }) => {
  const [detailTrip, setDetailTrip] = useState([]);
  const { id } = useParams();

  const [transCount, setCounter] = useState({
    counterQty: 1,
    total: 0,
    status: "Waiting Payment",
    attachment: "test.jpg",
    tripId: id,
  });

  const handleOrder = async () => {
    const postOrder = await axios.post(
      "http://localhost:5001/api/v1/transaction",
      transCount
    );
    return postOrder;
  };
  const fetchTourData = async () => {
    // const response = await fetch(`http://localhost:5001/api/v1/trip/${id}`);
    // return response.json();
    const result = await axios.get(`http://localhost:5001/api/v1/trip/${id}`);
    const resData = result.data.data;
    setCounter({ ...transCount, total: result.data.data.price });
    setDetailTrip(resData);
  };
  const [newBooking] = useMutation(handleOrder, {
    onSuccess: () => {
      queryCache.prefetchQuery("trip");
    },
  });
  const { isLoading, data: detail } = useQuery("trip", fetchTourData);

  const handleBooking = () => {
    newBooking();
  };
  // const result = detail.data;
  // const {data.data.trip} = tour;
  // console.log(result);

  const dayNight = `${detailTrip.day}D/${detailTrip.night}N `;
  return (
    <div className="container detail">
      {isLoading || !detailTrip || !detailTrip?.country ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <div className="detail-title" key={detailTrip.id}>
            <h1>
              {dayNight}
              {detailTrip.title}
            </h1>
            <p style={{ fontSize: 22, color: "#A8A8A8", fontWeight: "700" }}>
              {detailTrip.country.name}
              {/* Country */}
            </p>
          </div>
          <ImageTour detailTrip={detailTrip} a1={a1} a2={a2} a3={a3} a4={a4} />
          <InfoTrip detailTrip={detailTrip} />
          <DescTour detailTrip={detailTrip} />
          <PriceTour
            fetchTourData={fetchTourData}
            setCounter={setCounter}
            detailTrip={detailTrip}
            transCount={transCount}
            handleBooking={handleBooking}
            setModalLogin={setModalLogin}
          />
        </>
      )}
    </div>
  );
};

export default DetailTour;
