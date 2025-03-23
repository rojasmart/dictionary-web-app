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

  return (
    <>
      <Container maxW={"container.md"}>
        <Header />
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
