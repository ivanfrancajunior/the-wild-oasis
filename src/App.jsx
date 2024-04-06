import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

const StyledApp = styled.div`
  background-color: #1a1a1a;
  color: white;
  padding: 20px;
`;

const App = () => {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row>
          <Row type="horizontal">
            <Heading as={"h1"}>The wild Oasis</Heading>
            <div>
              <Button >
                {" "}
                Asap
              </Button>
              <Button variation="secondary" size="small">
                {" "}
                yoo!
              </Button>
            </div>
          </Row>

          <Row>
            <Heading as={"h3"}>Form</Heading>
            <form>
              <Input placeholder="olá sou um input  de test" type="number" />
              <Input placeholder="olá sou um input  de test" type="text" />
            </form>
          </Row>
        </Row>
      </StyledApp>
    </>
  );
};

export default App;
