import React, { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

import PaymentName from "./PaymentName";
import PaymentTotal from "./PaymentTotal";
import PaymentBook from "./PaymentBook";

const PayBill = () => {
  return (
    <div className="container payment">
      <div className="row inside-pay">
        <PaymentName />
        <PaymentBook />
        <PaymentTotal />
      </div>
    </div>
  );
};

export default PayBill;
