import { useColorMode } from "@chakra-ui/color-mode";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Switch, HStack } from "@chakra-ui/react";
import { useState } from "react";

const Toggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
    toggleColorMode();
  };

  return (
    <HStack>
      <Switch
        isChecked={isChecked}
        onChange={handleToggle}
        colorScheme="purplei"
      />
      {colorMode === "dark" ? (
        <SunIcon color="orange.200" />
      ) : (
        <MoonIcon color="blue.700" />
      )}
    </HStack>
  );
};

export default Toggle;
