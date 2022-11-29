import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

function AuthContextProvider(props) {
  const [isAuthenticated, setIsAuthenticated] = useState();

  const getLoggedIn = () => {
    axios.get("/api/loginStatus").then((res) => {
      setIsAuthenticated(res.data);
    });
  };

  useEffect(() => {
    getLoggedIn();
  });

  return (
    <AuthContext.Provider value={{ isAuthenticated, getLoggedIn }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
export { AuthContextProvider };
