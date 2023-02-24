import { Challenge } from "@lets-science/letsscience-client";
import { Badge, Card, Group, Text } from "@mantine/core";

const ChallengeCard = (ch: Challenge) => {
  return (
    <Card withBorder radius="md">
      <Text size="lg" weight={500} mt="md">
        {ch.title}
      </Text>
      <Text size="sm" color="dimmed" mt={5}>
        {ch.description}
      </Text>
    </Card>
  );
};

export default ChallengeCard;
