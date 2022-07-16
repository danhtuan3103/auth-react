import React from "react";
import { Route, Navigate } from "react-router-dom";
import Cookies from "universal-cookie";
const cookies = new Cookies();

// receives component and any other props represented by ...rest
export const ProtectedRoutes = ({ children }) => {
    const token = cookies.get("TOKEN");
    if (!token) {
        alert("You must login");
      // user is not authenticated
      return <Navigate to="/" />;
    }
    return children;
  };