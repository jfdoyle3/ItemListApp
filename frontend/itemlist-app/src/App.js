import React, { Component } from "react";
import "./App.css";
import FirstComponent, { Books } from "./components/examples/FirstComponent";
import Items from "./components/examples/SecondComponent";
import FunctionComponent from "./components/examples/ThirdComponent";
import Counter from "./components/counter/Counter";
import ItemListApp from "./components/ItemList/ItemListApp";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*  <Counter /> */}
        <ItemListApp />
      </div>
    );
  }
}

class ComponentExamples extends Component {
  render() {
    return (
      <div className="ComponentExamples">
        Class ComponentExamples Component / secondary class in root
        <FirstComponent />
        <Items />
        <FunctionComponent />
        <Books />
      </div>
    );
  }
}

export default App;
