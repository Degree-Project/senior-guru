import React, { useContext } from "react";
import axios from "axios";
import AuthContext from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../../css/NavBar.css";
import "../../css/HomePage.css";

const LogoutModal = (props) => {
  const { getLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    axios.get("/api/logout").then(() => {
      navigate("/home");
      getLoggedIn();
      console.log("Logged Out Successfully");
    });
  };
  return (
    <>
      {props.isOpen && (
        <div className="position-absolute modalBg">
          <div onClick={() => props.setIsOpen(!props.isOpen)}></div>
          <div className="p-3">
            <button
              class="btn px-4 mr-3 w-100 mb-2 border-0 home-page-login-btn color-white"
              onClick={() => {
                handleLogout();
              }}
            >
              Logout
            </button>
            <a
              class="btn px-4 home-page-login-btn border-0 color-white"
              href="/profile"
              role="button"
            >
              Profile
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default LogoutModal;
