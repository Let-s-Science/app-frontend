import { Box, Navbar, ScrollArea } from "@mantine/core";
import React from "react";
import NavbarIcons from "./NavbarIcons";
import { NavbarLinks } from "./NavbarLinks";

const NavbarContent = () => {
  return (
    <>
      <Navbar height={600} withBorder={false}>
        <Navbar.Section grow component={ScrollArea} mx="-xs" px="xs">
          <NavbarLinks />
        </Navbar.Section>
        <Navbar.Section>
          <NavbarIcons />
          {/* Todo: Logout */}
        </Navbar.Section>
      </Navbar>
    </>
  );
};

export default NavbarContent;
