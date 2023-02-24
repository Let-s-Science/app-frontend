import { Challenge } from "@lets-science/letsscience-client";
import { Badge, Card, Group, Text } from "@mantine/core";
import Logo from "./Logo";

interface ChallengeCardProps {
  challenge: Challenge;
  colorMap: Record<string, string>;
}

const ChallengeCard = ({ challenge, colorMap }: ChallengeCardProps) => {
  return (
    <Card withBorder radius="md">
      <Group position="apart">
        <Logo />
        <Badge color={colorMap[challenge.category]}>{challenge.category}</Badge>
      </Group>
      <Text size="lg" weight={500}>
        {challenge.title}
      </Text>
      <Text size="sm" color="dimmed" mt={5}>
        {challenge.description}
      </Text>
    </Card>
  );
};

export default ChallengeCard;
