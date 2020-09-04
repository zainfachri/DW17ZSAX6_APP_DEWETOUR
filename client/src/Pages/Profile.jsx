import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import Moment from "react-moment";

import Logo from "../img/tour/logo-ex.png";
import ProfileDesc from "../Components/Profile/ProfileDesc";
import "./NotFound.css";

const Profile = () => {
  const [getTrans, setTrans] = useState([]);
  const user = localStorage.getItem("userId");
  const res = JSON.parse(localStorage.getItem("userData"));
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });

  const getTransaction = async () => {
    try {
      const result = await axios.get(
        `http://localhost:5001/api/v1/transaction/user/${user}`
      );
      const resData = result.data.data;
      setTrans(resData);
    } catch (err) {
      console.log(err);
    }
  };
  const { isLoading } = useQuery("transaction", getTransaction);

  return (
    <div>
      <ProfileDesc />
      <div className="container">
        <h1 style={{ marginTop: 40, fontWeight: 700 }}>History Trip</h1>
      </div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {getTrans.map((trans) => (
            <>
              {trans.status !== "Waiting Approve" && (
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
                            {trans.trip.day}D/{trans.trip.night}N{" "}
                            {trans.trip.title}
                          </th>
                          <th>Date Trip</th>
                          <th>Duration</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{trans.trip.country.name}</td>
                          <td>
                            <Moment format="D MMM YYYY" withTitle>
                              {trans.trip.dateTrip}
                            </Moment>
                          </td>
                          <td>
                            {trans.trip.day} Days {trans.trip.night} Night
                          </td>
                        </tr>
                      </tbody>
                      <thead className="pay-name">
                        <tr>
                          <th>
                            <span
                              className={
                                trans.status == "Approve" ? "approve" : "cancel"
                              }
                            >
                              {trans.status}
                            </span>
                          </th>
                          <th>Accomodation</th>
                          <th>Transportation</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td></td>
                          <td>{trans.trip.accomodation}</td>
                          <td>{trans.trip.transportation}</td>
                        </tr>
                      </tbody>
                    </table>
                    {/* <PaymentBook /> */}
                    <div className="book-img">
                      <h2 style={{ fontWeight: 700 }}>Booking</h2>
                      <p className="card-text" style={{ color: "#959595" }}>
                        <strong>
                          <Moment format="dddd" withTitle>
                            {trans.createAt}
                          </Moment>
                          ,{" "}
                        </strong>
                        <Moment format="DD MMM YYYY" withTitle>
                          {trans.createAt}
                        </Moment>
                      </p>
                      <img
                        src={`http://localhost:5001/uploads/${trans.attachment}`}
                        alt={trans.attachment}
                        width="150px"
                        height="150px"
                      />
                    </div>
                    {/* <PaymentTotal /> */}
                    <table
                      className="table pay-price"
                      style={{ width: "100%" }}
                    >
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
                          <td>{res.fullName}</td>
                          <td>{res.address}</td>
                          <td>{res.phone}</td>
                          <th>Qty</th>
                          <th>: {trans.counterQty}</th>
                        </tr>
                        <tr>
                          <td colspan="4"></td>
                          <th>Total</th>
                          <th>
                            :{" "}
                            <span style={{ color: "#FF0000" }}>
                              {formatter.format(trans.total)}
                            </span>
                          </th>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
              {/* {!trans.status && (
                <div>
                  <h2 style={{ textAlign: "center" }}>
                    Your History Was Empty
                  </h2>
                </div>
              )} */}
            </>
          ))}
        </>
      )}
    </div>
  );
};

export default Profile;
