import PropTypes from "prop-types";
import { useState } from "react";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import Content from "./components/Content";
import Login from "./components/Login";

import { Container, Box } from "@chakra-ui/react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const [favoriteWords, setFavoriteWords] = useState([]);
  const [searchHistory, setSearchHistory] = useState({});

  const fetchData = async (term) => {
    setError(null);
    try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${term}`);

      if (!response.ok) {
        throw new Error("Word not found");
      }

      const responseData = await response.json();
      setData(responseData);
      setSearchTerm(term);
    } catch (error) {
      console.error("Error fetching data:", error);
      setData(null);
      setError(error.message || "Failed to fetch word data");
    }
  };

  const handleSearch = async (term) => {
    if (term) {
      setIsLoading(true);
      try {
        await fetchData(term);
        if (user) {
          const userHistory = searchHistory[user] || [];
          const updatedHistory = [term, ...userHistory.filter((w) => w !== term)].slice(0, 10);
          setSearchHistory((prev) => ({
            ...prev,
            [user]: updatedHistory,
          }));
          // Store in localStorage
          localStorage.setItem(`history_${user}`, JSON.stringify(updatedHistory));
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleRandomWord = async () => {
    setIsLoading(true);
    setError(null);
    try {
      // Fetch a random word from the Random Word API
      const response = await fetch("https://random-word-api.herokuapp.com/word?number=1");
      if (!response.ok) {
        throw new Error("Failed to fetch a random word");
      }

      const [randomWord] = await response.json(); // API returns an array with one word
      await handleSearch(randomWord); // Use the random word to fetch its definition
    } catch (error) {
      console.error("Error fetching random word:", error);
      setError("Failed to fetch a random word");
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = (username, password) => {
    if (username && password) {
      // Store user data in localStorage
      localStorage.setItem("user", username);

      // Load favorite words from localStorage
      const storedFavorites = localStorage.getItem(`favorites_${username}`);
      // Load search history from localStorage
      const storedHistory = localStorage.getItem(`history_${username}`);

      setUser(username);
      if (storedFavorites) {
        setFavoriteWords(JSON.parse(storedFavorites));
      }
      if (storedHistory) {
        setSearchHistory((prev) => ({
          ...prev,
          [username]: JSON.parse(storedHistory),
        }));
      }
    }
  };

  const handleLogout = () => {
    // Save favorites to localStorage before logout
    if (user) {
      localStorage.setItem(`favorites_${user}`, JSON.stringify(favoriteWords));
      localStorage.setItem(`history_${user}`, JSON.stringify(searchHistory[user] || []));
    }
    setUser(null);
    setFavoriteWords([]);
  };

  const addToFavorites = (word) => {
    if (user && !favoriteWords.includes(word)) {
      const newFavorites = [...favoriteWords, word];
      setFavoriteWords(newFavorites);
      localStorage.setItem(`favorites_${user}`, JSON.stringify(newFavorites));
    }
  };

  const handleSelectWord = async (word) => {
    await handleSearch(word);
  };

  return (
    <>
      <Box position="relative">
        <Container maxW={"container.lg"}>
          <Header
            randomWord={handleRandomWord}
            isLoading={isLoading}
            loginComponent={
              <Login
                user={user}
                onLogin={handleLogin}
                onLogout={handleLogout}
                favoriteWords={favoriteWords}
                searchHistory={searchHistory[user] || []}
                onSelectWord={handleSelectWord}
              />
            }
          />
          <SearchInput onSearch={handleSearch} isLoading={isLoading} />
          <Content searchTerm={searchTerm} data={data} error={error} user={user} onAddToFavorites={addToFavorites} favoriteWords={favoriteWords} />
        </Container>
      </Box>
    </>
  );
}

export default App;

App.propTypes = {
  searchTerm: PropTypes.string,
  handleSearch: PropTypes.func,
};
