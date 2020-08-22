import React from "react";
import Moment from "react-moment";
import { useQuery } from "react-query";

const InfoTrip = ({ detailTrip }) => {
  return (
    <div>
      <div className="info-trip">
        <h3>Information Trip</h3>
        <div className="row row-cols-5 fasility">
          <div className="col">
            <p style={{ color: "#A8A8A8", fontWeight: 800 }}>Accomodation</p>
            <p>
              <i class="fa fa-building"></i> {detailTrip.accomodation}
            </p>
          </div>
          <div className="col">
            <p style={{ color: "#A8A8A8", fontWeight: 800 }}>Transportation</p>
            <p>
              <i class="fa fa-plane"></i> {detailTrip.transportation}
            </p>
          </div>
          <div className="col">
            <p style={{ color: "#A8A8A8", fontWeight: 800 }}>Eat</p>
            <p>
              <i class="fa fa-cutlery"></i> {detailTrip.eat}
            </p>
          </div>
          <div className="col">
            <p style={{ color: "#A8A8A8", fontWeight: 800 }}>Duration</p>
            <p>
              <i class="fa fa-clock-o"></i> {detailTrip.day} Day
            </p>
          </div>
          <div className="col">
            <p style={{ color: "#A8A8A8", fontWeight: 800 }}>Date Trip</p>
            <p>
              <i class="fa fa-calendar"></i>{" "}
              <Moment format="D MMM YYYY" withTitle>
                {detailTrip.dateTrip}
              </Moment>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoTrip;
