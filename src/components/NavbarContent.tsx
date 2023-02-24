import { Navbar, ScrollArea } from "@mantine/core";
import NavbarIcons from "./NavbarIcons";
import { NavbarLinks } from "./NavbarLinks";

interface NavbarContentProps {
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavbarContent = ({ setOpened }: NavbarContentProps) => {
  return (
    <>
      <Navbar height={600} withBorder={false}>
        <Navbar.Section grow component={ScrollArea} mx="-xs" px="xs">
          <NavbarLinks setOpened={setOpened} />
        </Navbar.Section>
        <Navbar.Section>
          <NavbarIcons setOpened={setOpened} />
          {/* Todo: Logout */}
        </Navbar.Section>
      </Navbar>
    </>
  );
};

export default NavbarContent;
