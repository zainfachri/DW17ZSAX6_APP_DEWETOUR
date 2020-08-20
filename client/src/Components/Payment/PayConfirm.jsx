import React, { useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useQuery, useMutation, queryCache } from "react-query";

const PayConfirm = ({ setModalPayment }) => {
  const { id } = useParams();

  const [transCount, setCounter] = useState({
    status: "Waiting Approved",
    attachment: "test.jpg",
    tripId: id,
  });

  const handleOrder = async () => {
    const postOrder = await axios.patch(
      "http://localhost:5001/api/v1/transaction",
      transCount
    );
    return postOrder;
  };
  const [newBooking] = useMutation(handleOrder, {
    onSuccess: () => {
      queryCache.prefetchQuery("trip");
    },
  });
  const handleBooking = () => {
    newBooking();
  };
  return (
    <div className="payconfirmBg">
      <div class="modal-dialog payconfirm">
        <div class="modal-content">
          <div class="modal-body">
            <p>
              Your payment will be confirmed within 1 x 24 hours To see orders
              click{" "}
              <Link to="/payment-pending">
                <strong onClick={handleBooking}>Here </strong>
              </Link>
              thank you{" "}
            </p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
              onClick={() => setModalPayment(false)}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayConfirm;
