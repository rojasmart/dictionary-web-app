import PropTypes from "react";
import { Stack, Text, Box } from "@chakra-ui/react";
import PlayAudio from "./PlayAudio";

const Content = ({ searchTerm }) => {
  return (
    <Stack
      pt={10}
      pb={10}
      flexDirection={"row"}
      justifyContent={"space-between"}
    >
      <Box>
        <Text fontSize="5xl" as={"b"}>
          {searchTerm}
        </Text>
        {searchTerm && (
          <Text fontSize="lg" color={"purple"}>
            Search for something
          </Text>
        )}
      </Box>
      <PlayAudio />
    </Stack>
  );
};

export default Content;

Content.propTypes = {
  searchTerm: PropTypes.string,
};
