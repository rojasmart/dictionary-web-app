import PropTypes, { useEffect, useState } from "react";
import { Stack, Text, Box } from "@chakra-ui/react";
import PlayAudio from "./PlayAudio";
import { fetchData } from "../api";

const Content = ({ searchTerm }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      if (searchTerm) {
        const result = await fetchData(searchTerm);
        setData(result);
      }
    };
    getData();
  }, [searchTerm]);

  console.log(data);

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
