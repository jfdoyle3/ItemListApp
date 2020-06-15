import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import AuthenticationService from "./AuthenticationService.js";
import AuthenticatedRoute from "./AuthenticatedRoute.jsx";

class ItemListApp extends Component {
  render() {
    return (
      <div className="ItemListApp">
        <Router>
          <HeaderComponent />
          <Switch>
            <Route path="/" exact component={LoginComponent} />
            <Route path="/login" component={LoginComponent} />
            <AuthenticatedRoute
              path="/welcome/:name"
              component={WelcomeComponent}
            />
            <AuthenticatedRoute
              path="/itemlist"
              component={ItemListComponent}
            />
            <AuthenticatedRoute path="/logout" component={LogoutComponent} />
            <Route component={ErrorComponent} />
          </Switch>
          <FooterComponent />
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

class HeaderComponent extends Component {
  render() {
    const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
    console.log(isUserLoggedIn);

    return (
      <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div>
            <a
              href="https://github.com/jfdoyle3/JavaReactNoteBook"
              className="navbar-brand"
            >
              Java/React App
            </a>
          </div>
          <ul className="navbar-nav">
            {isUserLoggedIn && (
              <li>
                <Link className="nav-link" to="/welcome/user">
                  Home
                </Link>
              </li>
            )}
            {isUserLoggedIn && (
              <li>
                <Link className="nav-link" to="/itemlist">
                  Item List
                </Link>
              </li>
            )}
          </ul>
          <ul className="navbar-nav navbar-collapse  justify-content-end">
            {!isUserLoggedIn && (
              <li>
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            )}
            {isUserLoggedIn && (
              <li>
                <Link
                  className="nav-link"
                  to="/logout"
                  onClick={AuthenticationService.logout}
                >
                  Logout
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </header>
    );
  }
}

class FooterComponent extends Component {
  render() {
    return (
      <footer className="footer">
        <span className="text-muted">Typed by the fingers of Jim Doyle</span>
      </footer>
    );
  }
}

class LogoutComponent extends Component {
  render() {
    return (
      <>
        <h1>You are logged out</h1>
        <div className="container">Thanks and Goodbye</div>
      </>
    );
  }
}

class ItemListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 1,
          description: "record collection",
          done: false,
          targetDate: new Date(),
        },
        { id: 2, description: "books", done: false, targetDate: new Date() },
        {
          id: 3,
          description: "keyboards",
          done: false,
          targetDate: new Date(),
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <h1>Item List</h1>
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th>description</th>
                <th>Completed</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {this.state.items.map((item) => (
                <tr key={item.id}>
                  <td>{item.description}</td>
                  <td>{item.done.toString()}</td>
                  <td>{item.targetDate.toString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

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

function ErrorComponent() {
  return (
    <div>
      An Error Occured. I don't know what to do! Contact support about this
      error
    </div>
  );
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
