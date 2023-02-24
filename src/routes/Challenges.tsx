import { Challenge, UserChallenge } from "@lets-science/letsscience-client";
import React, { useEffect, useState } from "react";
import ChallengeCard from "../components/ChallengeCard";
import { useClient } from "../hooks/useClient";
import ChallengeProgressCard from "../components/ChallengeProgressCard";
import { Accordion, Grid } from "@mantine/core";
import colorMap from "../utils/colorMap";

const getCategories = (challenges: Challenge[]) => {
  return [...new Set(challenges.flatMap((ch) => ch.category))];
};

function Challenges() {
  const client = useClient();

  const [value, setValue] = useState(["Water"]);
  const [challenges, setChallenges] = useState<Challenge[]>([]);
  const [userChallenges, setUserChallenges] = useState<UserChallenge[]>([]);
  const colors = colorMap(challenges);
  const categories = getCategories(challenges);

  useEffect(() => {
    client.challenge.getApiChallenges().then((resp) => {
      setChallenges(resp);
      setValue(getCategories(resp));
    });
    client.challenge
      .getApiChallengesSelf()
      .then((resp) => setUserChallenges(resp));
  }, []);

  const userChallengeList = userChallenges.map((userChallenge, key) => {
    const challenge = challenges.find(
      (x) => x.id === userChallenge.challenge_id
    )!;
    <Grid.Col span={6}>
      <ChallengeProgressCard
        key={key}
        chall={challenge}
        user_chall={userChallenge}
      />
    </Grid.Col>;
  });

  return (
    <>
      <Accordion multiple value={value} onChange={setValue}>
        {categories.map((category, index) => (
          <Accordion.Item value={category} key={index}>
            <Accordion.Control>{category}</Accordion.Control>
            <Accordion.Panel>
              <Grid>
                {challenges
                  .filter((x) => x.category === category)
                  .map((ch, key) => (
                    <Grid.Col span={6} key={key}>
                      <ChallengeCard challenge={ch} colorMap={colors} />
                    </Grid.Col>
                  ))}
              </Grid>
            </Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    </>
  );
}

export default Challenges;
