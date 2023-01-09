import React from 'react';
import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns';

import './task-list-item.css';

function TaskItem({ label, created, completed, editing, onMakeActive, onDeleted, onComplete }) {
  return (
    <>
      <div className="view">
        <input className="toggle" type="checkbox" defaultChecked={completed} onChange={onComplete} />
        <label onClick={onMakeActive}>
          <span className="description">{label}</span>
          <span className="created">created {formatDistanceToNow(created)} ago</span>
        </label>
        <button type="submit" className="icon icon-edit" />
        <button type="submit" className="icon icon-destroy" onClick={onDeleted} />
      </div>
      {editing ? <input type="text" className="edit" value="Editing task" onChange={() => {}} /> : null}
    </>
  );
}

TaskItem.defaultProps = {
  label: '',
  created: new Date(),
  completed: false,
  editing: false,
  onMakeActive: false,
  onDeleted: false,
  onComplete: false,
};
TaskItem.propTypes = {
  label: PropTypes.string,
  created: PropTypes.instanceOf(Date),
  completed: PropTypes.bool,
  editing: PropTypes.bool,
  onMakeActive: PropTypes.func,
  onDeleted: PropTypes.func,
  onComplete: PropTypes.func,
};

export default TaskItem;
