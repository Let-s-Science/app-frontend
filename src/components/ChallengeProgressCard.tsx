import { Challenge, UserChallenge } from "@lets-science/letsscience-client"
import { Badge, Card, Group, Progress, Text } from "@mantine/core"

interface ChallengeProgressCardProps {
    chall: Challenge,
    user_chall: UserChallenge
}

const ChallengeProgressCard = ({chall, user_chall}: ChallengeProgressCardProps) => {
    return <Card withBorder radius="md">
        <Group position="right">
            <Badge>12 days left</Badge>
        </Group>

        <Text size="lg" weight={500} mt="md">
            {chall.title}
        </Text>

        <Text color="dimmed" size="sm" mt="md">
            {chall.description}
        </Text>

        <Progress value={(user_chall.progress / chall.goal) * 100} mt={5} />
    </Card>
}

export default ChallengeProgressCard