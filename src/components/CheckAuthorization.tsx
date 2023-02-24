import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";

function CheckAuthorization() {
  const navigate = useNavigate();
  useEffect(() => {
    console.log(localStorage.getItem("token"));
    console.log(window.location.pathname);
    if (window.location.pathname !== "/sign-up") {
      if (
        localStorage.getItem("token") === null &&
        window.location.pathname !== "/sign-up"
      ) {
        console.log("Unauthorized!");
        navigate("/login");
      } else {
        console.log("Authorized!");
        navigate("/"); //das wird noch n Fehler auslösen
      }
    }
  }, []);

  return <></>;
}

export default CheckAuthorization;
