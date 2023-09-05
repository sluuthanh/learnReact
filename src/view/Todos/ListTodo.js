import React, { Component } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import AddTodo from "./AddTodo";
import "./ListTodo.scss";
export default class ListTodo extends Component {
  state = {
    listTodos: [
      { id: "1", title: "title1" },
      { id: "2", title: "title2" },
      { id: "3", title: "title3" },
    ],
  };

  addNewTodo = (todo) => {
    this.setState({
      listTodos: [...this.state.listTodos, todo],
    });
    toast.success("Oki done");
  };
  handleDeleteTodo = (todo) => {
    let curTodo = this.state.listTodos;
    curTodo = curTodo.filter((i) => i.id !== todo.id);
    this.setState({
      listTodos: curTodo,
    });
  };
  render() {
    let { listTodos } = this.state;
    return (
      <Container>
        <div className="list-todo-container ">
          <AddTodo addNewTodo={this.addNewTodo} />
          <div className="list-todo-content">
            {listTodos &&
              listTodos.length > 0 &&
              listTodos.map((item, index) => {
                return (
                  <div className="todo-child d-flex" key={item.id}>
                    <Form.Control
                      value={item.title}
                      className="mr-sm-2"
                      type="text"
                    />
                    <Button variant="outline-success" className="edit">
                      Edit
                    </Button>
                    <Button
                      variant="outline-success"
                      className="delete"
                      onClick={() => this.handleDeleteTodo(item)}
                    >
                      Delete
                    </Button>
                  </div>
                );
              })}
          </div>
        </div>
      </Container>
    );
  }
}
