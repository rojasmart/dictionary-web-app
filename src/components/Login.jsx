import { useState } from "react";
import {
  Button,
  HStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  VStack,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";

const Login = ({ user, onLogin, onLogout }) => {
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

  if (user) {
    // Render avatar when user is logged in
    return (
      <Menu>
        <MenuButton>
          <Avatar name={user} size="sm" />
        </MenuButton>
        <MenuList>
          <MenuItem onClick={onLogout}>Logout</MenuItem>
        </MenuList>
      </Menu>
    );
  }

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
