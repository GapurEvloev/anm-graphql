import React from 'react';
import AnimePage from "./components/AnimePage/AnimePage";
import styled from "styled-components";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <AppContainer>
      <AnimePage/>
    </AppContainer>
  );
}

export default App;
