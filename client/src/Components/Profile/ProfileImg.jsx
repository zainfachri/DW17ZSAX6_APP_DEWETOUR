import React, { useState, useEffect } from "react";
import axios from "axios";

import Profile from "../../img/profle/img1.png";

const ProfileImg = ({
  showButton,
  previewSrc,
  userData,
  updateUser,
  onChangeFileImage,
  handleChange,
  editUser,
}) => {
  return (
    <div className="profile-img">
      <form updateUser={updateUser} enctype="multipart/form-data">
        <div className="profilePic">
          {!userData.userImg && !previewSrc ? (
            <img src={Profile} alt="" width="300px" height="345px" />
          ) : previewSrc ? (
            <img src={previewSrc} alt="" width="300px" height="345px" />
          ) : (
            <img
              src={`http://localhost:5001/uploads/${userData.userImg}`}
              alt=""
              width="300px"
              height="345px"
            />
          )}
        </div>
        {/* <div class="custom-file">
          <input
            type="file"
            name="imgUser"
            onChange={(event) => {
              handleChange(event);
              onChangeFileImage(event);
            }}
          />
        </div>
        {showButton && (
          <button
            className="btn btn-warning"
            style={{ color: "#fff", width: "100%" }}
            onClick={editUser}
          >
            Save
          </button>
        )} */}
      </form>
    </div>
  );
};

export default ProfileImg;
