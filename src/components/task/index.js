import React from 'react';
import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns';

import './task-list-item.css';

function TaskItem({
  label,
  created,
  active,
  completed,
  editing,
  onToggleActive,
  onToggleEditing,
  onDeleted,
  onComplete,
  onLabelChange,
}) {
  function handleUpdatedDone(event) {
    if (event.key === 'Enter') {
      onToggleEditing();
    }
  }
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
        <button type="submit" className="icon icon-edit" onClick={onToggleEditing} />
        <button type="submit" className="icon icon-destroy" onClick={onDeleted} />
      </div>
      {editing ? (
        <input
          autoFocus
          type="text"
          className="edit"
          value={label}
          onChange={(e) => onLabelChange(e.target.value)}
          onBlur={onToggleEditing}
          onKeyDown={handleUpdatedDone}
        />
      ) : null}
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
  onToggleEditing: () => {},
  onDeleted: () => {},
  onComplete: () => {},
  onLabelChange: () => {},
};
TaskItem.propTypes = {
  label: PropTypes.string,
  created: PropTypes.instanceOf(Date),
  active: PropTypes.bool,
  completed: PropTypes.bool,
  editing: PropTypes.bool,
  onToggleActive: PropTypes.func,
  onToggleEditing: PropTypes.func,
  onDeleted: PropTypes.func,
  onComplete: PropTypes.func,
  onLabelChange: PropTypes.func,
};

export default TaskItem;
