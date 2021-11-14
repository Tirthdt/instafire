import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const AuthGuard = ({ children }) => {
  let { user } = useAuth();

  if (!!!user) {
    return <Navigate to="/" />;
  }

  return children;
};

export default AuthGuard;
