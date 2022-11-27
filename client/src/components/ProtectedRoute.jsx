import { Navigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { useContext } from "react";
import { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
  //   const { loading, isAuthenticated, user } = useSelector((state) => state.user);
  const { isAuthenticated } = useContext(AuthContext);
  return <>{isAuthenticated === false ? <Navigate to="/login" /> : children}</>;
};

export default ProtectedRoute;
