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
  Alert,
} from "@mantine/core";
import { IconAlertCircle } from "@tabler/icons";
import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import { useClient } from "../hooks/useClient";

const oneDayAgo = (date: Date): boolean => {
  const day = 1000 * 60 * 60 * 24;
  const dayAgo = Date.now() - day;

  // @ts-ignore
  return date > dayAgo;
};

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

  const updated_at = new Date(
    challengeProgress.updated_at ?? new Date(1995, 11, 17, 3, 24, 0)
  );
  const showChallengeAlert =
    challenge.type === ChallengeType.DAILY_CHALLENGE && oneDayAgo(updated_at);

  return (
    <Stack align="center">
      <Title>{challenge.title}</Title>
      <Text>{challenge.description}</Text>
      {challenge.type === ChallengeType.COUNTER && (
        <NumberInput value={progress} onChange={(e) => setProgress(e ?? 0)} />
      )}
      {showChallengeAlert && (
        <Alert
          icon={<IconAlertCircle size={16} />}
          title="Can't submit progress today"
        >
          This challenge has already been completed today. Come back tomorrow!
        </Alert>
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
        {challenge.type === ChallengeType.DAILY_CHALLENGE &&
          !showChallengeAlert && (
            <Button
              loading={submitted === false}
              onClick={() => addProgress(1)}
            >
              Add Progress
            </Button>
          )}
      </Stack>
    </Stack>
  );
};

export default ChallengeProgress;
