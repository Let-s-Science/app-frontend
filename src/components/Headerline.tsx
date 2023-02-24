import {
  createStyles,
  Header,
  Group,
  Drawer,
  ActionIcon,
  Center,
} from "@mantine/core";
import { IconMenu2 } from "@tabler/icons";
import { useState } from "react";
import Logo from "./Logo";
import NavbarContent from "./NavbarContent";

const useStyles = createStyles((theme) => ({
  header: {
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
  },

  inner: {
    height: 56,
    padding: 8,
  },

  links: {
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  search: {
    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },
}));

const HeaderSearch = () => {
  const [opened, setOpened] = useState(false);
  const { classes } = useStyles();

  return (
    <>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title="Menu"
        padding="xl"
        size="md"
        zIndex="1002"
      >
        <NavbarContent setOpened={setOpened} />
      </Drawer>
      <Header height={56} className={classes.header} id="header">
        <div className={classes.inner}>
          <Group style={{ width: "100%" }} position="apart">
            <ActionIcon
              size="lg"
              radius="xs"
              variant="transparent"
              onClick={() => setOpened(true)}
            >
              <IconMenu2 size={26} />
            </ActionIcon>
            <Logo />
          </Group>
        </div>
      </Header>
    </>
  );
};
export default HeaderSearch;
