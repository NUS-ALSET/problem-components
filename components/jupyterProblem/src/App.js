import React, { Component } from 'react';
import Example from './example';

class App extends Component {
  constructor() {
    super();
    this.state = {
      problems: {},
    };
  }
  handleUrl = data => {
    this.setState({
      problems: data,
    });
  };
  render() {
    return <Example />;
  }
}

export default App;
