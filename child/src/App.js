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
  //TODO - Workn on preventing initial behavior on mounting
  const isMounted = useRef(false);

  useEffect(() => {
    window.addEventListener("message", (e) => {
      e.preventDefault();
      //Preventing initial call on mount
      if (isMounted.current === true) {
        sayMessage(e.data);
      }
    });
    isMounted.current = true;
  });

  const sayMessage = (message) => {
    if (message.type !== "webpackOk") {
      console.log("Child says ", message);
    }
  };

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
