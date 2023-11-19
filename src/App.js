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
      if (e.source === iframeRef.current.contentWindow) {
        sayMessage(e.data);
      }
    });
  }); //Do I need to unmount in order to prevent memory leaks?

  const sayMessage = (message) => {
    if (
      (typeof message === "object" && message.type === "webpackOk") ||
      message.type === "webpackHotUpdate"
    ) {
      return;
    }
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
        style={{ height: "100%" }}
        scrolling="no" // TODO: Look for an alternate way to handle this
      ></StyledIframe>
    </IframeWrapper>
  );
};

export default App;
