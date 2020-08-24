import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import Moment from "react-moment";

import ProfileImg from "./ProfileImg";
import "./Profile.css";

// localStorage.getItem("fullname");
// localStorage.getItem("email");

const Profile = () => {
  const [userData, setUser] = useState([]);
  const [showButton, setButton] = useState(false);
  const [previewSrc, setPreviewSrc] = useState(null);

  const [updateUser, setUpdate] = useState({
    imgUser: "",
  });

  const user = localStorage.getItem("userId");

  const editUser = async () => {
    let fd = new FormData();
    fd.append("imgUser", updateUser.imgUser);
    try {
      const result = await axios.patch(
        `http://localhost:5001/api/v1/user/${user}`,
        fd
      );
      return result;
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (event) => {
    setUpdate({
      ...updateUser,
      [event.target.name]:
        event.target.type === "file"
          ? event.target.files[0]
          : event.target.value,
    });
    setButton(true);
  };

  const onChangeFileImage = (event) => {
    let file = event.target.files[0];
    let reader = new FileReader();

    reader.onload = () => {
      setPreviewSrc([reader.result]);
    };
    reader.readAsDataURL(file);
  };

  const getUser = async () => {
    try {
      const result = await axios.get(
        `http://localhost:5001/api/v1/user/${user}`
      );
      const resData = result.data.data;
      setUser(resData);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getUser();
  }, []);

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
              <p className="profName">{userData.fullName}</p>
              <p>Full name</p>
            </div>
          </div>

          <div className="personDesc">
            <div className="personIcon">
              <i class="fa fa-envelope"></i>
            </div>
            <div className="personIdentity">
              <p className="profName">{userData.email}</p>
              <p>Email</p>
            </div>
          </div>

          <div className="personDesc">
            <div className="personIcon">
              <i class="fa fa-phone"></i>
            </div>
            <div className="personIdentity">
              <p className="profName">{userData.phone}</p>
              <p>Mobile phone</p>
            </div>
          </div>

          <div className="personDesc">
            <div className="personIcon">
              <i class="fa fa-map-marker"></i>
            </div>
            <div className="personIdentity">
              <p className="profName">{userData.address}</p>
              <p>Address</p>
            </div>
          </div>
        </div>
        <ProfileImg
          showButton={showButton}
          previewSrc={previewSrc}
          userData={userData}
          updateUser={updateUser}
          onChangeFileImage={onChangeFileImage}
          handleChange={handleChange}
          editUser={editUser}
        />
      </div>
    </div>
  );
};

export default Profile;
