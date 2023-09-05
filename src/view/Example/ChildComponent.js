import React, { Component, Fragment } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
export class ChildComponent extends Component {
  state = {
    showJobs: false,
    isEdit: false,
  };

  handelShowHide = () => {
    this.setState({
      showJobs: !this.state.showJobs,
    });
  };
  handleClickDelete = (job) => {
    this.props.deleteJob(job);
  };
  handleClickEdit = (job) => {
    this.setState({
      isEdit: !this.state.isEdit,
    });
    console.log("---->>checkIsEdit", this.state.isEdit);
    //this.props.editJob(job);
  };
  render() {
    //console.log("====> check props: ", this.props);
    let { arrJobs } = this.props;
    let { showJobs } = this.state;
    // let check = showJobs ? "showJobs = true" : "showJobs = false";
    // console.log("---->>checkShowJobs", check);
    return (
      <>
        <div className="mt-3">
          {!showJobs ? (
            <Button
              variant="outline-success"
              onClick={() => this.handelShowHide()}
            >
              Show
            </Button>
          ) : (
            <>
              <div className="job-lists">
                {arrJobs.map((item, index) => {
                  return (
                    <div key={item.id}>
                      {item.title} - {item.salary}{" "}
                      <span>
                        <Button
                          variant="outline-success"
                          onClick={() => this.handleClickEdit(item)}
                        >
                          {!this.state.isEdit ? "Edit" : "Save"}
                        </Button>
                        <Button
                          variant="outline-danger"
                          onClick={() => this.handleClickDelete(item)}
                        >
                          x
                        </Button>
                      </span>
                    </div>
                  );
                })}
              </div>
              <div>
                <Button
                  variant="outline-warning"
                  onClick={() => this.handelShowHide()}
                >
                  Hide
                </Button>
              </div>
            </>
          )}
        </div>
      </>
    );
  }
}

export default ChildComponent;
