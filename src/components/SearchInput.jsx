import { Stack } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

const SearchInput = () => {
  return (
    <Stack>
      <Text>Search component</Text>
      <input type="text" placeholder="Search" />
    </Stack>
  );
};

export default SearchInput;
