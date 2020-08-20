import React from "react";

import ProfileImg from "./ProfileImg";
import "./Profile.css";

// localStorage.getItem("fullname");
// localStorage.getItem("email");

const Profile = () => {
  const res = JSON.parse(localStorage.getItem("userData"));
  return (
    <div className="profileBg">
      <div className="profile">
        <div className="person-info">
          <div className="profilInfo">
            <h1>Personal Info</h1>
          </div>
          <div className="personDesc">
            <div className="personIcon">
              <i class="fa fa-user-circle"></i>
            </div>
            <div className="personIdentity">
              <p className="profName">{res.fullName}</p>
              <p>Full name</p>
            </div>
          </div>

          <div className="personDesc">
            <div className="personIcon">
              <i class="fa fa-envelope"></i>
            </div>
            <div className="personIdentity">
              <p className="profName">{res.email}</p>
              <p>Email</p>
            </div>
          </div>

          <div className="personDesc">
            <div className="personIcon">
              <i class="fa fa-phone"></i>
            </div>
            <div className="personIdentity">
              <p className="profName">{res.phone}</p>
              <p>Mobile phone</p>
            </div>
          </div>

          <div className="personDesc">
            <div className="personIcon">
              <i class="fa fa-map-marker"></i>
            </div>
            <div className="personIdentity">
              <p className="profName">{res.address}</p>
              <p>Address</p>
            </div>
          </div>
        </div>
        <ProfileImg />
      </div>
    </div>
  );
};

export default Profile;
