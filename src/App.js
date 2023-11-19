import styled from "styled-components";

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

const handleClick = () => {
  console.log("Parent Says X");
  const message = "X";
};

const App = () => {
  return (
    <IframeWrapper>
      <h1>Hello, I am the Parent!</h1>
      <button onClick={handleClick}>Click Me</button>
      <StyledIframe
        // src="https://www.youtube.com/embed/BSmYxnvUDHw?si=GErWw-aFAjhtEm4A"
        src="http://localhost:3006"
        frameborder="1"
        style={{ height: "100%" }}
        scrolling="no" // TO-DO: Look for an alternate way to handle this
      ></StyledIframe>
    </IframeWrapper>
  );
};

export default App;
