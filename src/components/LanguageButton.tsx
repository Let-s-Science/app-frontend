import { Button, Menu, Text } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons";
import { DEFlag, DKFlag, ESFlag, GBFlag, GEFlag } from "mantine-flagpack";

const LanguageButton = () => {
  return (
    <Menu
      transition="pop-top-right"
      position="top-end"
      width={220}
      withinPortal
    >
      <Menu.Target>
        <Button rightIcon={<IconChevronDown size={18} stroke={1.5} />} pr={12}>
          Language
        </Button>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item icon={<GBFlag w={17} />}>English</Menu.Item>
        <Menu.Item icon={<ESFlag w={17} />}>Spanish</Menu.Item>
        <Menu.Item icon={<DKFlag w={17} />}>Danish</Menu.Item>
        <Menu.Item icon={<DEFlag w={17} />}>German</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default LanguageButton;
