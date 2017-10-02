import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PostsList from './components/PostsList/PostsList';
import Navbar from './components/Navbar/Navbar';
import Toggle from 'material-ui/Toggle';
import PostForm from './components/PostForm/PostForm.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  constructor(props) {
    super (props); 
    this.state = {admin: false};
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle(event) {
    this.setState({admin: !this.state.admin});
  }

  render() {

    if (this.state.admin) {
      return (
        <div className="App">
        <MuiThemeProvider>
        <Navbar />
        <Toggle
            toggled={this.state.admin}
            onToggle={this.handleToggle}
            labelPosition="right"
            label="Act as admin"
          />
          <PostForm />
        </MuiThemeProvider>
      </div>
      )
    } else {
      return (
        <div className="App">
          <MuiThemeProvider>
          <Navbar />
          <Toggle
              toggled={this.state.admin}
              onToggle={this.handleToggle}
              labelPosition="right"
              label="Act as admin"
            />
          <PostsList />
          </MuiThemeProvider>
        </div>
      );
    }
  }
}

export default App;
