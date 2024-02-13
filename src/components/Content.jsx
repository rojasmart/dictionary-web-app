import PropTypes, { useEffect, useState } from "react";
import { Stack, Text, Box } from "@chakra-ui/react";
import PlayAudio from "./PlayAudio";
import { fetchData } from "../api";

const Content = ({ searchTerm }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      if (searchTerm) {
        try {
          const result = await fetchData(searchTerm);
          setData(result);
        } catch (error) {
          console.error(error);
        }
      }
    };
    getData();
  }, [searchTerm]);

  return (
    <Stack
      pt={10}
      pb={10}
      flexDirection={"row"}
      justifyContent={"space-between"}
    >
      <Box>
        {searchTerm && data && (
          <Stack>
            <Text fontSize="5xl" as={"b"}>
              {searchTerm}
            </Text>
            <Stack>
              <Text fontSize="lg" color={"purple"}>
                {data[0].phonetic}
              </Text>
            </Stack>
          </Stack>
        )}
        {searchTerm && !data && (
          <Text fontSize="2xl" as={"b"} color={"red"}>
            No results found for {searchTerm}
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
