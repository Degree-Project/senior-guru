import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

function AuthContextProvider(props) {
  const [loggedIn, setLoggedIn] = useState();

  async function getLoggedIn() {
    const loggedInRes = await axios.get("/api/login-status"); // .catch(console.log("please try again"))
    setLoggedIn(loggedInRes);
    console.log(loggedInRes);
  }

  useEffect(() => {
    getLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ loggedIn, getLoggedIn }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
export { AuthContextProvider };