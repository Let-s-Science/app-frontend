import { Button } from "@mantine/core";
import React from "react";
import { ActionIcon } from "@mantine/core";
import { IconHome, IconTargetArrow, IconUser } from "@tabler/icons";

function Footer() {
  return (
    <div className="footer">
      {/* <a href="/"> */}
      <ActionIcon
        component="a"
        href="/"
        size="lg"
        radius="xl"
        variant="transparent"
      >
        <IconHome size={26} />
      </ActionIcon>
      {/* </a> */}
      <a href="/challenges">
        <ActionIcon size="lg" radius="xl" variant="transparent">
          <IconTargetArrow size={26} />
        </ActionIcon>
      </a>
      <a href="/profile">
        <ActionIcon size="lg" radius="xl" variant="transparent">
          <IconUser size={26} />
        </ActionIcon>
      </a>
    </div>
  );
}

export default Footer;
