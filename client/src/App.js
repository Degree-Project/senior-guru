import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import ContainerExample from "./components/LogIn";
import SignUpPage from "./components/SignUpPage";
import { AuthContextProvider } from "../src/context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Services from "./components/Services";
import Profile from "./components/Profile";
import { ToastContainer } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [userDetails, setUserDetails] = useState([]);

  const getUser = () => {
    axios.get("/api/me").then((res) => {
      setUserDetails(res.data.user);
    });
  };

  useEffect(() => {
    getUser();
  });

  return (
    <AuthContextProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to={"/home"} replace={true} />} />
          <Route
            path="/services"
            element={
              <ProtectedRoute>
                <Services
                  userDetails={userDetails}
                  setIsOpen={setIsOpen}
                  isOpen={isOpen}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<ContainerExample />} />
          <Route
            path="/home"
            element={
              <HomePage
                userDetails={userDetails}
                setIsOpen={setIsOpen}
                isOpen={isOpen}
              />
            }
          />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
        <ToastContainer theme="colored" />
      </div>
    </AuthContextProvider>
  );
}

export default App;
