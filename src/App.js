import React, { Component } from "react";
import GetAll from "./components/GetAll";
import GetOne from "./components/GetOne";
import SaveOne from "./components/saveOne";
import "./App.css";
import DeleteOne from "./components/DeleteOne";
import EditOne from "./components/EditOne";

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
          <br />
          <DeleteOne />
          <br />
          <EditOne />
        </header>
      </div>
    );
  }
}

export default App;
