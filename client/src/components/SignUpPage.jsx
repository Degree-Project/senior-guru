import React, { useState } from "react";
import axios from "axios";
import "../css/SignUpPage.css";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
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
        navigate("/profile");
      });
    } catch (err) {
      console.log(err.response.data.errorMessage);
    }
  };

  return (
    <div className="d-flex row w-100 m-0 p-0">
      <div className="container-bg-white d-flex row justify-content-center col-8 h-100 m-0 p-0">
        <div className="d-flex flex-column h-25 w-100 justify-content-center align-items-center">
          {step === 1 && <h2 className="signup-title">Your Details</h2>}
          {step === 1 && (
            <div className="d-flex row justify-content-center m-0 p-0">
              <h3 className="signup-title font-weight-light">Please provide</h3>
              <h3 className="signup-title">Your Details</h3>
            </div>
          )}
          {step === 2 && <h2 className="signup-title">Your Profile</h2>}
          {step === 2 && (
            <div className="d-flex row justify-content-center m-0 p-0">
              <h3 className="signup-title font-weight-light">Please provide</h3>
              <h3 className="signup-title">Your Profile Picture</h3>
            </div>
          )}
          {/* {step === 3 && <h2 className="signup-title">Your Interest</h2>}
          {step === 3 && (
            <div className="d-flex row justify-content-center m-0 p-0">
              <h3 className="signup-title font-weight-light">Please provide</h3>
              <h3 className="signup-title">Your Skill’s Interest</h3>
            </div>
          )} */}
        </div>
        <form
          className={`d-flex row h-75 justify-content-between align-content-start flex-wrap m-0 px-5 ${
            step === 2 ? "w-100" : " w-75"
          }`}
        >
          {step === 1 && (
            <>
              <input
                type="text"
                name="firstname"
                id="firstname"
                className="form-input form-control col-5 my-2"
                placeholder="Enter First Name"
                onChange={handleFirstNameChange}
                autoComplete="off"
              />
              <input
                type="text"
                name="lastname"
                id="lastname"
                className="form-input form-control col-5 my-2"
                placeholder="Enter Last Name"
                onChange={handleLastNameChange}
                autoComplete="off"
              />
              <input
                type="email"
                name="email"
                id="email"
                className="form-input form-control col-12 my-2"
                placeholder="Enter Email"
                onChange={handleEmailChange}
                autoComplete="off"
              />
              <input
                type="date"
                name="birthDate"
                id="birthDate"
                className="form-input form-control col-5 my-2"
                onChange={handleBirthDateChange}
                autoComplete="off"
              />
              <input
                type="text"
                name="location"
                id="location"
                className="form-input form-control col-5 my-2"
                placeholder="Enter Location"
                onChange={handleLocationChange}
                autoComplete="off"
              />
              <select
                name="role"
                id="role"
                onChange={handleRoleChange}
                className="col-5 form-input form-control my-2"
              >
                <option value="" selected disabled>
                  Select your Role
                </option>
                <option value="student">Student</option>
                <option value="guru">Guru</option>
              </select>
              <select
                name="gender"
                id="gender"
                className="col-5 form-input form-control my-2"
                onChange={handleGenderChange}
              >
                <option value="" selected disabled>
                  Select your Gender
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
              </select>
              <input
                type="password"
                name="password"
                id="password"
                className="form-input form-control col-5 my-2"
                placeholder="Enter Password"
                onChange={handlePasswordChange}
                autoComplete="off"
              />
              <input
                type="password"
                name="confirmPass"
                id="confirmPass"
                className="form-input form-control col-5 my-2"
                placeholder="Enter Confirm Password"
                autoComplete="off"
              />
              <input
                type="button"
                className="col-3 btn btn-bg-FF9E67 my-3"
                value="Next"
                onClick={() => setStep(2)}
              />
            </>
          )}
          {step === 2 && (
            <>
              <div className="profile-bg w-100 top-0">
                <div className="profile-Pic-Container"></div>
              </div>
              <div className="w-100 d-flex justify-content-end">
                <input
                  type="file"
                  name="banner"
                  id="banner"
                  className="d-none"
                  onChange={handleAvatarChange}
                />
                <label
                  for="avatar"
                  className="form-input text-center form-control col-2 mt-4"
                >
                  Add Profile
                  <i
                    class="fa-solid fa-file-circle-plus ml-2"
                    style={{ color: "black" }}
                  ></i>
                </label>
              </div>
              <div className="w-100 d-flex justify-content-start">
                <input
                  type="file"
                  name="avatar"
                  id="avatar"
                  className="d-none"
                  onChange={handleAvatarChange}
                />
                <label
                  for="avatar"
                  className="form-input text-center form-control col-2 mt-4"
                >
                  Add Profile
                  <i
                    class="fa-solid fa-file-circle-plus ml-2"
                    style={{ color: "black" }}
                  ></i>
                </label>
              </div>
              <textarea
                name="bio"
                id="bio"
                className="w-100 form-control form-input mt-3"
                style={{ resize: "none" }}
                placeholder="Add Bio"
                rows="4"
              ></textarea>
              <input
                type="submit"
                className="col-3 btn btn-bg-FF9E67 mt-4"
                value="Sign Up"
                onClick={(e) => {
                  e.preventDefault();
                  registerUser();
                }}
              />
            </>
          )}
          {/* {step === 3 && user.role === "guru" && (
            <>
              <input
                type="submit"
                className="col-3 btn btn-bg-FF9E67"
                value="Sign Up"
                onClick={(e) => {
                  e.preventDefault();
                  registerUser();
                }}
              />
            </>
          )} */}
        </form>
      </div>
      <div className="container-bg-FFCF25 p-5 col-4 vh-100"></div>
    </div>
  );
};

export default SignUpPage;
