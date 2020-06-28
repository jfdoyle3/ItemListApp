import React, { Component } from "react";
import ItemListDataService from "../../../api/ItemListDataService.js";
import AuthenticationService from "../AuthenticationService.js";

class ItemListComponent extends Component {
  constructor(props) {
    console.log("constructor");
    super(props);
    this.state = {
      items: [
        // {
        //   id: 1,
        //   description: "record collection",
        //   done: false,
        //   targetDate: new Date(),
        // },
        // { id: 2, description: "books", done: false, targetDate: new Date() },
        // {
        //   id: 3,
        //   description: "keyboards",
        //   done: false,
        //   targetDate: new Date(),
        // },
      ],
    };
    this.deleteItemClicked = this.deleteItemClicked.bind(this);
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    console.log(nextProps);
    console.log(nextState);
    return false;
  }

  componentDidMount() {
    console.log("componentDidMount");
    let username = AuthenticationService.getUserLoggedInName();
    ItemListDataService.retrieveAllItems(username).then((response) => {
      // console.log(response);
      this.setState({ items: response.data });
    });
  }

  deleteItemClicked(id) {
    let username = AuthenticationService.getUserLoggedInName();
    console.log(id + "|" + username);
  }
  render() {
    console.log("render");
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
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {this.state.items.map((item) => (
                <tr key={item.id}>
                  <td>{item.description}</td>
                  <td>{item.done.toString()}</td>
                  <td>{item.targetDate.toString()}</td>
                  <td>
                    <button
                      className="btn btn-warning"
                      onClick={() => this.deleteItemClicked(item.id)}
                    >
                      Delete
                    </button>
                  </td>
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
