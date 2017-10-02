import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PostsList from './components/PostsList/PostsList'
import Navbar from './components/Navbar/Navbar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
        <Navbar />
        <PostsList />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
