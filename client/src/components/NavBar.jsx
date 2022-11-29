import "../css/HomePage.css";
import "../css/NavBar.css";
import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function NavBar(props) {
  const { isAuthenticated, getLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <>
      {isAuthenticated === false ? (
        <div className="col home-page-btn-div mt-4">
          <a
            class="btn home-page-login-btn px-4 mr-4"
            href="http://localhost:3000/login"
            role="button"
          >
            Login
          </a>
          <a
            class="btn home-page-signup-btn px-4"
            href="http://localhost:3000/signup"
            role="button"
          >
            Sign-up
          </a>
        </div>
      ) : (
        <div className="d-flex justify-content-end services-navbar w-100 p-3">
          <div
            className="d-flex align-items-center"
            onClick={() => props.setIsOpen(!props.isOpen)}
          >
            <p className="fs-14 my-3 mx-2 cursor-pointer">
              Hi, <b>{props.userDetails.firstName}</b>
            </p>
            <object
              className="user-image cursor-pointer"
              data="/assets/images/profile/guru.png"
              width="50px"
              height="50px"
            />

            {props.isOpen && (
              <div
                className="fullPageOverlay"
                onClick={() => props.setIsOpen(!props.isOpen)}
              ></div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default NavBar;
