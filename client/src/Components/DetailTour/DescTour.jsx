import React from "react";
import { useQuery } from "react-query";

const DescTour = ({ detailTrip }) => {
  return (
    <div>
      <div className="desc">
        <h3>Description</h3>
        <p style={{ color: "rgb(77 75 75)", textAlign: "justify" }}>
          {detailTrip.description}
        </p>
      </div>
    </div>
  );
};

export default DescTour;
