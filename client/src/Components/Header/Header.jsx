import React, { useState, useEffect } from "react";

import Jumbotron from "../Navbar/Jumbotron";
import "./Header.css";

const Header = ({ setSearch }) => {
  return (
    <div>
      <Jumbotron />
      <div classname="container">
        <div className="head">
          <h1 style={{ fontSize: 66 }}>Explore</h1>
          <h1 style={{ fontSize: 64, fontWeight: "lighter" }}>
            your amazing city together
          </h1>
        </div>
        <p style={{ fontSize: 20 }} className="sometext">
          Find great places to holiday
        </p>
        <div className="input-group input-group-lg mb-3 btn-search">
          <input
            type="text"
            class="form-control find"
            placeholder="Find great places to holiday"
            onChange={(e) => setSearch(e.target.value)}
          />
          <div class="input-group-append">
            <button
              class="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
            >
              <i class="fa fa-search" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
