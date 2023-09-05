import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";

class AddComponent extends Component {
  state = {
    title: "",
    salary: "",
  };
  handleChangeTitleJob = (e) => {
    this.setState({
      title: e.target.value,
    });
  };
  handleChangeSalary = (e) => {
    this.setState({
      salary: e.target.value,
    });
  };
  handleClickSubmit = (e) => {
    if (!this.state.title || !this.state.salary) {
      alert("Missing required params");
      return;
    }
    this.props.addNewJob({
      id: Math.floor(Math.random() * 100),
      title: this.state.title,
      salary: this.state.salary,
    });
    this.setState({
      title: "",
      salary: "",
    });
  };
  render() {
    return (
      <Form>
        <Form.Group className="mb-3" controlId="firstNameId">
          <Form.Label>Job's title</Form.Label>
          <Form.Control
            type="text"
            value={this.state.title}
            onChange={(e) => this.handleChangeTitleJob(e)}
            placeholder="IT"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="lastNameId">
          <Form.Label>Salary</Form.Label>
          <Form.Control
            type="text"
            value={this.state.salary}
            onChange={(e) => this.handleChangeSalary(e)}
            placeholder="1111 $"
          />
        </Form.Group>
        <Button
          variant="outline-primary"
          onClick={(e) => this.handleClickSubmit(e)}
        >
          Submit
        </Button>
      </Form>
    );
  }
}

export default AddComponent;
