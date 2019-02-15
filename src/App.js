import React, { Component } from "react";
import GetAll from "./GetAll";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <GetAll />
        </header>
      </div>
    );
  }
}

export default App;
