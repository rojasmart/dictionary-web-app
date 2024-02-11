import { HStack, Icon } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import Toggle from "../components/Toggle";

const Header = () => {
  return (
    <HStack minH={"50px"} pt={10} pb={10} justifyContent={"space-between"}>
      <Icon as={EditIcon} w={8} h={8} />
      <Toggle />
    </HStack>
  );
};

export default Header;
