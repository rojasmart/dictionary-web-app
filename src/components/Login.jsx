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
  Text,
} from "@chakra-ui/react";

import FavoriteWords from "./FavoriteWords";

const Login = ({ user, onLogin, onLogout, favoriteWords = [], onSelectWord }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);
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
    if (!username || !password) {
      console.error("Username and password are required");
      return;
    }

    try {
      if (isRegistering) {
        // Store new user in localStorage
        const users = JSON.parse(localStorage.getItem("users") || "{}");
        users[username] = { password };
        localStorage.setItem("users", JSON.stringify(users));
        console.log("User registered successfully");
      }

      // Verify login
      const users = JSON.parse(localStorage.getItem("users") || "{}");
      if (!users[username] || users[username].password !== password) {
        console.error("Invalid username or password");
        return;
      }

      // Call onLogin function passed from parent
      onLogin(username, password);
    } catch (error) {
      console.error("Login error:", error);
    }

    handleClose();
  };

  if (user) {
    return (
      <>
        <Menu>
          <MenuButton>
            <HStack spacing={2}>
              <Avatar name={user} size="sm" />
              <Text>{user}</Text>
            </HStack>
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => setShowFavorites(true)}>Favorite Words ({favoriteWords.length})</MenuItem>
            <MenuItem onClick={onLogout}>Logout</MenuItem>
          </MenuList>
        </Menu>

        {showFavorites && (
          <FavoriteWords isOpen={showFavorites} onClose={() => setShowFavorites(false)} favoriteWords={favoriteWords} onSelectWord={onSelectWord} />
        )}
      </>
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
              <Input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
              <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
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
