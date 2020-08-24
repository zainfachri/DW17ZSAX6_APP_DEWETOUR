import React from "react";
import Moment from "react-moment";
import { useQuery } from "react-query";
import Logo from "../../img/tour/logo-ex.png";

const PaymentName = ({ payTrip, fetchTourData }) => {
  const { isLoading } = useQuery("trip", fetchTourData);

  const dayNight = `${payTrip.day}D/${payTrip.night}N `;
  return (
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
            {dayNight}
            {payTrip.title}
          </th>
          <th>Date Trip</th>
          <th>Duration</th>
        </tr>
      </thead>
      {isLoading || !payTrip || !payTrip?.country ? (
        <h1>Loading...</h1>
      ) : (
        <tbody>
          <tr>
            <td>
              <strong>{payTrip.country.name}</strong>
            </td>
            <td>
              <Moment format="D MMM YYYY" withTitle>
                {payTrip.dateTrip}
              </Moment>
            </td>
            <td>
              {payTrip.day} Days {payTrip.night} Night
            </td>
          </tr>
        </tbody>
      )}
      <thead className="pay-name">
        <tr>
          <th>
            <span className="waiting-payment">Waiting Payment</span>
          </th>
          <th>Accomodation</th>
          <th>Transportation</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td>{payTrip.accomodation}</td>
          <td>{payTrip.transportation}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default PaymentName;
