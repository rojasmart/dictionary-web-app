import { HStack, Center, Divider, Button } from "@chakra-ui/react";
import PropTypes from "prop-types";
import IconHeader from "../../public/images/logo.svg";
import Toggle from "../components/Toggle";
import SwitchLang from "../components/SwitchLang";

const Header = ({ randomWord, isLoading, loginComponent }) => {
  return (
    <HStack minH={"50px"} pt={10} pb={10} justifyContent={"space-between"}>
      <img src={IconHeader} alt="Dictionary Logo" />
      <HStack spacing={4}>
        <Button onClick={randomWord} colorScheme="teal" isLoading={isLoading}>
          Random Word
        </Button>
        <SwitchLang />
        <Center height="50px">
          <Divider orientation="vertical" />
        </Center>
        <Toggle />
        <Center height="50px">
          <Divider orientation="vertical" />
        </Center>
        {loginComponent}
      </HStack>
    </HStack>
  );
};

Header.propTypes = {
  randomWord: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  loginComponent: PropTypes.node,
};

Header.defaultProps = {
  isLoading: false,
  loginComponent: null,
};

export default Header;
