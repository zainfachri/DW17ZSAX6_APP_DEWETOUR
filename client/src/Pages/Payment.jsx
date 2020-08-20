import React, { Fragment, useState } from "react";

// import PaymentName from "../Components/Payment/PaymentName";
// import PaymentBook from "../Components/Payment/PaymentBook";
// import PaymentTotal from "../Components/Payment/PaymentTotal";
import PayBill from "../Components/Payment/PayBill";
import PayButton from "../Components/Payment/PayButton";
import PayConfirm from "../Components/Payment/PayConfirm";
import "../Components/Payment/Payment.css";

const Payment = () => {
  const [modalPayment, setModalPayment] = useState(false);

  return (
    <Fragment>
      <PayBill />
      {modalPayment && <PayConfirm setModalPayment={setModalPayment} />}
      <div className="container">
        <PayButton setModalPayment={setModalPayment} />
      </div>
    </Fragment>
  );
};

export default Payment;
