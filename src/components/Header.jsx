import { HStack, Icon, Center, Divider } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import Toggle from "../components/Toggle";
import SwitchLang from "../components/SwitchLang";

const Header = () => {
  return (
    <HStack minH={"50px"} pt={10} pb={10} justifyContent={"space-between"}>
      <Icon as={EditIcon} w={8} h={8} />
      <HStack>
        <SwitchLang />
        <Center height="50px">
          <Divider orientation="vertical" />
        </Center>
        <Toggle />
      </HStack>
    </HStack>
  );
};

export default Header;
