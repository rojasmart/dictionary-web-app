import PropTypes, { useEffect, useState } from "react";
import {
  Stack,
  Text,
  Box,
  Flex,
  Divider,
  UnorderedList,
  ListItem,
  HStack,
  Icon,
} from "@chakra-ui/react";
import PlayAudio from "./PlayAudio";
import { ExternalLinkIcon } from "@chakra-ui/icons";
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

  return (
    <Stack pt={10} pb={10} flexDirection={"column"}>
      {searchTerm && data && !error && (
        <>
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
            <PlayAudio data={data} />
          </Flex>
          <Stack mt={6}>
            <Flex gap={6}>
              <Text fontSize="xl" fontStyle="italic" fontWeight="bold">
                {data[0].meanings[0].partOfSpeech}
              </Text>
              <Divider orientation="horizontal" alignSelf={"center"} />
            </Flex>
            <Flex mt={6} flexDirection={"column"}>
              <Text sx={{ color: "var(--gray)" }}>Meaning</Text>
              <UnorderedList>
                {data[0].meanings[0].definitions.map((definition, index) => (
                  <ListItem key={index} mt={4}>
                    {definition.definition}
                  </ListItem>
                ))}
              </UnorderedList>
              <HStack mt={6}>
                <Text sx={{ color: "var(--gray)" }} mr={6}>
                  Synonyms
                </Text>
                <HStack gap={4}>
                  {data[0].meanings[0].synonyms.map((synonym, index) => (
                    <Text key={index} as={"b"} color={"purple"}>
                      {synonym}
                    </Text>
                  ))}
                </HStack>
              </HStack>
            </Flex>
            <Flex gap={6} mt={6}>
              <Text fontSize="xl" fontStyle="italic" fontWeight="bold">
                {data[0].meanings[1].partOfSpeech}
              </Text>
              <Divider orientation="horizontal" alignSelf={"center"} />
            </Flex>
            <Flex mt={6} flexDirection={"column"}>
              <Text sx={{ color: "var(--gray)" }}>Meaning</Text>
              <UnorderedList>
                {data[0].meanings[1].definitions.map((definition, index) => (
                  <ListItem key={index} mt={4}>
                    {definition.definition}
                    <Text
                      mt={4}
                      sx={{ color: "var(--gray)" }}
                    >{`"${definition.example}"`}</Text>
                  </ListItem>
                ))}
              </UnorderedList>
            </Flex>
            <Divider mt={6} orientation="horizontal" alignSelf={"center"} />
            <Flex mt={2} gap={2}>
              <Text>Source</Text>
              <Text>https://en.wiktionary.org/wiki/keyboard</Text>
              <Icon as={ExternalLinkIcon} />
            </Flex>
          </Stack>
        </>
      )}
      {searchTerm && error && (
        <Stack mt={4} textAlign={"center"}>
          <Text sx={{ fontSize: "50px" }}>&#128532;</Text>
          <Text fontSize="2xl" as={"b"}>
            {error.response.data.title}
          </Text>
          <Text>
            {error.response.data.message} {error.response.data.resolution}
          </Text>
        </Stack>
      )}
      {searchTerm === false && (
        <Stack mt={4} textAlign={"center"}>
          <Text color={"red"}>Whoops, can’t be empty…</Text>
        </Stack>
      )}
    </Stack>
  );
};

export default Content;

Content.propTypes = {
  searchTerm: PropTypes.string,
};
