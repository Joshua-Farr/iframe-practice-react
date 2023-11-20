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
  });

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
    iframeRef.current.contentWindow.postMessage("X", "*");
  };

  return (
    <IframeWrapper>
      <h1>Hello, I am the Parent!</h1>
      <button onClick={handleClick}>Click Me</button>
      <StyledIframe
        ref={iframeRef}
        src="http://localhost:3006"
        sandbox="allow-scripts allow-same-origin"
        style={{ height: "100%" }}
        scrolling="no"
      ></StyledIframe>
    </IframeWrapper>
  );
};

export default App;
