import PropTypes from "prop-types";
import { useState } from "react";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import Content from "./components/Content";

import { Container } from "@chakra-ui/react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async (term) => {
    // Aqui você pode implementar a sua lógica de busca
    // Por exemplo:
    // const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${term}`);
    // const data = await response.json();

    // Simulando um atraso para demonstrar o spinner
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Atualiza o termo de busca depois de obter os dados
    setSearchTerm(term);
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
        <Content searchTerm={searchTerm} />
      </Container>
    </>
  );
}

export default App;

App.propTypes = {
  searchTerm: PropTypes.string,
  handleSearch: PropTypes.func,
};
