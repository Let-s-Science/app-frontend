import {
  Button,
  Center,
  Group,
  Stack,
  Switch,
  Title,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { IconLogout, IconMoonStars, IconSun } from "@tabler/icons";
import { Link } from "react-router-dom";
import LanguageButton from "../components/LanguageButton";

const Settings = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();
  return (
    <Stack align="center">
      <Title order={1}>Settings</Title>
      <Group position="center" my={30}>
        <Switch
          checked={colorScheme === "dark"}
          onChange={() => toggleColorScheme()}
          size="lg"
          onLabel={<IconSun color={theme.white} size={20} stroke={1.5} />}
          offLabel={
            <IconMoonStars
              color={theme.colors.gray[6]}
              size={20}
              stroke={1.5}
            />
          }
        />
      </Group>
      <Link to="/logout">
        <Button>
          <Group position="apart">
            <IconLogout />
            Logout
          </Group>
        </Button>
      </Link>
      <LanguageButton />
    </Stack>
  );
};

export default Settings;
