import React, { useEffect } from "react";
import { useClient } from "../hooks/useClient";

function Logout() {
  try {
    localStorage.removeItem("token");
  } catch (error) {
    console.log(error);
  }
  return <></>;
}

export default Logout;
