import { Challenge } from "@lets-science/letsscience-client";
import {
  Button,
  Group,
  Loader,
  Space,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import { useClient } from "../hooks/useClient";

const ChallengeView = () => {
  const { id } = useParams();
  const client = useClient();
  const [challenge, setChallenge] = useState<Challenge | null>(null);
  const [started, setStarted] = useState<boolean | null>(null);

  if (id === undefined) {
    return <></>;
  }

  useEffect(() => {
    client.challenge.getApiChallenge(id).then((resp) => setChallenge(resp));
  }, []);

  if (challenge === null) {
    return <Loader />;
  }

  const startChallenge = (id: string) => {
    setStarted(false);
    client.challenge
      .postApiChallengeProgress(id, {
        progress: 0,
      })
      .then(() => setStarted(true));
  };

  if (started === true) {
    return <Navigate to="/challenges" />;
  }

  return (
    <Stack>
      <Title>{challenge.title}</Title>
      <Text>{challenge.description}</Text>
      <Group position="right" mt="xl">
        <Button component={Link} to="/challenges" variant="outline">
          Go Back
        </Button>
        <Button loading={started === false} onClick={() => startChallenge(id)}>
          Start Challenge
        </Button>
      </Group>
    </Stack>
  );
};

export default ChallengeView;
