import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, VStack, Text, Button, Box } from "@chakra-ui/react";
import PropTypes from "prop-types";

const FavoriteWords = ({ isOpen, onClose, favoriteWords = [], onSelectWord }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>My Favorite Words</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          {favoriteWords.length === 0 ? (
            <Text>No favorite words yet</Text>
          ) : (
            <VStack spacing={4} align="stretch">
              {favoriteWords.map((word) => (
                <Box key={word} p={3} borderWidth="1px" borderRadius="md" _hover={{ bg: "gray.50" }}>
                  <Button
                    variant="ghost"
                    w="100%"
                    justifyContent="flex-start"
                    onClick={() => {
                      onSelectWord(word);
                      onClose();
                    }}
                  >
                    {word}
                  </Button>
                </Box>
              ))}
            </VStack>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

FavoriteWords.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  favoriteWords: PropTypes.array.isRequired,
  onSelectWord: PropTypes.func.isRequired,
};

export default FavoriteWords;
