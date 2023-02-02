import React, { useEffect, useState } from "react";
import { Client } from "@lets-science/letsscience-client";

function Profile() {
  const [user, setUser] = useState({});
  let client = new Client({
    BASE: import.meta.env.VITE_BACKEND_URL,
    WITH_CREDENTIALS: true,
  });
  useEffect(() => {
    const signup = async () => {
      client.user
        .postApiUserSelf()
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
