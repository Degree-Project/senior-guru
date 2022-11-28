import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import ContainerExample from "./components/LogIn";
import SignUpPage from "./components/SignUpPage";
import { AuthContextProvider } from "../src/context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Services from "./components/Services";
import Profile from "./components/Profile";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState } from "react";

function App() {
  const [userDetails, setUserDetails] = useState({});

  return (
    <AuthContextProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to={"/home"} replace={true} />} />
          <Route
            path="/services"
            element={
              <ProtectedRoute>
                <Services />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile userDetails={userDetails} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/login"
            element={<ContainerExample setUserDetails={setUserDetails} />}
          />
          <Route path="/home" element={<HomePage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
        <ToastContainer theme="colored" />
      </div>
    </AuthContextProvider>
  );
}

export default App;
