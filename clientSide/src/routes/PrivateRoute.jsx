import React, { use } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "../contexts/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = use(AuthContext);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate state={location.pathname} to={`/sign-in`} />;
  }
  // console.log(user)

  return children;
};

export default PrivateRoute;
