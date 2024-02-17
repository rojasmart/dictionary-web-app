import { useState } from "react";
import PropTypes from "prop-types";
import { Stack } from "@chakra-ui/react";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

const SearchInput = ({ onSearch }) => {
  const [border, setBorder] = useState(false);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      if (event.target.value !== "") {
        onSearch(event.target.value);
        setBorder(false);
      } else {
        onSearch(false);
        setBorder(true);
      }
    }
  };

  return (
    <Stack>
      <InputGroup borderRadius={5} size="sm">
        <InputRightElement pointerEvents="none" h={"100%"} mr={2}>
          <Search2Icon color="gray.600" key="search-icon" boxSize={4} />
        </InputRightElement>
        <Input
          type="text"
          p={7}
          placeholder="Search..."
          borderRadius={10}
          borderColor={border ? "red" : "#EDF2F7"}
          variant={"filled"}
          _focusVisible={{ background: "#EDF2F7" }}
          _focusWithin={{ borderColor: "black" }}
          onKeyDown={handleKeyDown}
        />
      </InputGroup>
    </Stack>
  );
};

export default SearchInput;

SearchInput.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
