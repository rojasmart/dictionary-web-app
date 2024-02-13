import PropTypes from "prop-types";
import { useState } from "react";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import Content from "./components/Content";

import { Container } from "@chakra-ui/react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <>
      <Container maxW={"container.md"}>
        <Header />
        <SearchInput onSearch={handleSearch} />
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
