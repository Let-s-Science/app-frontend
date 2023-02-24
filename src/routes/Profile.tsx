import React, { useEffect, useState } from "react";
import { Client, OpenAPI, User } from "@lets-science/letsscience-client";
import { useClient } from "../hooks/useClient";
import { Center, Paper } from "@mantine/core";
import Jazzicon from "react-jazzicon";

function Profile() {
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
    return (
      <React.Fragment>
        Couldn't load data
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <Center className="centeredAvatar">
        <Jazzicon diameter={90} seed={parseInt(user.avatar_seed)} />
      </Center>
      <h1>{user.name}'s Site</h1>
      <div className="informationTitle">E-Mail:</div>
      <div className="userInformation">{user.email}</div>
      <div className="informationTitle">Created At:</div>
      <div className="userInformation">{user.created_at}</div>
      <div className="informationTitle">Score:</div>
      <div className="userInformation">{user.score}</div>
    </React.Fragment>
  );
}

export default Profile;
