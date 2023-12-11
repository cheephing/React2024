import { styled } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: orange;
`;

const Button = styled.button`
  font-size: 1.4rem;
  padding: 1.2 rem;
  font-weight: 500;
  border: none;
  border-radius: 7px;
  background-color: var(--color-brand-500);
  color: white;
  cursor: pointer;
  margin: 20px;
`;

const Input = styled.input`
  border: 1px solid white;
  border-radius: 5px;
  padding: 0.8rem 1.2 rem;
`;

const StyledApp = styled.div`
  background-color: orangered;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <H1>The Wild Oasis</H1>
        <Button onClick={() => alert("check in")}>Check in</Button>
        <Button onClick={() => alert("check out")}>Check out</Button>
        <Input type="number" placeholder="Number of guests"></Input>
      </StyledApp>
    </>
  );
}

export default App;
