import React, { useState, useEffect } from "react";
import axios from "axios";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import "./AddTrip.css";

const AddTrip = () => {
  const [countryGet, setCountry] = useState([]);
  const [previewSrc, setPreviewSrc] = useState(null);
  const [formAdd, setFormAddTrip] = useState({
    title: "",
    countryId: 0,
    accomodation: "",
    transportation: "",
    eat: "",
    day: 0,
    night: 0,
    dateTrip: "",
    price: 0,
    quota: 0,
    description: "",
    tripImage: "",
  });
  const [error, setError] = useState("");
  const {
    title,
    countryId,
    accomodation,
    transportation,
    eat,
    day,
    night,
    dateTrip,
    price,
    quota,
    description,
    tripImage,
  } = formAdd;

  const handleChange = (event) => {
    const updateForm = { ...formAdd };
    updateForm[event.target.name] =
      event.target.type === "file" ? event.target.files[0] : event.target.value;
    setFormAddTrip(updateForm);
    // setFormAddTrip({
    //   ...formAddTrip,
    //   [event.target.name]: event.target.value,
    // });
  };
  const onChangeFileImage = (event) => {
    let file = event.target.files[0];
    let reader = new FileReader();

    reader.onload = () => {
      setPreviewSrc([reader.result]);
    };
    reader.readAsDataURL(file);
  };

  const AddTour = async (event) => {
    event.preventDefault();
    let fd = new FormData();

    fd.append("title", title);
    fd.append("countryId", countryId);
    fd.append("accomodation", accomodation);
    fd.append("transportation", transportation);
    fd.append("eat", eat);
    fd.append("day", day);
    fd.append("night", night);
    fd.append("dateTrip", dateTrip);
    fd.append("price", price);
    fd.append("quota", quota);
    fd.append("description", description);
    fd.append("tripImage", tripImage);
    try {
      const res = await axios.post("http://localhost:5001/api/v1/trip", fd);
      window.location.reload();
    } catch (err) {
      const resError = err.response.data.error.message;
      setError(resError);
      console.log(err);
    }
  };
  const getCountry = async () => {
    const res = await axios.get("http://localhost:5001/api/v1/country");
    const resData = res.data.data;
    setCountry(resData);
  };
  useEffect(() => {
    getCountry();
  }, []);
  const getDateTrip = (day) => {
    setFormAddTrip({ ...formAdd, dateTrip: day });
  };
  return (
    <div className="container add-trip-wrapper">
      <h1>Add Trip</h1>
      {error && (
        <div className="my-3 alert alert-danger text-center">{error}</div>
      )}
      <form
        formAdd={formAdd}
        className="add-trip"
        enctype="multipart/form-data"
      >
        <label htmlFor="">Title trip</label>
        <div class="input-group">
          <input
            type="text"
            className="form-control"
            value={title}
            name="title"
            onChange={(event) => handleChange(event)}
          />
        </div>

        <label htmlFor="">Country</label>

        <div className="input-group">
          <select
            className="custom-select"
            value={countryId}
            name="countryId"
            onChange={(event) => handleChange(event)}
          >
            <option selected>Choose...</option>
            {countryGet.map((region) => (
              <option value={region.id}>{region.name}</option>
            ))}
          </select>
        </div>

        <label htmlFor="">Accommodation</label>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            value={accomodation}
            name="accomodation"
            onChange={(event) => handleChange(event)}
          />
        </div>

        <label htmlFor="">Transportation</label>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            value={transportation}
            name="transportation"
            onChange={(event) => handleChange(event)}
          />
        </div>

        <label htmlFor="">Eat</label>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            value={eat}
            name="eat"
            onChange={(event) => handleChange(event)}
          />
        </div>

        <label htmlFor="">Duration</label>
        <div className="input-group">
          <input
            type="number"
            className="day"
            value={day}
            name="day"
            onChange={(event) => handleChange(event)}
          />{" "}
          <span>Day</span>
          <input
            type="number"
            className="night"
            value={night}
            name="night"
            onChange={(event) => handleChange(event)}
          />{" "}
          <span>Night</span>
        </div>

        <label htmlFor="">Date Trip</label>
        <div className="input-group">
          <DayPickerInput
            className="form-control"
            onDayChange={(day) => getDateTrip(day)}
          />

          {/* <input
            type="text"
            class="form-control"
            value={dateTrip}
            name="dateTrip"
            onChange={(event) => handleChange(event)}
          /> */}
        </div>
        <label htmlFor="">Price</label>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            value={price}
            name="price"
            onChange={(event) => handleChange(event)}
          />
        </div>

        <label htmlFor="">Quota</label>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            value={quota}
            name="quota"
            onChange={(event) => handleChange(event)}
          />
        </div>

        <label htmlFor="">Description</label>
        <div className="input-group">
          <textarea
            type="text"
            className="form-control desc-form"
            value={description}
            name="description"
            onChange={(event) => handleChange(event)}
          ></textarea>
        </div>

        <label htmlFor="">Image</label>
        <div className="input-group">
          <input
            type="file"
            name="tripImage"
            onChange={(event) => {
              handleChange(event);
              onChangeFileImage(event);
            }}
          />
        </div>
        <div className="input-group" style={{ marginTop: "10px" }}>
          <img src={previewSrc} className="preview-film" alt="" width="300" />
        </div>
        <button
          type="submit"
          className="reg income-trip add-trip-button"
          style={{ color: "#fff" }}
          onClick={AddTour}
        >
          Add Trip
        </button>
      </form>
    </div>
  );
};

export default AddTrip;
