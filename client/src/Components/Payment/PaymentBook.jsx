import React from "react";
import Moment from "react-moment";
import "moment-timezone";
import book from "../../img/tour/book.png";

const PaymentBook = ({
  payTrans,
  handleChange,
  onChangeFileImage,
  previewSrc,
}) => {
  return (
    <div className="book-img">
      <h2 style={{ fontWeight: 700 }}>Booking</h2>
      <p className="card-text" style={{ color: "#959595" }}>
        <strong>
          {" "}
          <Moment format="dddd" />,{" "}
        </strong>
        {/* <Moment format="DD MMM YYYY" withTitle>
          {payTrip.dateTrip}
        </Moment> */}
        <Moment format="DD MMM YYYY" />
      </p>
      {!previewSrc ? (
        <img src={book} alt="" style={{ display: "block", margin: "0 auto" }} />
      ) : (
        <img
          src={previewSrc}
          alt=""
          style={{ display: "block", margin: "0 auto" }}
          width="150px"
          height="150px"
        />
      )}
      <form payTrans={payTrans} enctype="multipart/form-data">
        <input
          type="file"
          className="book-preview"
          name="bookImage"
          onChange={(event) => {
            handleChange(event);
            onChangeFileImage(event);
          }}
        />
      </form>
    </div>
  );
};

export default PaymentBook;
