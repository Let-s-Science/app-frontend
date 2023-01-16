import { ActionIcon } from "@mantine/core";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTiktok,
} from "@tabler/icons";
import React from "react";

function NavbarIcons() {
  return (
    <React.Fragment>
      <ActionIcon component="a" href="/">
        <IconBrandFacebook />
      </ActionIcon>
      <ActionIcon
        component="a"
        href="https://www.instagram.com/letsscience.eu/"
      >
        <IconBrandInstagram />
      </ActionIcon>
      <ActionIcon component="a" href="https://www.tiktok.com/@letsscience.eu">
        <IconBrandTiktok />
      </ActionIcon>
    </React.Fragment>
  );
}

export default NavbarIcons;
