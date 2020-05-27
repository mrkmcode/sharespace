import React, { Component } from 'react';
import { randomBytes } from 'crypto';

import './App.scss';

import Container from 'react-bootstrap/Container';

import HomePage from './pages/homepage/homepage.component';

class App extends Component{
  
  constructor() {
    super();

    this.state = {
      userId: '',
      peerId: ''
    }

    this.createSpaceHandler = this.createSpaceHandler.bind(this);
    this.joinSpaceHandler = this.joinSpaceHandler.bind(this);
  }

  createSpaceHandler = () => {
    const userId = randomBytes(4).toString('hex');
    this.setState({ userId});
    console.log('Space created', this.state.userId);
  }
  
  joinSpaceHandler = (peerId) => {
    this.setState({ peerId });
    console.log('Peer created', this.state.peerId);
  }

  render = () => (
    <Container fluid="md">
      <HomePage createSpace={this.createSpaceHandler} joinSpace={this.joinSpaceHandler}> 
      </HomePage>
    </Container>
  );
}  


export default App;
