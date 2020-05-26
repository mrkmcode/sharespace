import React from 'react';

import './App.scss';

import Container from 'react-bootstrap/Container';

import HomePage from './pages/homepage/homepage.component';

const App = () => (
  <Container fluid="md">
    <HomePage></HomePage>
  </Container>
);


export default App;
