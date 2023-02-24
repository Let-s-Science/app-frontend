import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";

const CheckAuthorization = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (window.location.pathname !== "/sign-up") {
      if (
        localStorage.getItem("token") === null &&
        window.location.pathname !== "/sign-up"
      ) {
        console.log("Unauthorized!");
        navigate("/login");
      } else {
        console.log("Authorized!");
      }
    }
  }, []);

  return <></>;
};

export default CheckAuthorization;
