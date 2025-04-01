import { useState } from "react";
import { Button, HStack, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, Input, VStack } from "@chakra-ui/react";

const Login = ({ onLogin }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => {
    setIsOpen(false);
    setIsRegistering(false);
    setUsername("");
    setPassword("");
  };

  const handleSubmit = () => {
    if (isRegistering) {
      console.log("Registering new user:", { username, password });
      // Add logic to register the user
    } else {
      console.log("Logging in user:", { username, password });
      onLogin(username, password); // Pass login details to parent
    }
    handleClose();
  };

  return (
    <>
      <HStack justifyContent="flex-end" w="100%">
        <Button onClick={handleOpen} colorScheme="blue">
          Login
        </Button>
      </HStack>

      <Modal isOpen={isOpen} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{isRegistering ? "Register" : "Login"}</ModalHeader>
          <ModalBody>
            <VStack spacing={4}>
              <Input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
              <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={handleSubmit}>
              {isRegistering ? "Register" : "Login"}
            </Button>
            <Button variant="ghost" onClick={handleClose} ml={3}>
              Cancel
            </Button>
            <Button variant="link" onClick={() => setIsRegistering(!isRegistering)} ml={3}>
              {isRegistering ? "Already have an account?" : "Create an account"}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Login;
