import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './new-task-form.css';

class NewTaskForm extends Component {
  constructor() {
    super();
    this.state = {
      label: '',
    };
  }

  onLabelChange = (e) => {
    this.setState({ label: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { label } = this.state;
    const { onAdded } = this.props;
    if (label) {
      onAdded(label);
    }

    this.setState({
      label: '',
    });
  };

  render() {
    const { label } = this.state;
    return (
      <form className="container px-0" onSubmit={this.onSubmit}>
        <div className="row">
          <div className="col col-8">
            <input
              className="new-todo mr-2"
              placeholder="What needs to be done?"
              onChange={this.onLabelChange}
              value={label}
            />
          </div>
          <div className="col col-4">
            <button className="btn btn-primary" style={{ width: '100%', height: '100%' }} type="submit">
              Add task
            </button>
          </div>
        </div>
      </form>
    );
  }
}

NewTaskForm.defaultProps = {
  onAdded: () => {},
};

NewTaskForm.propTypes = {
  onAdded: PropTypes.func,
};
export default NewTaskForm;
