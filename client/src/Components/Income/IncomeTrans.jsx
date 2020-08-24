import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import axios from "axios";

import incomeData from "../../DataTour/incomeData";
import "./IncomeTrans.css";

const IncomeTrans = () => {
  const [getTrans, setTrans] = useState([]);

  const getTransaction = async () => {
    try {
      const result = await axios.get(
        `http://localhost:5001/api/v1/transaction`
      );
      const resData = result.data.data;
      setTrans(resData);
    } catch (err) {
      console.log(err);
    }
  };
  const { isLoading } = useQuery("transaction", getTransaction);

  useEffect(() => {
    getTransaction();
  }, []);

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
            {getTrans.map((trans, index) => (
              <tr key={trans.id}>
                <td>{index + 1}</td>
                <td>{trans.user.fullName}</td>
                <td>{trans.trip.title}</td>
                <td>{trans.attachment}</td>
                <td>
                  <strong
                    className={
                      (trans.status == "Approve" && "text-success") ||
                      (trans.status == "Cancel" && "text-danger") ||
                      (trans.status == "Pending" && "text-warning")
                    }
                    style={{ color: "#ff5722" }}
                  >
                    {trans.status == "Waiting Approve"
                      ? "Pending"
                      : trans.status}
                  </strong>
                </td>
                <td>
                  <Link to={`/income-action/${trans.id}`}>
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
