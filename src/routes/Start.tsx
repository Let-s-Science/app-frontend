import { User } from "@lets-science/letsscience-client";
import React, { useEffect, useState } from "react";
import { StatsRing } from "../components/StatsRing";
import { useClient } from "../hooks/useClient";
import { berechneFortschritt, berechneLevel } from "../util";
import { Box, Card, Title } from "@mantine/core";

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
      <Card shadow="sm" p="lg" radius="md" withBorder>
        <Card.Section>
          <br />
          <Title>{user.score}</Title>
          <h3 style={{ textAlign: "center" }}>Your current Score!</h3>
        </Card.Section>
      </Card>
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
      <h2>Your Challenges</h2>
      {/* <br></br> */}
      <h2>Your Quiz</h2>

      <h2>Contact us!</h2>
    </React.Fragment>
  );
}

export default Start;
