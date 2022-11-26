import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import ContainerExample from "./components/LogIn";
import SignUpPage from "./components/SignUpPage";
import { AuthContextProvider } from "../src/context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Services from "./components/Services";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <AuthContextProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to={"/login"} replace={true} />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<ContainerExample />} />
          <Route path="/services" element={<Services />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
        <ToastContainer />
      </div>
    </AuthContextProvider>
  );
}

export default App;
