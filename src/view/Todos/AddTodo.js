import React, { Component } from "react";
import { Button, Form, Toast } from "react-bootstrap";
import { toast } from "react-toastify";
export default class AddTodo extends Component {
  state = {
    title: "",
  };
  handleOnChangeTitle = (e) => {
    this.setState({
      title: e.target.value,
    });
  };
  handleOnClickAdd = () => {
    if (!this.state.title) {
      alert("missing title");
      return;
    }
    let toDo = {
      id: Math.floor(Math.random() * 10000),
      title: this.state.title,
    };
    this.props.addNewTodo(toDo);
    this.setState({
      title: "",
    });
  };
  render() {
    let { title } = this.state.title;
    return (
      <div className="add-todo d-flex">
        <Form.Control
          value={title}
          onChange={(e) => this.handleOnChangeTitle(e)}
          className="mr-sm-2"
          type="text"
          placeholder="To do something"
        />
        <Button
          variant="outline-success"
          className="add"
          onClick={() => this.handleOnClickAdd()}
        >
          Add
        </Button>
      </div>
    );
  }
}
