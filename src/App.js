import React, { Component } from 'react';
import './App.css';
import FilterableTable from "./Components/FilterableTable.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <h2>Welcome to MoEngage Campaign</h2>
        </header>
        <div className="App-intro">
            <FilterableTable/>
        </div>
      </div>
    );
  }
}

export default App;
