import React from "react";

import Header from "../Components/Header/Header";
// import Benefit from "../DataTour/Benefit";
import Content from "../Components/Content/Content";
// import TourData from "../DataTour/TourData";
import Tour from "../Components/Content/Tour";

const Home = () => {
  return (
    <div className="App">
      <Header />
      <Content />
      <div className="main">
        <p>Group Tour</p>
        <Tour />
      </div>
    </div>
  );
};
export default Home;
