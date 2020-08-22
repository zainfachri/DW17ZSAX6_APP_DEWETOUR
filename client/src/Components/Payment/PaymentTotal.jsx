import React from "react";

const PaymentTotal = ({ payTrans }) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });

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
          <td>M.Fachri Zain</td>
          <td>Male</td>
          <td>082164894643</td>
          <th>Qty</th>
          <th>: {payTrans.counterQty}</th>
        </tr>
        <tr>
          <td colspan="4"></td>
          <th>Total</th>
          <th>
            :{" "}
            <span style={{ color: "#FF0000" }}>
              {formatter.format(payTrans.total)}
            </span>
          </th>
        </tr>
      </tbody>
    </table>
  );
};

export default PaymentTotal;
