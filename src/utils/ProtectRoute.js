import { Navigate, Outlet } from "react-router-dom";

export const ProtectRoute = ({ user }) => {
  console.log(user);
  return user ? <Outlet /> : <Navigate to="/login" replace />;

}