import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
/* this.props.match.params.name below is referred to the route above /welcome/:name
   name is a varible:  this.props.match.params.variable_name = /route/:variable_name
   Using a <a> tag for Routing refreshes the entire page, not recommended.
   <a> tags can be used for links outside the react environment.
   Use Link to="<route-name>" link for Routing */

class WelcomeComponent extends Component {
  render() {
    return (
      <>
        <h1>Welcome!</h1>
        <div className="container">
          Welcome {this.props.match.params.name}
          <br />
          <Link to="/itemlist">Item List</Link>
        </div>
      </>
    );
  }
}

export default WelcomeComponent;
