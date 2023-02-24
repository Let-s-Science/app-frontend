import {
  ActionIcon,
  Button,
  Center,
  ColorScheme,
  Group,
  Switch,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import { IconLogout, IconMoonStars, IconSun } from "@tabler/icons";
import React from "react";
import { Link } from "react-router-dom";

function Settings() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();
  return (
    <React.Fragment>
      <h1>Settings</h1>
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
    </React.Fragment>
  );
  return <></>;
}

export default Settings;
