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
  console.log("hello!");
};

const App = () => {
  return (
    <IframeWrapper>
      <h1>I am the parent!</h1>
      <button onClick={handleClick}>Click Me</button>
      <StyledIframe
        // src="https://www.youtube.com/embed/BSmYxnvUDHw?si=GErWw-aFAjhtEm4A"
        src="http://localhost:3001"
        frameborder="1"
      ></StyledIframe>
    </IframeWrapper>
  );
};

export default App;
