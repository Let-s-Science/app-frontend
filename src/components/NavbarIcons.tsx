import { ActionIcon, Center, Group } from "@mantine/core";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTiktok,
} from "@tabler/icons";

interface NavbarIconsProps {
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavbarIcons = ({ setOpened }: NavbarIconsProps) => {
  const closeDrawer = () => setOpened(false);
  return (
    <>
    <Center>

    <Group>

      <ActionIcon component="a" href="https://www.facebook.com/letsscience.eu" onClick={closeDrawer}>
        <IconBrandFacebook />
      </ActionIcon>
      <ActionIcon
        component="a"
        href="https://www.instagram.com/letsscience.eu/"
        onClick={closeDrawer}
        >
        <IconBrandInstagram />
      </ActionIcon>
      <ActionIcon
        component="a"
        href="https://www.tiktok.com/@letsscience.eu"
        onClick={closeDrawer}
        >
        <IconBrandTiktok />
      </ActionIcon>
        </Group>
          </Center>
    </>
  );
};

export default NavbarIcons;
