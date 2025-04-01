import PropTypes from "react";
import { Stack, Text, Box, Flex, Divider, UnorderedList, ListItem, HStack, Icon, Tooltip, Button } from "@chakra-ui/react";
import PlayAudio from "./PlayAudio";
import { ExternalLinkIcon, StarIcon } from "@chakra-ui/icons";

const Content = ({ searchTerm, data, error, user, onAddToFavorites, favoriteWords = [] }) => {
  const isWordFavorited = favoriteWords.includes(searchTerm);

  return (
    <>
      {data && data.length > 1 && (
        <Stack textAlign={"left"}>
          <Text color={"red"} as={"i"}>
            There is more than one meaning for this word
          </Text>
        </Stack>
      )}
      <Stack pt={10} pb={10} flexDirection={"column"}>
        {searchTerm && data && !error && (
          <>
            <Flex justifyContent={"space-between"} flex={"auto"}>
              <Box>
                <HStack spacing={4}>
                  <Text fontSize="5xl" as={"b"}>
                    {searchTerm}
                  </Text>
                  {user && (
                    <Tooltip label={isWordFavorited ? "Remove from favorites" : "Add to favorites"}>
                      <Button
                        onClick={() => onAddToFavorites(searchTerm)}
                        size="sm"
                        colorScheme={isWordFavorited ? "pink" : "gray"}
                        leftIcon={<StarIcon />}
                      >
                        {isWordFavorited ? "Favorited" : "Favorite"}
                      </Button>
                    </Tooltip>
                  )}
                </HStack>
                <Stack>
                  {data[0].phonetic && (
                    <Text fontSize="lg" color={"purple"}>
                      {data[0].phonetic}
                    </Text>
                  )}
                </Stack>
              </Box>
              <PlayAudio data={data} />
            </Flex>
            <Stack mt={6}>
              {data[0].meanings && data[0].meanings[0] && (
                <>
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
                          {definition.example && <Text mt={4} sx={{ color: "var(--gray)" }}>{`"${definition.example}"`}</Text>}
                        </ListItem>
                      ))}
                    </UnorderedList>
                    {data[0].meanings[0].synonyms && data[0].meanings[0].synonyms.length > 0 && (
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
                    )}
                  </Flex>
                </>
              )}

              {/* Only render second meaning if it exists */}
              {data[0].meanings && data[0].meanings[1] && (
                <>
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
                          {definition.example && <Text mt={4} sx={{ color: "var(--gray)" }}>{`"${definition.example}"`}</Text>}
                        </ListItem>
                      ))}
                    </UnorderedList>
                  </Flex>
                </>
              )}

              <Divider mt={6} orientation="horizontal" alignSelf={"center"} />
              <Flex mt={2} gap={2}>
                <Text>Source</Text>
                {data[0].sourceUrls && data[0].sourceUrls[0] ? (
                  <>
                    <Text>{data[0].sourceUrls[0]}</Text>
                    <Icon as={ExternalLinkIcon} />
                  </>
                ) : (
                  <Text>https://en.wiktionary.org/wiki/{searchTerm}</Text>
                )}
              </Flex>
            </Stack>
          </>
        )}
        {searchTerm && error && (
          <Stack mt={4} textAlign={"center"}>
            <Text sx={{ fontSize: "50px" }}>&#128532;</Text>
            <Text fontSize="2xl" as={"b"}>
              {error.response?.data?.title || "Word not found"}
            </Text>
            <Text>
              {error.response?.data?.message || "Sorry, we couldn't find definitions for this word."}{" "}
              {error.response?.data?.resolution || "Please check your spelling or try another word."}
            </Text>
          </Stack>
        )}
        {searchTerm === false && (
          <Stack mt={4} textAlign={"center"}>
            <Text color={"red"}>Whoops, can't be empty…</Text>
          </Stack>
        )}
      </Stack>
    </>
  );
};

export default Content;

Content.propTypes = {
  searchTerm: PropTypes.string,
};
