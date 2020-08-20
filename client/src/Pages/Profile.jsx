import React from "react";
import ProfileDesc from "../Components/Profile/ProfileDesc";
import PayBill from "../Components/Payment/PayBill";

const Profile = () => {
  return (
    <div>
      <ProfileDesc />
      <div className="container">
        <h1 style={{ marginTop: 40, fontWeight: 700 }}>History Trip</h1>
      </div>
      <PayBill />
    </div>
  );
};

export default Profile;
