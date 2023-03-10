import { User } from "@lets-science/letsscience-client";
import { useEffect, useState } from "react";
import { StatsRing } from "../components/StatsRing";
import { useClient } from "../hooks/useClient";
import { berechneFortschritt, berechneLevel } from "../util";
import { Card, Stack, Title } from "@mantine/core";
import ChallengeProgressCarousel from "../components/ChallengeProgressCarousel";

const Start = () => {
  const client = useClient();
  const [user, setUser] = useState<User | null>(null);

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
    return <p>Couldn't load data</p>;
  }

  return (
    <Stack spacing="xl">
      <div>
        <Title order={1}>Welcome back, {user.name}</Title>
        <Stack>
          <Card shadow="sm" p="lg" radius="md" withBorder>
            <Card.Section>
              <br />
              <Title>{user.score}</Title>
              <Title order={3} style={{ textAlign: "center" }}>
                Your current Score!
              </Title>
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
        </Stack>
      </div>
      <Title order={2}>Your Challenges</Title>
      <ChallengeProgressCarousel />
      <Title order={2}>Your Quiz</Title>
      <Title order={2}>Contact us!</Title>
    </Stack>
  );
};

export default Start;
