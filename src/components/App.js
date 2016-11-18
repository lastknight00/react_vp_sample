import React from 'react';
import Contact from './Contact';
//var React = require('react');
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name : ''
    };
  }
  render() {
    return (
      <div>
        <button onClick = {() => {this.setState({name:'Velopert'});}}>Hello</button>
        <h1>Hello!!!!!! {this.state.name}</h1>
        <Contact/>
      </div>
    );
  }
}

export default App;
