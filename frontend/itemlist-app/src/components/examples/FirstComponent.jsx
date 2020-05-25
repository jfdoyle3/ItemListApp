import React, { Component } from "react";

// Class Component
export default class FirstComponent extends Component {
  render() {
    return <div className="FirstComponent">FirstComponent</div>;
  }
}

export class Books extends Component {
  render() {
    return (
      <div className="Items">
        Second class in 1st Component - named: Class Books
      </div>
    );
  }
}
