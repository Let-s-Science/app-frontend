import {
  Group,
  Switch,
  Title,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { IconMoonStars, IconSun } from "@tabler/icons";

const Settings = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();
  return (
    <>
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
           <Center>
      <Link to="/logout">
      <Button>
        <IconLogout></IconLogout>
            Logout
      </Button>
      </Link>
     </Center>
    </>
  );
};

export default Settings;