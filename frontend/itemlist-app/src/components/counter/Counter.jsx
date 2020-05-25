import React, { Component } from "react";
import "./Counter.css";

class Counter extends Component {
  // define the initial state in a constructor
  //state => counter 0
  constructor() {
    super(); // error 1 ppl forget need this to have state to work

    this.state = {
      counter: 0,
      secondCounter: 100,
    };

    // need to bind to the function to use THIS and you're not using arrows in render method.
    // you dont need bind if using arrow method in render
    this.increment = this.increment.bind(this);
  }

  render() {
    // render = () => {
    return (
      <div className="counter">
        <button onClick={this.increment}>+1</button>
        <span className="count" style={{ fontSize: "50px" }}>
          {this.state.counter}
        </span>
      </div>
    );
  }

  increment() {
    // increment = () => {
    // Update State: counter++
    // console.log("Increment");
    //   this.state.counter++;  // bad practice, doesn't work need to setState
    this.setState({
      counter: this.state.counter + 1,
    });
  }
}
export default Counter;
