import React, { useState } from "react";
import "../css/SignUpPage.css";

const SignUpPage = () => {
  const [step, setStep] = useState(1);
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
            <form className="d-flex row h-50 w-75 justify-content-between align-items-center m-0 px-5">
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
              <input
                type="button"
                className="col-4 btn container-bg-FFCF25"
                value="Next"
                onClick={() => setStep(2)}
                style={{ boxShadow: "5px 7px 7px 2px rgba(0, 0, 0, 0.25)" }}
              />
            </form>
          </>
        )}
        {step === 2 && (
          <>
            <div className="d-flex flex-column h-25 w-100 justify-content-center align-items-center">
              <h2 className="signup-title">Your Profile</h2>
              <div className="d-flex row justify-content-center m-0 p-0">
                <h3 className="signup-title font-weight-light">
                  Please provide
                </h3>
                <h3 className="signup-title">Your Profile Picture</h3>
              </div>
            </div>
            <form className="d-flex row h-50 w-75 justify-content-between align-items-center m-0 px-5">
              <input
                type="button"
                className="col-4 btn container-bg-FFCF25"
                value="Next"
                onClick={() => setStep(3)}
                style={{ boxShadow: "5px 7px 7px 2px rgba(0, 0, 0, 0.25)" }}
              />
            </form>
          </>
        )}
        {step === 3 && (
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
            <form className="d-flex row h-50 w-75 justify-content-between align-items-center m-0 px-5">
              <input
                type="button"
                className="col-4 btn container-bg-FFCF25"
                value="Next"
                onClick={() => setStep(1)}
                style={{ boxShadow: "5px 7px 7px 2px rgba(0, 0, 0, 0.25)" }}
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
