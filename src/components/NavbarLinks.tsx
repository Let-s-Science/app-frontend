import React from "react";
import { IconSettings, IconShield, IconHeadset, IconLink } from "@tabler/icons";
import { ThemeIcon, UnstyledButton, Group, Text } from "@mantine/core";
import { Link } from "react-router-dom";

interface MainLinkProps {
  icon: React.ReactNode;
  color: string;
  label: string;
  toLink: string;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const MainLink = ({ icon, color, label, toLink, setOpened }: MainLinkProps) => {
  return (
    <UnstyledButton
      component={Link}
      to={toLink}
      sx={(theme) => ({
        display: "block",
        width: "100%",
        padding: theme.spacing.xs,
        borderRadius: theme.radius.sm,
        color:
          theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,

        "&:hover": {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[6]
              : theme.colors.gray[0],
        },
      })}
      onClick={() => setOpened(false)}
    >
      <Group>
        <ThemeIcon color={color} variant="light">
          {icon}
        </ThemeIcon>

        <Text size="sm">{label}</Text>
      </Group>
    </UnstyledButton>
  );
};

const data = [
  {
    icon: <IconSettings size={16} />,
    color: "teal",
    label: "Settings",
    toLink: "/settings",
  },
  {
    icon: <IconHeadset size={16} />,
    color: "violet",
    label: "Contact us",
    toLink: "/contact-us",
  },
  {
    icon: <IconLink size={16} />,
    color: "violet",
    label: "Our Website",
    toLink: "https://www.letsscience.eu/",
  },
  {
    icon: <IconShield size={16} />,
    color: "grape",
    label: "Privacy policy",
    toLink: "/privacypolicy",
  },
];

interface NavbarLinksProps {
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NavbarLinks = ({ setOpened }: NavbarLinksProps) => {
  const links = data.map((link) => (
    <MainLink setOpened={setOpened} {...link} key={link.label} />
  ));
  return <div>{links}</div>;
};
