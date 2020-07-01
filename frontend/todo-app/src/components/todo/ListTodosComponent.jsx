import React, { Component } from "react";
import moment from "moment";
import TodoDataService from "../../api/todo/TodoDataService.js";
import AuthenticationService from "./AuthenticationService.js";

class ListTodosComponent extends Component {
  constructor(props) {
    console.log("constructor");
    super(props);
    this.state = {
      todos: [],
      message: null,
    };
    this.deleteTodoClick = this.deleteTodoClick.bind(this);
    this.updateTodoClick = this.updateTodoClick.bind(this);
    this.refreshTodos = this.refreshTodos.bind(this);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    console.log(nextProps);
    console.log(nextState);
    return true;
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.refreshTodos();
    console.log(this.state);
  }

  refreshTodos() {
    let username = AuthenticationService.getLoggedInUserName();
    TodoDataService.retrieveAllTodos(username).then((response) => {
      //console.log(response);
      this.setState({ todos: response.data });
    });
  }

  deleteTodoClick(id) {
    let username = AuthenticationService.getLoggedInUserName();
    console.log(id + " | " + username);
    TodoDataService.deleteTodo(username, id).then((response) => {
      this.setState({ message: `Delete of todo ${id} Successful` });
      this.refreshTodos();
    });
  }

  updateTodoClick(id) {
    console.log("Updated: " + id);
    // todos/${id}
    this.props.history.push(`/todos/${id}`);
    // let username = AuthenticationService.getLoggedInUserName();
    // console.log(id + " | " + username);
    // TodoDataService.deleteTodos(username, id).then((response) => {
    //   this.setState({ message: `Delete of todo ${id} Successful` });
    //   this.refreshTodos();
    // });
  }

  render() {
    console.log("render");
    return (
      <div>
        <h1>List Todos</h1>
        {this.state.message && (
          <div className="alert alert-success">{this.state.message}</div>
        )}
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th>Description</th>
                <th>Target Date</th>
                <th>IsCompleted?</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {this.state.todos.map((todo) => (
                <tr key={todo.id}>
                  <td>{todo.description}</td>
                  <td>{moment(todo.targetDate).format("YYYY-MM-DD")}</td>
                  <td>{todo.done.toString()}</td>
                  <td>
                    <button
                      className="btn btn-success"
                      onClick={() => this.updateTodoClick(todo.id)}
                    >
                      Update
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-warning"
                      onClick={() => this.deleteTodoClick(todo.id)}
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

export default ListTodosComponent;
