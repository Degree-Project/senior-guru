import axios from "axios";
import React, { createContext, useState } from "react";

const AuthContext = createContext();

function AuthContextProvider(props) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const getLoggedIn = () => {
    axios.get("/api/login-status").then((res) => {
      setIsAuthenticated(res);
    });
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, getLoggedIn }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
export { AuthContextProvider };
