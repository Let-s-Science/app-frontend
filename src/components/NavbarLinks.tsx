import React from "react";
import {
  IconGitPullRequest,
  IconAlertCircle,
  IconMessages,
  IconDatabase,
  IconSettings,
  IconShield,
  IconHeadset,
  IconLink,
} from "@tabler/icons";
import { ThemeIcon, UnstyledButton, Group, Text } from "@mantine/core";

interface MainLinkProps {
  icon: React.ReactNode;
  color: string;
  label: string;
}

function MainLink({ icon, color, label }: MainLinkProps) {
  return (
    <UnstyledButton
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
    >
      <Group>
        <ThemeIcon color={color} variant="light">
          {icon}
        </ThemeIcon>

        <Text size="sm">{label}</Text>
      </Group>
    </UnstyledButton>
  );
}

const data = [
  { icon: <IconSettings size={16} />, color: "teal", label: "Settings" },
  { icon: <IconHeadset size={16} />, color: "violet", label: "Contact us" },
  { icon: <IconLink size={16} />, color: "violet", label: "Our Website" },
  { icon: <IconShield size={16} />, color: "grape", label: "Privacy policy" },
];

export function NavbarLinks() {
  const links = data.map((link) => <MainLink {...link} key={link.label} />);
  return <div>{links}</div>;
}
