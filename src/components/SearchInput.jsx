import { Stack } from "@chakra-ui/react";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

const SearchInput = () => {
  return (
    <Stack>
      <InputGroup borderRadius={5} size="sm">
        <InputRightElement pointerEvents="none" h={"100%"} mr={2}>
          <Search2Icon color="gray.600" key="search-icon" boxSize={4} />
        </InputRightElement>
        <Input type="text" p={7} placeholder="Search..." borderRadius={10} />
      </InputGroup>
    </Stack>
  );
};

export default SearchInput;
