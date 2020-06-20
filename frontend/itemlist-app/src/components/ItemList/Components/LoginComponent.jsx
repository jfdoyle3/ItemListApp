import React, { Component } from "react";
import AuthenticationService from "../AuthenticationService.js";

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
    // static login credentials: user ,  password
    if (this.state.username === "user" && this.state.password === "password") {
      AuthenticationService.registerSuccessfulLogin(
        this.state.username,
        this.state.password
      );
      this.props.history.push(`/welcome/${this.state.username}`);
      //  console.log("Successful");
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
        <h1>Login</h1>
        <div className="container">
          {/* Javascript:  boolean: true && "Text" = outpu: Text */}
          {/* Javascript:  boolean: false && "Text"= output: false */}
          {/* ------------------------------------------------------------ */}
          {/* these lines calls the function Component below and return a div tag message */}
          {/*                                                                          */}
          {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed} /> */}
          {/* <ShowValidCredentials showSuccessMessge={this.state.showSuccessMessge} /> */}
          {/* ------------------------------------------------------------------------ */}
          {/* if hasLoginFailed or showSuccessMessge is true: show div tag's message  */}
          {/* using this method is clean code and output the same as the function Component does */}
          {this.state.hasLoginFailed && (
            <div className="alert alert-warning">Invalid Credentials</div>
          )}
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
          <button className="btn btn-success" onClick={this.loginClicked}>
            Login
          </button>
        </div>
      </div>
    );
  }
}

export default LoginComponent;
