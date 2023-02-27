import { Challenge, UserChallenge } from "@lets-science/letsscience-client";
import { Carousel } from "@mantine/carousel";
import { Loader } from "@mantine/core";
import { useEffect, useState } from "react";
import { useClient } from "../hooks/useClient";
import { isDone } from "../utils/challenge";
import ChallengeProgressCard from "./ChallengeProgressCard";

const ChallengeProgressCarousel = () => {
  const client = useClient();

  const [challenges, setChallenges] = useState<Challenge[] | null>(null);
  const [userChallenges, setUserChallenges] = useState<UserChallenge[] | null>(
    null
  );

  useEffect(() => {
    client.challenge.getApiChallenges().then((resp) => {
      setChallenges(resp);
    });

    client.challenge.getApiChallengesSelf().then((resp) => {
      setUserChallenges(resp);
    });
  }, []);

  if (challenges === null || userChallenges === null) {
    return <Loader />;
  }

  const combinedChallenges = userChallenges
    .map((uch) => ({
      userChallenge: uch,
      challenge: challenges.find((x) => x.id === uch.challenge_id)!,
    }))
    .filter(
      ({ challenge, userChallenge }) => !isDone(challenge, userChallenge)
    );

  return (
    <Carousel
      slideSize="70%"
      slideGap="md"
      styles={{
        control: {
          "&[data-inactive]": {
            opacity: 0,
            cursor: "default",
          },
        },
      }}
    >
      {combinedChallenges.map(({ userChallenge, challenge }, index) => (
        <Carousel.Slide key={index}>
          <ChallengeProgressCard user_chall={userChallenge} chall={challenge} />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};

export default ChallengeProgressCarousel;
