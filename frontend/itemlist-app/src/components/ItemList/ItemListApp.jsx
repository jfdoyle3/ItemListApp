import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthenticatedRoute from "./AuthenticatedRoute.jsx";
import LoginComponent from "./Components/LoginComponent.jsx";
import ItemListComponent from "./Components/ItemListComponent.jsx";
import ErrorComponent from "./Components/ErrorComponent.jsx";
import LogoutComponent from "./Components/LogoutComponent.jsx";
import FooterComponent from "./Components/FooterComponent.jsx";
import HeaderComponent from "./Components/HeaderComponent.jsx";
import WelcomeComponent from "./Components/WelcomeComponent.jsx";

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
