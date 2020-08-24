import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "react-query";

const PriceTour = ({
  setModalLogin,
  detailTrip,
  transCount,
  setCounter,
  // handleBooking,
}) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });

  const handleCountMinus = () => {
    if (transCount.counterQty > 1) {
      setCounter({
        ...transCount,
        counterQty: transCount.counterQty - 1,
        total: transCount.total - detailTrip.price,
      });
    }
  };
  const handleCountPlus = () => {
    setCounter({
      ...transCount,
      counterQty: transCount.counterQty + 1,
      total: transCount.total + detailTrip.price,
    });
  };
  localStorage.setItem("totalPrice", transCount.total);
  return (
    <div>
      <div className="row number">
        <div className="col-6">
          <h1>
            <span style={{ color: "#FFAF00" }}>
              {formatter.format(detailTrip.price)}
            </span>{" "}
            / Person
          </h1>
        </div>
        <div className="col-6">
          <h1 style={{ textAlign: "right" }}>
            <button className="minus" onClick={() => handleCountMinus()}>
              -{" "}
            </button>
            {transCount.counterQty}
            <button className="plus" onClick={() => handleCountPlus()}>
              {" "}
              +
            </button>
          </h1>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-6">
          <h1 style={{ fontSize: 28, fontWeight: "bold" }}>Total :</h1>
        </div>
        <div className="col-6">
          <h1 style={{ color: "#FFAF00", fontSize: 28, textAlign: "right" }}>
            {formatter.format(transCount.total)}
          </h1>
          <div className="row book">
            <div className="col-7" />
            <div className="col-5">
              {!localStorage.getItem("token") ? (
                <button
                  type="submit"
                  class="btn btn-warning btn-lg"
                  onClick={() => setModalLogin(true)}
                >
                  BOOK NOW
                </button>
              ) : (
                <Link
                  to={`/payment/${detailTrip.id}/qty=${transCount.counterQty}`}
                >
                  <button
                    type="submit"
                    class="btn btn-warning btn-lg"
                    // onClick={handleBooking}
                  >
                    BOOK NOW
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default PriceTour;
