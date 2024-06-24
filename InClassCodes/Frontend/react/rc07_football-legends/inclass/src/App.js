import Container from "react-bootstrap/Container";
import Header from "./components/Header";
import  "../src/index"
import CardContainer from "./components/CardContainer";

function App() {
  return (
    <Container className=" text-center mt-5">
      <Header/> 
      <CardContainer />
    </Container>
  );
}

export default App;
