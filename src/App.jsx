import PropTypes from "prop-types";
import { useState } from "react";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import Content from "./components/Content";

import { Container } from "@chakra-ui/react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

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

  return (
    <>
      <Container maxW={"container.md"}>
        <Header randomWord={handleRandomWord} isLoading={isLoading} />
        <SearchInput onSearch={handleSearch} isLoading={isLoading} />
        <Content searchTerm={searchTerm} data={data} error={error} />
      </Container>
    </>
  );
}

export default App;

App.propTypes = {
  searchTerm: PropTypes.string,
  handleSearch: PropTypes.func,
};
