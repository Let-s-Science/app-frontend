import { ActionIcon, Paper } from "@mantine/core";
import { IconHome, IconTargetArrow, IconUser } from "@tabler/icons";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Paper component="div" className="footer">
      <ActionIcon component={Link} to="/" size="lg" radius="xl">
        <IconHome size={26} />
      </ActionIcon>
      <Link to="/challenges">
        <ActionIcon size="lg" radius="xl" variant="transparent">
          <IconTargetArrow size={26} />
        </ActionIcon>
      </Link>
      <Link to="/profile">
        <ActionIcon size="lg" radius="xl" variant="transparent">
          <IconUser size={26} />
        </ActionIcon>
      </Link>
    </Paper>
  );
}

export default Footer;
