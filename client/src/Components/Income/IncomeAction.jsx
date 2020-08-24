import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";
import Moment from "react-moment";
import Logo from "../../img/tour/logo-ex.png";

const IncomeAction = () => {
  const { id } = useParams();
  const [getTransDet, setTransDet] = useState([]);

  const [approveStat, setApprove] = useState({
    status: "Approve",
  });

  const [cancelStat, setCancel] = useState({
    status: "Cancel",
  });

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });

  const getTransDetail = async () => {
    try {
      const result = await axios.get(
        `http://localhost:5001/api/v1/transaction/${id}`
      );
      const resData = result.data.data;
      setTransDet(resData);
    } catch (err) {
      console.log(err);
    }
  };
  const { isLoading } = useQuery("transaction", getTransDetail);

  useEffect(() => {
    getTransDetail();
  }, []);

  const editStatusApprove = async () => {
    try {
      const result = await axios.patch(
        `http://localhost:5001/api/v1/transaction/${id}`,
        approveStat
      );
    } catch (err) {
      console.log(err);
    }
  };
  const editStatusCancel = async () => {
    try {
      const result = await axios.patch(
        `http://localhost:5001/api/v1/transaction/${id}`,
        cancelStat
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {isLoading || !getTransDet || !getTransDet?.trip ? (
        <h1>Loading...</h1>
      ) : (
        <div className="container payment">
          <div className="row inside-pay">
            {/* <PaymentName /> */}
            <table
              className="table table-borderless pay-price"
              style={{ width: "80%" }}
            >
              <thead>
                <tr>
                  <img src={Logo} alt="Logo" />
                </tr>
              </thead>
              <thead>
                <tr className="pay-name">
                  <th style={{ fontSize: 26 }}>
                    {getTransDet.trip.day}D/{getTransDet.trip.night}N{" "}
                    {getTransDet.trip.title}
                  </th>
                  <th>Date Trip</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{getTransDet.trip.country.name}</td>
                  <td>
                    <Moment format="D MMM YYYY" withTitle>
                      {getTransDet.trip.dateTrip}
                    </Moment>
                  </td>
                  <td>
                    {getTransDet.trip.day} Days {getTransDet.trip.night} Night
                  </td>
                </tr>
              </tbody>
              <thead className="pay-name">
                <tr>
                  <th>
                    <span className="waiting-approve">
                      {getTransDet.status}
                    </span>
                  </th>
                  <th>Accomodation</th>
                  <th>Transportation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td>{getTransDet.trip.accomodation}</td>
                  <td>{getTransDet.trip.transportation}</td>
                </tr>
              </tbody>
            </table>
            {/* <PaymentBook /> */}
            <div className="book-img">
              <h2 style={{ fontWeight: 700 }}>Booking</h2>
              <p className="card-text" style={{ color: "#959595" }}>
                <strong>
                  <Moment format="dddd" withTitle>
                    {getTransDet.createAt}
                  </Moment>
                  ,{" "}
                </strong>
                <Moment format="DD MMM YYYY" withTitle>
                  {getTransDet.createAt}
                </Moment>
              </p>
              <img
                src={`http://localhost:5001/uploads/${getTransDet.attachment}`}
                alt={getTransDet.attachment}
                width="150px"
                height="150px"
              />
            </div>
            {/* <PaymentTotal /> */}
            <table className="table pay-price" style={{ width: "100%" }}>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Full Name</th>
                  <th>Address</th>
                  <th>Phone</th>
                  <th colspan="2"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>{getTransDet.user.fullName}</td>
                  <td>{getTransDet.user.address}</td>
                  <td>{getTransDet.user.phone}</td>
                  <th>Qty</th>
                  <th>: {getTransDet.counterQty}</th>
                </tr>
                <tr>
                  <td colspan="4"></td>
                  <th>Total</th>
                  <th>
                    :{" "}
                    <span style={{ color: "#FF0000" }}>
                      {formatter.format(getTransDet.total)}
                    </span>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
      <div className="row inaction-btn">
        <div className="col-6"></div>
        <div className="col-2">
          <Link to="/income-transaction">
            <button
              type="button"
              className="btn btn-danger btn-lg"
              onClick={editStatusCancel}
            >
              Cancel
            </button>
          </Link>
        </div>
        <div className="col-3">
          <Link to="/income-transaction">
            <button
              type="submit"
              className="btn btn-success btn-lg"
              onClick={editStatusApprove}
            >
              Approve
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default IncomeAction;
