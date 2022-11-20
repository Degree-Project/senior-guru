import React, { useState, useEffect } from "react";
import "../css/SignUpPage.css";

const SignUpPage = () => {
  const [step, setStep] = useState(1);
  const [roles, setRoles] = useState("");

  const onChangeRole = () => {
    var roleID = document.getElementById("role").value;
    setRoles(roleID);
  };
  console.log(roles);

  useEffect(() => {
    setRoles();
  }, []);

  return (
    <div className="d-flex row w-100 m-0 p-0">
      <div className="container-bg-white d-flex row justify-content-center col-8 vh-100 m-0 p-0">
        {step === 1 && (
          <>
            <div className="d-flex flex-column h-25 w-100 justify-content-center align-items-center">
              <h2 className="signup-title">Your Details</h2>
              <div className="d-flex row justify-content-center m-0 p-0">
                <h3 className="signup-title font-weight-light">
                  Please provide
                </h3>
                <h3 className="signup-title">Your Details</h3>
              </div>
            </div>
            <form className="d-flex row h-75 w-75 justify-content-between align-items-start m-0 px-5">
              <input
                type="text"
                name="firstname"
                id="firstname"
                className="form-input form-control col-5"
                placeholder="Enter First Name"
              />
              <input
                type="text"
                name="lastname"
                id="lastname"
                className="form-input form-control col-5"
                placeholder="Enter Last Name"
              />
              <input
                type="email"
                name="email"
                id="email"
                className="form-input form-control col-12"
                placeholder="Enter Email"
              />
              <input
                type="date"
                name="date"
                id="date"
                className="form-input form-control col-5"
              />
              <input
                type="text"
                name="location"
                id="location"
                className="form-input form-control col-5"
                placeholder="Enter Location"
              />
              <select
                name="role"
                id="role"
                onClick={() => onChangeRole()}
                className="w-100 form-input form-control"
              >
                <option value="" selected disabled>
                  Select your Role
                </option>
                <option value="student">Student</option>
                <option value="guru">Guru</option>
              </select>
              <input
                type="button"
                className="col-3 btn btn-bg-FF9E67"
                value="Next"
                onClick={() => setStep(2)}
              />
            </form>
          </>
        )}
        {step === 2 && (
          <>
            <div className="d-flex flex-column h-25 w-100 justify-content-end align-items-center">
              <h2 className="signup-title">Your Profile</h2>
              <div className="d-flex row justify-content-center m-0 p-0">
                <h3 className="signup-title font-weight-light">
                  Please provide
                </h3>
                <h3 className="signup-title">Your Profile Picture</h3>
              </div>
            </div>
            <form className="d-flex row h-75 w-100 justify-content-start align-items-start m-0 px-5">
              <div className="profile-bg w-100 top-0">
                <div className="profile-Pic-Container"></div>
              </div>
              <div className="w-100 d-flex justify-content-end">
                <input
                  type="file"
                  name="avatar"
                  id="avatar"
                  className="d-none"
                />
                <label
                  for="avatar"
                  className="form-input text-center form-control col-2"
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
                className="w-100 form-control form-input"
                style={{ resize: "none" }}
                placeholder="Add Bio"
                rows="4"
              ></textarea>
              {roles === "guru" && (
                <input
                  type="button"
                  className="col-3 btn btn-bg-FF9E67"
                  value="Next"
                  onClick={() => setStep(3)}
                />
              )}
              {roles === "student" && (
                <input
                  type="button"
                  className="col-3 btn btn-bg-FF9E67"
                  value="Sign Up"
                  onClick={() => setStep(1)}
                />
              )}
            </form>
          </>
        )}
        {step === 3 && roles === "guru" && (
          <>
            <div className="d-flex flex-column h-25 w-100 justify-content-center align-items-center">
              <h2 className="signup-title">Your Interest</h2>
              <div className="d-flex row justify-content-center m-0 p-0">
                <h3 className="signup-title font-weight-light">
                  Please provide
                </h3>
                <h3 className="signup-title">Your Skill’s Interest</h3>
              </div>
            </div>
            <form className="d-flex row h-75 w-75 justify-content-start align-items-start m-0 px-5">
              <input
                type="button"
                className="col-3 btn btn-bg-FF9E67"
                value="Sign Up"
                onClick={() => setStep(1)}
              />
            </form>
          </>
        )}
      </div>
      <div className="container-bg-FFCF25 p-5 col-4 vh-100"></div>
    </div>
  );
};

export default SignUpPage;
