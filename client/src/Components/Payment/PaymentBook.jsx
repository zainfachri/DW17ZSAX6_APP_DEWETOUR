import React from "react";
import Moment from "react-moment";
import "moment-timezone";
import book from "../../img/tour/book.png";

const PaymentBook = ({ payTrip }) => {
  return (
    <div className="book-img">
      <h2 style={{ fontWeight: 700 }}>Booking</h2>
      <p className="card-text" style={{ color: "#959595" }}>
        <strong>Saturday, </strong>
        <Moment format="DD MMM YYYY" withTitle>
          {payTrip.dateTrip}
        </Moment>
      </p>
      <img src={book} alt="" />
      <p style={{ color: "#959595", fontSize: 13 }}>upload payment proof</p>
    </div>
  );
};

export default PaymentBook;
