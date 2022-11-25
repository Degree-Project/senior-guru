import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

function AuthContextProvider(props) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  async function getLoggedIn() {
    const loggedInRes = await axios.get(
      "http://localhost:8000/api/login-status"
    ); // .catch(console.log("please try again"))
    setIsAuthenticated(loggedInRes);
    console.log(loggedInRes);
  }

  useEffect(() => {
    getLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, getLoggedIn }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
export { AuthContextProvider };
