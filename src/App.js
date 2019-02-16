import React, { Component } from "react";
import GetAll from "./GetAll";
import GetOne from "./GetOne";
import SaveOne from "./saveOne";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <GetAll />
          <br />
          <GetOne />
          <br />
          <SaveOne />
        </header>
      </div>
    );
  }
}

export default App;
