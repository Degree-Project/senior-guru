import "../css/HomePage.css";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function NavBar(props) {
  const { isAuthenticated, getLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    axios.get("/api/logout").then(() => {
      navigate("/login");
      getLoggedIn();
      console.log("Logged Out Successfully");
    });
  };

  return (
    <>
      {!isAuthenticated ? (
        <div>
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
        <div>
          <button
            class="btn home-page-signup-btn px-4"
            onClick={() => {
              handleLogout();
            }}
          >
            Logout
          </button>
        </div>
      )}
    </>
  );
}

export default NavBar;
