import { User } from "@lets-science/letsscience-client";
import React, { useEffect, useState } from "react";
import { useClient } from "../hooks/useClient";

function Start() {
  const [user, setUser] = useState<User | null>(null);
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

  if (user === null) {
    return <React.Fragment>Couldn't load data</React.Fragment>;
  }
  return (
    <React.Fragment>
      <h1>Welcome back, {user.name}</h1>
      <h2>Your Challenges</h2>
      {/* <br></br> */}
      <h2>Your Quiz</h2>
    </React.Fragment>
  );
}

export default Start;
