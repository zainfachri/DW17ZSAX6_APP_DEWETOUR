import React from "react";
import { Link } from "react-router-dom";

import incomeData from "../../DataTour/incomeData";
import "./IncomeTrans.css";

const IncomeTrans = () => {
  return (
    <div className="table-wrapper">
      <div className="table-income">
        <h1>Incoming Transaction</h1>
        <table className="table income">
          <thead>
            <tr style={{ backgroundColor: "#fff" }}>
              <th>No</th>
              <th>Users</th>
              <th>Trip</th>
              <th>Bukti Transfer</th>
              <th>Status Payment</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {incomeData.map((tour) => (
              <tr key={tour.id}>
                <td>{tour.id}</td>
                <td>{tour.user}</td>
                <td>{tour.name}</td>
                <td>{tour.bookImg}</td>
                <td>
                  <strong className="" style={{ color: "#ff5722" }}>
                    {tour.status}
                  </strong>
                </td>
                <td>
                  <Link to="/income-action">
                    <i class="fa fa-search" aria-hidden="true"></i>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IncomeTrans;
