import React, { useState } from "react";
import axios from "axios";
import "../../css/SignUpPage.css";
import "../../css/Booking.css";
import { useNavigate } from "react-router-dom";

const BookingForm = () => {
  const date = new Date();
  let format1 = date.year + "-" + month + "-" + day;

  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [currentDate, setCurrentDate] = useState(date);
  console.log(currentDate);
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    birthDate: "",
    location: "",
    password: "",
    role: "",
    avatar: "",
  });

  const handleFirstNameChange = (e) => {
    setUser({
      ...user,
      firstName: e.target.value,
    });
  };
  const handleLastNameChange = (e) => {
    setUser({
      ...user,
      lastName: e.target.value,
    });
  };

  const handleLocationChange = (e) => {
    setUser({
      ...user,
      location: e.target.value,
    });
  };

  const handleEmailChange = (e) => {
    setUser({
      ...user,
      email: e.target.value,
    });
  };

  const handleBirthDateChange = (e) => {
    setUser({
      ...user,
      birthDate: e.target.value,
    });
  };

  const handlePasswordChange = (e) => {
    setUser({
      ...user,
      password: e.target.value,
    });
  };

  const handleGenderChange = (e) => {
    setUser({
      ...user,
      gender: e.target.value,
    });
  };

  const handleRoleChange = (e) => {
    setUser({
      ...user,
      role: e.target.value,
    });
  };

  const handleAvatarChange = (e) => {
    setUser({
      ...user,
      avatar: e.target.files[0],
    });
  };

  const registerUser = () => {
    const formData = new FormData();
    formData.append("avatar", user.avatar);
    formData.append("firstName", user.firstName);
    formData.append("lastName", user.lastName);
    formData.append("email", user.email);
    formData.append("birthDate", user.birthDate);
    formData.append("gender", user.gender);
    formData.append("role", user.role);
    formData.append("location", user.location);
    formData.append("password", user.password);
    try {
      axios.post("/api/register", formData).then((res) => {
        console.log("Registered Successfull");
        navigate("/services");
      });
    } catch (err) {
      console.log(err.response.data.errorMessage);
    }
  };

  return (
    <div className="d-flex row w-100 m-0 p-0">
      <div className="container-bg-FFCF25 p-5 col-4 vh-100"></div>

      <div className="container-bg-white d-flex row justify-content-center col-8 h-100 m-0 p-0 pt-5 px-5">
        <div className="d-flex flex-column h-25 w-100 justify-content-center align-items-center">
          <h2 className="signup-title">Booking ...</h2>
          <div className="d-flex row justify-content-center m-0 p-0 mb-3">
            <h3 className="signup-title font-weight-light mr-1">
              Please provide
            </h3>
            <h3 className="signup-title">Your Details ...</h3>
          </div>
        </div>
        <form
          className={`d-flex row h-75 justify-content-between align-content-start flex-wrap m-0 px-5`}
        >
          <>
            <input
              type="text"
              name="service"
              id="service"
              className="form-input form-control color-8A8A8A w-100 my-2 py-3"
              placeholder="Service Name"
              onChange={handleFirstNameChange}
              autoComplete="off"
            />
            <div className="d-flex w-47 align-items-center">
              <input
                type="number"
                name="cost"
                id="lastname"
                className="form-input form-control color-8A8A8A w-100 my-2 py-3"
                placeholder="Cost"
                onChange={handleLastNameChange}
                autoComplete="off"
              />
              <i className="fa-solid fa-indian-rupee-sign icon-rupee"></i>
            </div>
            <input
              type="date"
              name="booking_date"
              id="booking_date"
              min={currentDate}
              onChange={(e) => console.log(e.target.value)}
              className="form-input form-control color-8A8A8A w-47 my-2 py-3"
              placeholder="DD/MM/YY"
              // onChange={handleEmailChange}
              autoComplete="off"
            />
            <input
              type="time"
              name="start_time"
              id="start_time"
              placeholder="Start Time"
              className="form-input form-control color-8A8A8A w-47 my-2 py-3"
              onChange={handleBirthDateChange}
              autoComplete="off"
            />
            <input
              type="time"
              name="end_time"
              id="end_time"
              className="form-input form-control color-8A8A8A w-47 my-2 py-3"
              placeholder="End Time"
              onChange={handleLocationChange}
              autoComplete="off"
            />
            <select
              name="role"
              id="role"
              onChange={handleRoleChange}
              className="w-100 form-input form-control color-8A8A8A my-2 py-3"
            >
              <option
                value="Offline / Online"
                selected
                disabled
                defaultValue={"Offline / Online"}
              >
                Offline / Online
              </option>
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
            </select>

            <div className="d-flex justify-content-between w-100">
              <input
                type="button"
                className="w-100px btn btn-bg-FF9E67 my-3"
                value="Back"
                // onClick={() => setStep(2)}
              />
              <input
                type="button"
                className="w-100px btn btn-bg-FF9E67 my-3 text-center"
                value="Book Now"
                // onClick={() => setStep(2)}
              />
            </div>
          </>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
