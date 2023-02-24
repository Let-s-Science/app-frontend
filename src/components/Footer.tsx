import { ActionIcon, Center, Group, Paper } from "@mantine/core";
import { IconHome, IconTargetArrow, IconUser } from "@tabler/icons";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Paper component="div" className="footer">
      <ActionIcon component={Link} to="/" size="lg" radius="xl">
        <IconHome size={26} />
      </ActionIcon>
      <ActionIcon
        component={Link}
        to="/challenges"
        size="lg"
        radius="xl"
        variant="transparent"
      >
        <IconTargetArrow size={26} />
      </ActionIcon>
      <ActionIcon
        component={Link}
        to="/profile"
        size="lg"
        radius="xl"
        variant="transparent"
      >
        <IconUser size={26} />
      </ActionIcon>
    </Paper>
  );
}

export default Footer;
