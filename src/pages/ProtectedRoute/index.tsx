import React, { ReactNode } from "react";
import { useAppContext } from "../../context/appContext";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user } = useAppContext();

  if (!user) {
    return <Navigate to="/login" />;
  }
  return <>{children}</>;
};

export default ProtectedRoute;
