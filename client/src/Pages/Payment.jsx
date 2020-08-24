import React, { Fragment, useState } from "react";
import { useQuery, useMutation, queryCache } from "react-query";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import PaymentName from "../Components/Payment/PaymentName";
import PaymentBook from "../Components/Payment/PaymentBook";
import PaymentTotal from "../Components/Payment/PaymentTotal";
// import PayBill from "../Components/Payment/PayBill";
import PayButton from "../Components/Payment/PayButton";
import PayConfirm from "../Components/Payment/PayConfirm";
import "../Components/Payment/Payment.css";

const Payment = () => {
  const [modalPayment, setModalPayment] = useState(false);
  const { id, qty } = useParams();
  const [payTrip, setPayTrip] = useState([]);
  const [previewSrc, setPreviewSrc] = useState(null);

  const user = localStorage.getItem("userId");
  const totalPrice = localStorage.getItem("totalPrice");

  const fetchTourData = async () => {
    const result = await axios.get(`http://localhost:5001/api/v1/trip/${id}`);
    const resData = result.data.data;
    setPayTrip(resData);
  };

  const { isLoading, data } = useQuery("trip", fetchTourData);

  const [payTrans, setPayTrans] = useState({
    counterQty: qty,
    total: totalPrice,
    status: "Waiting Approve",
    bookImage: "",
    tripId: id,
    userId: user,
  });
  const handleChange = (event) => {
    const updateForm = { ...payTrans };
    updateForm[event.target.name] =
      event.target.type === "file" ? event.target.files[0] : event.target.value;
    setPayTrans(updateForm);
  };
  const onChangeFileImage = (event) => {
    let file = event.target.files[0];
    let reader = new FileReader();

    reader.onload = () => {
      setPreviewSrc([reader.result]);
    };
    reader.readAsDataURL(file);
  };

  const handleBooking = async () => {
    let fd = new FormData();

    fd.append("counterQty", payTrans.counterQty);
    fd.append("total", payTrans.total);
    fd.append("status", payTrans.status);
    fd.append("bookImage", payTrans.bookImage);
    fd.append("tripId", payTrans.tripId);
    fd.append("userId", payTrans.userId);
    try {
      const postOrder = await axios.post(
        "http://localhost:5001/api/v1/transaction",
        fd
      );
      localStorage.removeItem("totalPrice");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="container payment">
        <div className="row inside-pay">
          <PaymentName payTrip={payTrip} fetchTourData={fetchTourData} />
          <PaymentBook
            payTrans={payTrans}
            onChangeFileImage={onChangeFileImage}
            handleChange={handleChange}
            previewSrc={previewSrc}
          />
          <PaymentTotal totalPrice={totalPrice} qty={qty} />
        </div>
      </div>
      {modalPayment && (
        <PayConfirm
          setModalPayment={setModalPayment}
          handleBooking={handleBooking}
        />
      )}
      <div className="container">
        <PayButton setModalPayment={setModalPayment} />
      </div>
    </>
    // <Fragment>
    //   <PayBill
    //     qty={qty}
    //     payTrip={payTrip}
    //     fetchTourData={fetchTourData}
    //     setTotalPriceQty={setTotalPriceQty}
    //   />
    //   {modalPayment && <PayConfirm setModalPayment={setModalPayment} />}
    //   <div className="container">
    //     <PayButton
    //       setModalPayment={setModalPayment}
    //       handleBooking={handleBooking}
    //     />
    //   </div>
    // </Fragment>
  );
};

export default Payment;
