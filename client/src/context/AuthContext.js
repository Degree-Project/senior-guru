import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { useGeolocated } from "react-geolocated";

const AuthContext = createContext();

function AuthContextProvider(props) {
  const [isAuthenticated, setIsAuthenticated] = useState();
  const [locData, setLocData] = useState();

  const getLoggedIn = () => {
    axios.get("/api/loginStatus").then((res) => {
      setIsAuthenticated(res.data);
    });
  };

  // console.log(data);
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
    });
  useEffect(() => {
    getLoggedIn();
    setLocData(coords);
  });

  console.log(locData);
  useEffect(() => {
    getLoggedIn();
  });

  return (
    <AuthContext.Provider value={{ isAuthenticated, getLoggedIn, locData }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
export { AuthContextProvider };
