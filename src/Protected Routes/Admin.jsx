import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function Admin({ component: Component, ...rest }) {
  const isAdmin = Cookies.get("role") === "Admin";

  if (!isAdmin) {
    return <Navigate to="/usestate" replace />;
  }

  return (
    <Component {...rest} />
  );
}

