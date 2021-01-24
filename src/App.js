import React from 'react';
import Navbar from './components/Navbar';
import Body from './components/Body';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Navbar></Navbar>
        <Body></Body>
      </div>
    )
  }
}

export default App;
