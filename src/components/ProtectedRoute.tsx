import { useAppSelector } from "../hooks/redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { isAuth } = useAppSelector((state) => state.auth);

  if (!isAuth) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
