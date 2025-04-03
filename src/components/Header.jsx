import { HStack, Center, Divider, Button, Select } from "@chakra-ui/react";
import PropTypes from "prop-types";
import IconHeader from "../../public/images/logo.svg";
import Toggle from "../components/Toggle";
import SwitchLang from "../components/SwitchLang";

const Header = ({ randomWord, isLoading, loginComponent, selectedLanguage, onLanguageChange }) => {
  const languages = [
    { code: "es", name: "Spanish" },
    { code: "fr", name: "French" },
    { code: "de", name: "German" },
    { code: "it", name: "Italian" },
    { code: "pt", name: "Portuguese" },
  ];

  return (
    <HStack minH={"50px"} pt={10} pb={10} justifyContent={"space-between"}>
      <img src={IconHeader} alt="Dictionary Logo" />
      <HStack spacing={4}>
        <Select cursor="pointer" width="150px" value={selectedLanguage} onChange={(e) => onLanguageChange(e.target.value)}>
          {languages.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.name}
            </option>
          ))}
        </Select>
        <Center height="50px">
          <Divider orientation="vertical" />
        </Center>
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
