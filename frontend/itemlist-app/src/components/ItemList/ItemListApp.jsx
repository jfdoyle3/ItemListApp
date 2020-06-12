import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

class ItemListApp extends Component {
  render() {
    return (
      <div className="ItemListApp">
        <Router>
          <Route path="/" exact component={LoginComponent} />
          <Route path="/login" component={LoginComponent} />
          <Route path="/welcome" component={WelcomeComponent} />
        </Router>

        {/* Using <> </> is a react fragment.
          Fragments let you group a list of children without adding extra nodes to the DOM.
          Fragments may also have key= in them too */}
        {/*  <LoginComponent />
        <WelcomeComponent />*/}
      </div>
    );
  }
}

class WelcomeComponent extends Component {
  render() {
    return <div>Welcome user</div>;
  }
}

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "user",
      password: "",
      hasLoginFailed: false,
      showSuccessMessge: false,
    };

    // these binds static handles below.
    // this.handleUsernameChange = this.handleUsernameChange.bind(this);
    // this.handlePasswordChange = this.handlePasswordChange.bind(this);
    //
    // Using this one line to replaces the other two above
    this.handleChange = this.handleChange.bind(this);
    this.loginClicked = this.loginClicked.bind(this);
  }

  // Using this one handleChange(Event) with name (Note: name comes from name= in the input tag)
  // will accept any tag with name= in it and change/update the state props object.
  // This is an all-in-one method of setting / getting states in a component.
  handleChange(event) {
    // This shows name field in console and show how many it get updated as user types into form: 34 username
    // console.log(event.target.name);
    //
    // This shows all fields names and it's updated info in the console as the user types into form: {username: "jjjj", password: "hjhkjkhlk"}
    // console.log(this.state);
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  // These update the field by value and state of the objects
  // This may be needed if the all-in-one method above is not a desirable method.
  //
  //   handleUsernameChange(event) {
  //     console.log(event.target.value);
  //     this.setState({ username: event.target.value });
  //   }
  //   handlePasswordChange(event) {
  //     console.log(event.target.value);
  //     this.setState({ password: event.target.value });
  //   }

  loginClicked() {
    // static login credentials
    if (this.state.username === "user" && this.state.password === "password") {
      console.log("Successful");
      this.setState({ showSuccessMessge: true });
      this.setState({ hasLoginFailed: false });
    } else {
      this.setState({ showSuccessMessge: false });
      this.setState({ hasLoginFailed: true });
      console.log("Failed");
    }
    // outputs the current state to console.
    // console.log(this.state);
  }

  render() {
    return (
      <div>
        {/* Javascript:  boolean: true && "Text" = outpu: Text */}
        {/* Javascript:  boolean: false && "Text"= output: false */}
        {/* ------------------------------------------------------------ */}
        {/* the lines below calls the function Component and return a div tag message */}
        {/*                                                                          */}
        {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed} /> */}
        {/* <ShowValidCredentials showSuccessMessge={this.state.showSuccessMessge} /> */}
        {/* ------------------------------------------------------------------------ */}
        {/* if hasLoginFailed or showSuccessMessge is true: show div tag's message  */}
        {/* using this method is clean code and output the same as the function Component does */}
        {this.state.hasLoginFailed && <div>Invalid Credentials</div>}
        {this.state.showSuccessMessge && <div>Login Successful</div>}
        User Name:
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handleChange}
        />
        Password:
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <button onClick={this.loginClicked}>Login</button>
      </div>
    );
  }
}

// Creates a function Component that shows Invalid Credentials
// function ShowInvalidCredentials(props) {
//   if (props.hasLoginFailed) {
//     return <div>Invalid Credentials</div>;
//   }
//   return null;
// }

// Creates a function Component that shows Login Successful
// function ShowValidCredentials(props) {
//   if (props.showSuccessMessge) {
//     return <div>Login Successful</div>;
//   }
//   return null;
//}
export default ItemListApp;
