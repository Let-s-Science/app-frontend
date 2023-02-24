import React, { useEffect, useState } from "react";
import { Client, OpenAPI, User } from "@lets-science/letsscience-client";
import { useClient } from "../hooks/useClient";
import { Card, Center, Paper, Title } from "@mantine/core";
import Jazzicon from "react-jazzicon";
import { StatsRing } from "../components/StatsRing";
import { berechneLevel, berechneFortschritt } from "../util";

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
      <Card className="profileStats" shadow="sm" p="lg" radius="md" withBorder>
        <Card.Section>
          <br />
          <Title>{user.score}</Title>
          <h3 style={{ textAlign: "center" }}>Your current Score!</h3>
        </Card.Section>
      </Card>
        <div className="profileLevel">
      <StatsRing
        data={[
          {
            label: "You are currently Level",
            stats: berechneLevel(user.score),
            progress: berechneFortschritt(user.score),
            color: "green",
            icon: "up",
          },
        ]}
        />
        </div>
    </React.Fragment>
  );
}

export default Profile;
