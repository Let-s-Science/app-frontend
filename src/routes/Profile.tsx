import React, { useEffect, useState } from "react";
import { Client, OpenAPI } from "@lets-science/letsscience-client";
import { useClient } from "../hooks/useClient";

function Profile() {
  const [user, setUser] = useState({});
  let client = useClient();

  useEffect(() => {
    const signup = async () => {
      client.user
        .getApiUserSelf()
        .then((resp) => {
          setUser(resp);
        })
        .catch((e) => {
          console.log(e);
        });
    };
    signup();

    return () => {};
  }, []);
  console.log(user);

  return (
    <React.Fragment>
      <h1>Your Site</h1>
      <br />
    </React.Fragment>
  );
}

export default Profile;
