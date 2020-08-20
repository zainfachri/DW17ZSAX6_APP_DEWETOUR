import React from "react";
import { Link } from "react-router-dom";

import Tour from "../Content/Tour";

const IncomeTrip = () => {
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
        <Tour />
      </div>
    </>
  );
};

export default IncomeTrip;
