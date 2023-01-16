import { Box, Group, ActionIcon, Navbar, ScrollArea } from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons";
import React from "react";
import NavbarIcons from "./NavbarIcons";
import { NavbarLinks } from "./NavbarLinks";

function NavbarContent() {
  return (
    <React.Fragment>
      <Navbar height={600} p="xs" width={{ base: 300 }}>
        {/* <Navbar.Section mt="xs">
            <Brand />
          </Navbar.Section> */}
        <Navbar.Section grow component={ScrollArea} mx="-xs" px="xs">
          <Box py="md">
            <NavbarLinks />
          </Box>
        </Navbar.Section>
        <Navbar.Section>
          <Box py="md" className="socialLinks">
            <NavbarIcons />
          </Box>
          {/* Todo: Logout */}
        </Navbar.Section>
      </Navbar>
    </React.Fragment>
  );
}

export default NavbarContent;
