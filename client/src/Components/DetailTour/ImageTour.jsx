import React from "react";
// import incomeData from "../../DataTour/incomeData";

const ImageTour = (props) => {
  return (
    <div>
      <div className="row">
        <div className="col-12 mb-3 banner">
          <img src={props.a1} />
        </div>
      </div>
      <div className="row row-cols-3 banner-small">
        <div className="col">
          <img src={props.a2} />
        </div>
        <div className="col">
          <img src={props.a3} />
        </div>
        <div className="col">
          <img src={props.a4} />
        </div>
      </div>
    </div>
  );
};

export default ImageTour;
