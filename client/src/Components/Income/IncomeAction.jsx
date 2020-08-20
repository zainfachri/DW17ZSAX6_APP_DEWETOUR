import React from "react";
import { Link } from "react-router-dom";

import PayBill from "../Payment/PayBill";

const IncomeAction = () => {
  return (
    <div>
      <PayBill />
      <div className="row inaction-btn">
        <div className="col-6"></div>
        <div className="col-2">
          <Link to="/income-transaction">
            <button type="button" className="btn btn-danger btn-lg">
              Cancel
            </button>
          </Link>
        </div>
        <div className="col-3">
          <Link to="/income-transaction">
            <button type="button" className="btn btn-success btn-lg">
              Approve
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IncomeAction;
