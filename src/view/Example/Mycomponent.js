import React, { Component, Fragment } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import AddComponent from "./AddComponent";
import ChildComponent from "./ChildComponent";

export class Mycomponent extends Component {
  state = {
    arrJobs: [
      {
        id: 1,
        title: "Developer",
        salary: 500,
      },
      {
        id: 2,
        title: "Tester",
        salary: 400,
      },
      {
        id: 3,
        title: "Project managers",
        salary: 799,
      },
    ],
  };

  addNewJob = (job) => {
    this.setState({
      arrJobs: [...this.state.arrJobs, job],
    });
  };
  deleteJob = (job) => {
    let currentJob = this.state.arrJobs;
    currentJob = currentJob.filter((i) => i.id !== job.id);
    this.setState({
      arrJobs: currentJob,
    });
  };
  componentDidUpdate(preProps, preState) {
    console.log("==>run componentDidUpdate", preState, this.state);
  }
  componentDidMount() {
    console.log("==>run componentDidMount");
  }
  render() {
    return (
      <>
        <AddComponent addNewJob={this.addNewJob} />

        <ChildComponent
          arrJobs={this.state.arrJobs}
          deleteJob={this.deleteJob}
        />
      </>
    );
  }
}

export default Mycomponent;
