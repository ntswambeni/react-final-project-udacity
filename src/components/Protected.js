import { Navigate, useLocation } from "react-router-dom";

const Protected = ({ isSignedIn, children }) => {
  const location = useLocation();
  if (!isSignedIn) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }
  return children;
};

export default Protected;
