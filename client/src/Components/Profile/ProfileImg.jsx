import React from "react";
// import Profile from "../../img/profle/img1.png";
import Profile from "../../img/profle/img1.jpg";

const ProfileImg = () => {
  return (
    <div className="profile-img">
      <form action="">
        <div className="profilePic">
          <img src={Profile} alt="Profile" />
        </div>
        <div class="custom-file">
          <input type="file" />
        </div>
      </form>
    </div>
  );
};

export default ProfileImg;
