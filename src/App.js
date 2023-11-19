import styled from "styled-components";
import { useEffect, useRef } from "react";

const IframeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1em;
`;

const StyledIframe = styled.iframe`
  height: 300px;
  width: 700px;
`;

const App = () => {
  const iframeRef = useRef(null);

  useEffect(() => {
    window.addEventListener("message", (e) => {
      e.preventDefault();
      sayMessage(e.data);
    });
  });

  const sayMessage = (message) => {
    console.log("Parent says ", message);
  };

  const handleClick = () => {
    console.log("Parent Says X");
    const message = "X";
    iframeRef.current.contentWindow.postMessage(message, "*");
  };

  return (
    <IframeWrapper>
      <h1>Hello, I am the Parent!</h1>
      <button onClick={handleClick}>Click Me</button>
      <StyledIframe
        ref={iframeRef}
        src="http://localhost:3006"
        frameborder="1"
        style={{ height: "100%" }}
        scrolling="no" // TO-DO: Look for an alternate way to handle this
      ></StyledIframe>
    </IframeWrapper>
  );
};

export default App;
