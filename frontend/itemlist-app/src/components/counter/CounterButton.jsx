import React, { Component } from "react";
import PropTypes from "prop-types";
import "./CounterButton.css";

class CounterButton extends Component {
  // define the initial state in a constructor
  //state => counter 0
  constructor() {
    super(); // error 1 ppl forget need this to have state to work

    this.state = {
      counter: 0,
      secondCounter: 100,
    };
    this.increment = this.increment.bind(this);
  }
  // need to bind to the function to use THIS and you're not using arrows in render method.
  // you dont need bind if using arrow method in render
  //  this.increment = this.increment.bind(this);
  // }

  render() {
    // render = () => {
    return (
      <div className="counterbutton">
        <button onClick={this.increment}>+{this.props.by}</button>
      </div>
    );
  }

  increment() {
    // increment = () => {
    // Update State: counter++
    // console.log("Increment");
    //    this.state.counter++;  // bad practice, doesn't work need to setState
    this.setState({
      counter: this.state.counter + this.props.by,
    });
    this.props.incrementMethod();
  }
}

CounterButton.defaultProps = { by: 1 };
CounterButton.propTypes = {
  by: PropTypes.number,
};

export default CounterButton;
