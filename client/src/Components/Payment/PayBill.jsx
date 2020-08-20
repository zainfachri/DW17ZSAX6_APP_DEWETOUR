import React, { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

import PaymentName from "./PaymentName";
import PaymentTotal from "./PaymentTotal";
import PaymentBook from "./PaymentBook";

const PayBill = () => {
  const [payTrans, setPayTrans] = useState([]);
  const [payTrip, setPayTrip] = useState([]);
  const { id } = useParams();

  const getTransaction = async () => {
    const result = await axios.get(
      `http://localhost:5001/api/v1/transaction/${id}`
    );
    const resData = result.data.data;
    setPayTrans(resData);
  };

  const fetchTourData = async () => {
    const result = await axios.get(`http://localhost:5001/api/v1/trip/${id}`);
    const resData = result.data.data;
    setPayTrip(resData);
  };
  const { isLoading, data } = useQuery(
    "transaction",
    getTransaction,
    fetchTourData
  );

  return (
    <div className="container payment">
      <div className="row inside-pay">
        <PaymentName payTrip={payTrip} fetchTourData={fetchTourData} />
        <PaymentBook payTrip={payTrip} />
        <PaymentTotal payTrans={payTrans} />
      </div>
    </div>
  );
};

export default PayBill;
