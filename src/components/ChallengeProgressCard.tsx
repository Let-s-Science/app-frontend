import {
  Challenge,
  ChallengeType,
  UserChallenge,
} from "@lets-science/letsscience-client";
import { Badge, Card, Group, Progress, Text } from "@mantine/core";

interface ChallengeProgressCardProps {
  chall: Challenge;
  user_chall: UserChallenge;
}

const ChallengeProgressCard = ({
  chall,
  user_chall,
}: ChallengeProgressCardProps) => {
  const progress = (user_chall.progress / chall.goal) * 100;
  return (
    <Card withBorder radius="md">
      {chall.type === ChallengeType.DAILY_CHALLENGE && (
        <Group position="right">
          <Badge>{chall.goal - user_chall.progress} days left</Badge>
        </Group>
      )}
      {chall.type === ChallengeType.COUNTER && (
        <Group position="right">
          <Badge>{Math.round(progress)}% done</Badge>
        </Group>
      )}

      <Text size="lg" weight={500} mt="md">
        {chall.title}
      </Text>

      <Text color="dimmed" size="sm" mt="md">
        {chall.description}
      </Text>

      <Progress value={progress} mt={5} />
    </Card>
  );
};

export default ChallengeProgressCard;
