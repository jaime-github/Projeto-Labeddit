import React from 'react';
import RoutesApp from './Routes/routes';
import styled from 'styled-components';

function App() {
  return (
      <Container>
      <RoutesApp/>
      </Container>
  );
}

const Container = styled.body`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`

export default App;
