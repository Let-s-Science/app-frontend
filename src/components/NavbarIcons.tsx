import { ActionIcon } from "@mantine/core";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTiktok,
} from "@tabler/icons";

const NavbarIcons = () => {
  return (
    <>
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
    </>
  );
};

export default NavbarIcons;
