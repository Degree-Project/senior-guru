import { Navigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { useContext } from "react";

const ProtectedRoute = ({ children }) => {
  //   const { loading, isAuthenticated, user } = useSelector((state) => state.user);
  const { isAuthenticated, getLoggedIn } = useContext(AuthContext);
  getLoggedIn();
  return <>{isAuthenticated === false ? <Navigate to="/login" /> : children}</>;
};

export default ProtectedRoute;
