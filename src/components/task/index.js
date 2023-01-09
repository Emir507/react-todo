import React from 'react';
import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns';

import './task-list-item.css';

function TaskItem({ label, created, active, completed, editing, onToggleActive, onDeleted, onComplete }) {
  return (
    <>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          defaultChecked={completed}
          onChange={() => {
            if (active) onToggleActive();
            onComplete();
          }}
        />
        <label onClick={!completed ? onToggleActive : () => {}}>
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
  active: false,
  completed: false,
  editing: false,
  onToggleActive: () => {},
  onDeleted: () => {},
  onComplete: () => {},
};
TaskItem.propTypes = {
  label: PropTypes.string,
  created: PropTypes.instanceOf(Date),
  active: PropTypes.bool,
  completed: PropTypes.bool,
  editing: PropTypes.bool,
  onToggleActive: PropTypes.func,
  onDeleted: PropTypes.func,
  onComplete: PropTypes.func,
};

export default TaskItem;
