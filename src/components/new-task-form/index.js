import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './new-task-form.css';

function NewTaskForm({ onAdded }) {
  const [label, setLabel] = useState('');
  const onLabelChange = (e) => {
    setLabel(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (label) {
      onAdded(label);
    }

    setLabel('');
  };

  return (
    <form className="container px-0" onSubmit={onSubmit}>
      <div className="row">
        <div className="col col-8">
          <input
            className="new-todo mr-2"
            placeholder="What needs to be done?"
            onChange={onLabelChange}
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

NewTaskForm.defaultProps = {
  onAdded: () => {},
};

NewTaskForm.propTypes = {
  onAdded: PropTypes.func,
};
export default NewTaskForm;
