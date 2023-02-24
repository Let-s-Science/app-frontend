import React, { useEffect } from "react";
import { Navigate } from "react-router";
import { useClient } from "../hooks/useClient";

function Logout() {
  try {
    localStorage.removeItem("token");
  } catch (error) {
    console.log(error);
  }
  return <Navigate to="/login"></Navigate>;
}

export default Logout;
