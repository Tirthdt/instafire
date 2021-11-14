import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  console.log(RouteComponent);
  const { user } = useAuth();
  console.log(!!user);
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        !!user ? <RouteComponent {...routeProps} /> : <Navigate to={"/"} />
      }
    />
  );
};

export default PrivateRoute;
