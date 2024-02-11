import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import Content from "./components/Content";

import { Container } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Container maxW={"container.md"}>
        <Header />
        <SearchInput />
        <Content />
      </Container>
    </>
  );
}

export default App;
