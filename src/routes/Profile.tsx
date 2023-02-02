import React, { useEffect, useState } from "react";
import { Client, OpenAPI, User } from "@lets-science/letsscience-client";
import { useClient } from "../hooks/useClient";

function Profile() {
  const [user, setUser] = useState<User|null>(null);
  let client = useClient();

  useEffect(() => {
    const getUser = async () => {
      client.user
        .getApiUserSelf()
        .then((resp) => {
          setUser(resp);
          
        })
        .catch((e) => {
          console.log(e);
        });
    };
    getUser();

    return () => {};
  }, []);

  if(user === null) {
    return(
      <React.Fragment>

      </React.Fragment>
    )
  }

  return (
    <React.Fragment>
      <h1>{user.name} Site</h1>
      <br />
    </React.Fragment>
  );
}

export default Profile;
