import React from "react";

const PayButton = ({ setModalPayment, previewSrc }) => {
  return (
    <div className="row paybtn">
      <div className="col-9"></div>
      <div className="col-3">
        <button
          type="button"
          className="btn btn-warning btn-lg"
          onClick={() => setModalPayment(true)}
          disabled={!previewSrc ? true : false}
        >
          PAY
        </button>
      </div>
    </div>
  );
};

export default PayButton;
