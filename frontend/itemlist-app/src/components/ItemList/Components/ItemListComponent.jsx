import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import AuthenticationService from "../AuthenticationService.js";
import AuthenticatedRoute from "../AuthenticatedRoute.jsx";

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

export default ItemListComponent;
