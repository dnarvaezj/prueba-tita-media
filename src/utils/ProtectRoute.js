import { Navigate, Outlet } from "react-router-dom";

export const ProtectRoute = ({ user }) => {

  return user ? <Outlet /> : <Navigate to="/login" />;

}