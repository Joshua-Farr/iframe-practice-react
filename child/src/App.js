import styled from "styled-components";

const StyledWrapper = styled.div`
  // border: 2px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1em;
  padding: 1em;
`;

function App() {
  const handleClick = () => {
    console.log("Child says Y");
    const message = "Y";
  };

  return (
    <StyledWrapper>
      <h1>Hello, I am the Child!</h1>
      <button onClick={handleClick}>Click Me!</button>
    </StyledWrapper>
  );
}

export default App;
