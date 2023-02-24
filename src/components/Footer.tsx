import { ActionIcon } from "@mantine/core";
import { IconHome, IconTargetArrow, IconUser } from "@tabler/icons";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <ActionIcon
        component="a"
        href="/"
        size="lg"
        radius="xl"
        variant="transparent"
      >
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
    </div>
  );
}

export default Footer;
