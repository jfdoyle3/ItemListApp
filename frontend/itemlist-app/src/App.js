import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { render } from "react-dom";
import FirstComponent, { Books } from "./components/examples/FirstComponent";
import Items from "./components/examples/SecondComponent";
import FunctionComponent from "./components/examples/ThirdComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        Class App Component / root
        <FirstComponent />
        <Items />
        <FunctionComponent />
        <Books />
      </div>
    );
  }
}

export default App;
