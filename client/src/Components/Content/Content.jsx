import React from "react";
import contentMenu from "../../DataTour/Benefit";

import "./Content.css";

const Content = () => {
  return (
    <div className="benefit-card">
      <div className="benefit-wrap">
        {contentMenu.map((benefit) => (
          <div className="card benefit" key={benefit.id}>
            <img src={benefit.img} />
            <h3>{benefit.name}</h3>
            <p>{benefit.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Content;
