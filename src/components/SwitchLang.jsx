import { useState, useEffect } from "react";
import { Stack, Select } from "@chakra-ui/react";

const SwitchLang = () => {
  const [font, setFont] = useState("Inconsolata");

  useEffect(() => {
    document.body.className = `font-${font.toLowerCase()}`;
  }, [font]);

  const handleFontChange = (e) => {
    setFont(e.target.value);
  };

  return (
    <Stack>
      <Select cursor="pointer" value={font} onChange={handleFontChange}>
        <option value="Inter">Sans Serif</option>
        <option value="Lora">Serif</option>
        <option value="Inconsolata">Mono</option>
      </Select>
    </Stack>
  );
};

export default SwitchLang;
