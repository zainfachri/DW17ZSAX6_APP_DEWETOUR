import React from "react";

const PaymentTotal = ({ totalPrice, qty }) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });
  const res = JSON.parse(localStorage.getItem("userData"));
  return (
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
          <td>{res.fullName}</td>
          <td>{res.address}</td>
          <td>{res.phone}</td>
          <th>Qty</th>
          <th>: {qty}</th>
        </tr>
        <tr>
          <td colspan="4"></td>
          <th>Total</th>
          <th>
            :{" "}
            <span style={{ color: "#FF0000" }}>
              {formatter.format(totalPrice)}
            </span>
          </th>
        </tr>
      </tbody>
    </table>
  );
};

export default PaymentTotal;
