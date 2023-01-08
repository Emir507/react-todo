import React, { Component } from "react";

import "./new-task-form.css";

class NewTaskForm extends Component {
  state = {
    label: "",
  };
  onLabelChange = (e) => {
    this.setState({ label: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.label) {
      this.props.onAdded(this.state.label);
    }

    this.setState({
      label: "",
    });
  };
  render() {
    return (
      <form className="container px-0" onSubmit={this.onSubmit}>
        <div className="row">
          <div className="col col-8">
            <input
              className="new-todo mr-2"
              placeholder="What needs to be done?"
              autoFocus
              onChange={this.onLabelChange}
              value={this.state.label}
            />
          </div>
          <div className="col col-4">
            <button
              className="btn btn-primary"
              style={{ width: "100%", height: "100%" }}
              type="submit"
            >
              Add task
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default NewTaskForm;
