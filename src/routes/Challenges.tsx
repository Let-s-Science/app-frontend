import { Challenge, UserChallenge } from "@lets-science/letsscience-client";
import { useEffect, useState } from "react";
import ChallengeCard from "../components/ChallengeCard";
import { useClient } from "../hooks/useClient";
import ChallengeProgressCard from "../components/ChallengeProgressCard";
import { Accordion, Grid } from "@mantine/core";
import colorMap from "../utils/colorMap";
import { useListState } from "@mantine/hooks";
import { isDone } from "../utils/challenge";

const getCategories = (challenges: Challenge[]) => {
  const l = [...new Set(challenges.flatMap((ch) => ch.category))];
  return l;
};

const Challenges = () => {
  const client = useClient();

  const [value, valueHandlers] = useListState<string>([]);
  const [challenges, setChallenges] = useState<Challenge[]>([]);
  const [userChallenges, setUserChallenges] = useState<UserChallenge[]>([]);
  const colors = colorMap(challenges);
  const categories = getCategories(challenges);

  useEffect(() => {
    client.challenge.getApiChallenges().then((resp) => {
      setChallenges(resp);
      valueHandlers.append(...getCategories(resp));
    });
    client.challenge.getApiChallengesSelf().then((resp) => {
      setUserChallenges(resp);
      valueHandlers.append("My Challenges");
    });
  }, []);

  const userChallengeList = userChallenges.map((userChallenge, key) => {
    const challenge = challenges.find(
      (x) => x.id === userChallenge.challenge_id
    );
    if (!challenge) {
      return;
    }
    if (isDone(challenge, userChallenge)) {
      return;
    }
    return (
      <Grid.Col span={6} key={key}>
        <ChallengeProgressCard chall={challenge} user_chall={userChallenge} />
      </Grid.Col>
    );
  });

  return (
    <Accordion style={{width: "97vw"}} multiple value={value} onChange={valueHandlers.setState}>
      {userChallengeList.length > 0 && (
        <Accordion.Item value="My Challenges">
          <Accordion.Control>{"My Challenges"}</Accordion.Control>
          <Accordion.Panel>
            <Grid>{userChallengeList}</Grid>
          </Accordion.Panel>
        </Accordion.Item>
      )}
      {categories.map((category, index) => (
        <Accordion.Item value={category} key={index}>
          <Accordion.Control>{category}</Accordion.Control>
          <Accordion.Panel>
            <Grid>
              {challenges
                .filter((x) => x.category === category)
                .filter(
                  (x) =>
                    userChallenges.filter((y) => y.challenge_id === x.id)
                      .length === 0
                )
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
  );
};

export default Challenges;
