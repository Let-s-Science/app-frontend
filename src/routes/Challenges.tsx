import { Challenge, UserChallenge } from "@lets-science/letsscience-client";
import React, { useEffect, useState } from "react";
import ChallengeCard from "../components/ChallengeCard";
import { useClient } from "../hooks/useClient";
import ChallengeProgressCard from "../components/ChallengeProgressCard";
import { Grid } from "@mantine/core";

function Challenges() {
  const client = useClient();
  const [challenges, setChallenges] = useState<Challenge[]>([]);
  const [userChallenges, setUserChallenges] = useState<UserChallenge[]>([]);

  useEffect(() => {
    client.challenge.getApiChallenges().then((resp) => setChallenges(resp));
    client.challenge
      .getApiChallengesSelf()
      .then((resp) => setUserChallenges(resp));
  }, []);

  return (
    <Grid grow>
      <>
        {challenges.map((ch, key) => (
          <Grid.Col span={4}>
            <ChallengeCard key={key} {...ch} />
          </Grid.Col>
        ))}

        {userChallenges.map((userChallenge, key) => {
          const challenge = challenges.find(
            (x) => x.id === userChallenge.challenge_id
          )!;
          <Grid.Col span={4}>
            <ChallengeProgressCard
              key={key}
              chall={challenge}
              user_chall={userChallenge}
            />
          </Grid.Col>;
        })}
      </>
    </Grid>
  );
}

export default Challenges;
