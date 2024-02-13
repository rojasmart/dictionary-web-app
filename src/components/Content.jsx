import PropTypes, { useEffect, useState } from "react";
import { Stack, Text, Box, Flex } from "@chakra-ui/react";
import PlayAudio from "./PlayAudio";
import { fetchData } from "../api";

const Content = ({ searchTerm }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      if (searchTerm) {
        try {
          const result = await fetchData(searchTerm);
          setData(result);
          setError(null);
        } catch (error) {
          console.error(error);
          setError(error);
        }
      }
    };
    getData();
  }, [searchTerm]);

  console.log("data", data);
  console.log("error", error);

  return (
    <Stack
      pt={10}
      pb={10}
      flexDirection={"row"}
      justifyContent={"space-between"}
    >
      {searchTerm && data && !error && (
        <Flex justifyContent={"space-between"} flex={"auto"}>
          <Box>
            <Text fontSize="5xl" as={"b"}>
              {searchTerm}
            </Text>
            <Stack>
              <Text fontSize="lg" color={"purple"}>
                {data[0].phonetic}
              </Text>
            </Stack>
          </Box>
          <PlayAudio />
        </Flex>
      )}
      {searchTerm && error && (
        <Stack>
          <Text fontSize="5xl" as={"b"}>
            {error.response.data.title}
          </Text>
          <Text>{error.response.data.message}</Text>
        </Stack>
      )}
    </Stack>
  );
};

export default Content;

Content.propTypes = {
  searchTerm: PropTypes.string,
};
