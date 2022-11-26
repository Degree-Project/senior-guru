import "../css/HomePage.css";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

function NavBar(props) {
  const { isAuthenticated } = useContext(AuthContext);

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
          <button class="btn home-page-signup-btn px-4">Logout</button>
        </div>
      )}
    </>
  );
}

export default NavBar;
