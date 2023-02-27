import {
  Challenge,
  ChallengeType,
  UserChallenge,
} from "@lets-science/letsscience-client";
import {
  Loader,
  Stack,
  Title,
  Text,
  Button,
  Group,
  NumberInput,
  Container,
  Center,
} from "@mantine/core";
import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import { useClient } from "../hooks/useClient";

const ChallengeProgress = () => {
  const { id } = useParams();
  const client = useClient();
  const [challengeProgress, setChallengeProgress] =
    useState<UserChallenge | null>(null);
  const [challenge, setChallenge] = useState<Challenge | null>(null);
  const [submitted, setSubmitted] = useState<boolean | null>(null);
  const [progress, setProgress] = useState(0);

  if (id === undefined) {
    return <Navigate to="/challenges" />;
  }

  useEffect(() => {
    client.challenge
      .getApiChallengesSelf(id)
      .then((resp) => setChallengeProgress(resp[0]));
    client.challenge.getApiChallenge(id).then((resp) => setChallenge(resp));
  }, []);

  const addProgress = (progress: number) => {
    setSubmitted(false);
    client.challenge
      .postApiChallengeProgress(id, {
        progress,
      })
      .then(() => setSubmitted(true));
  };

  const cancelProgress = () => {
    client.challenge
      .deleteApiChallengeProgress(id)
      .then(() => setSubmitted(true));
  };

  if (challengeProgress === null || challenge === null) {
    return <Loader />;
  }

  if (submitted) {
    return <Navigate to="/challenges" />;
  }

  return (
    <Stack align="center">
      <Title>{challenge.title}</Title>
      <Text>{challenge.description}</Text>
      {challenge.type === ChallengeType.COUNTER && (
        <NumberInput value={progress} onChange={(e) => setProgress(e ?? 0)} />
      )}
      <Stack>
        <Group position="right" mt="xl">
          <Button component={Link} to="/challenges" variant="outline">
            Go Back
          </Button>
          <Button color="red" onClick={() => cancelProgress()}>
            Cancel Challenge
          </Button>
        </Group>
        {challenge.type === ChallengeType.COUNTER && (
          <Button
            loading={submitted === false}
            onClick={() => addProgress(progress)}
          >
            Add Progress
          </Button>
        )}
        {challenge.type === ChallengeType.DAILY_CHALLENGE && (
          <Button loading={submitted === false} onClick={() => addProgress(1)}>
            Add Progress
          </Button>
        )}
      </Stack>
    </Stack>
  );
};

export default ChallengeProgress;
