import { Challenge } from "@lets-science/letsscience-client";
import { Badge, Card, Group, Text } from "@mantine/core";
import { Link } from "react-router-dom";
import Logo from "./Logo";

interface ChallengeCardProps {
  challenge: Challenge;
  colorMap: Record<string, string>;
}

const ChallengeCard = ({ challenge, colorMap }: ChallengeCardProps) => {
  return (
    <Card
      withBorder
      radius="md"
      component={Link}
      to={`/challenge/${challenge.id}`}
    >
      <Group position="apart">
        {challenge.category === "CO2" && (
          <img src="../../public/blume_gold.svg"  height="54vh" width="54vh"/>
        )}
        {challenge.category === "Waste" &&(
        <img src="../../public/tonne_gold.svg" height="54vh" width="54vh"/>
        )}
        {challenge.category === "Water" &&(
        <img src="../../public/giesskanne_gold.svg"  height="54vh" width="54vh"/>
        )}
        {challenge.category === "Energy" &&(
        <img src="../../public/gluehbirne_gold.svg" height="54vh" width="54vh"/>
        )}
        <Badge color={colorMap[challenge.category]}>{challenge.category}</Badge>
      </Group>
      <Text size="lg" weight={500} mt="md">
        {challenge.title}
      </Text>
      <Text size="sm" color="dimmed" mt={5}>
        {challenge.description}
      </Text>
    </Card>
  );
};

export default ChallengeCard;
