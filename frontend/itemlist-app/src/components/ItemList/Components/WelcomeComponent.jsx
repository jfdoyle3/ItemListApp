import React, { Component } from "react";
import { BrowserRouter as Link } from "react-router-dom";
import ResistanceService from "../../../api/ItemList/ResistanceService.jsx";
/* this.props.match.params.name below is referred to the route above /welcome/:name
   name is a varible:  this.props.match.params.variable_name = /route/:variable_name
   Using a <a> tag for Routing refreshes the entire page, not recommended.
   <a> tags can be used for links outside the react environment.
   Use Link to="<route-name>" link for Routing */

class WelcomeComponent extends Component {
  constructor(props) {
    super(props);
    this.retrieveMessage = this.retrieveMessage.bind(this);
    this.state = {
      resistanceMessage: "",
    };
    this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this);
  }

  render() {
    return (
      <>
        <h1>Welcome!</h1>
        <div className="container">
          Welcome {this.props.match.params.name}
          <br />
          <Link to="/itemlist">Item List</Link>
        </div>
        <div className="container">
          Click button to display text from the backend.
          <br />
          <button onClick={this.retrieveMessage} className="btn btn-success">
            Get text
          </button>
          <br />
        </div>
        <div className="container">
          Response: {this.state.resistanceMessage}
        </div>
      </>
    );
  }

  retrieveMessage() {
    ResistanceService.executeResistanceService().then((response) =>
      this.handleSuccessfulResponse(response)
    );
    // .catch()
  }
  // response.data:  the data is reference from the jason console response from the backend
  // console from the back end: {data: "Resistance is Futile!", status: 200, statusText: "", headers:....}
  handleSuccessfulResponse(response) {
    this.setState({ resistanceMessage: response.data });
  }
}

export default WelcomeComponent;
