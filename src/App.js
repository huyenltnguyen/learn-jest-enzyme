import React, { Component } from 'react';
import './App.css';
import Welcome from './Welcome';
import Add from './Add';
import List from './List';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  handleAdd = (name) => {
    const list = [ ...this.state.list, name ];
    this.setState({ list });
  }

  render() {
    return (
      <div>
        <Add onAdd={ this.handleAdd } />
        <List data={ this.state.list } />
      </div>
    );
  }
}

export default App;
