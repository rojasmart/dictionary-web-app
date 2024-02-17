import { HStack, Center, Divider } from "@chakra-ui/react";
import IconHeader from "../../public/images/logo.svg";
import Toggle from "../components/Toggle";
import SwitchLang from "../components/SwitchLang";

const Header = () => {
  return (
    <HStack minH={"50px"} pt={10} pb={10} justifyContent={"space-between"}>
      <img src={IconHeader} />
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
