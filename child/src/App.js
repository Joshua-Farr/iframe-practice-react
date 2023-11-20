import { useEffect, useRef } from "react";
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
  const isMounted = useRef(false);

  const sayMessage = (message) => {
    //Filtering out all webpack messages
    console.log("Child says ", message);
  };

  useEffect(() => {
    window.addEventListener("message", (e) => {
      e.preventDefault();
      sayMessage(e.data);
    });
  });

  const sendMessageToParent = () => {
    console.log("Child says Y");
    window.parent.postMessage("Y", "*");
  };

  return (
    <StyledWrapper>
      <h1>Hello, I am the Child!</h1>
      <button onClick={sendMessageToParent}>Click Me!</button>
    </StyledWrapper>
  );
}

export default App;
