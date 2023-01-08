import React from "react";
import { formatDistanceToNow } from "date-fns";

import "./task-list-item.css";

function TaskItem({
  label,
  created,
  completed,
  editing,
  onMakeActive,
  onDeleted,
  onComplete,
}) {
  return (
    <>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          defaultChecked={completed}
          onChange={onComplete}
        />
        <label onClick={onMakeActive}>
          <span className="description">{label}</span>
          <span className="created">{formatDistanceToNow(created)} ago</span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy" onClick={onDeleted}></button>
      </div>
      {editing ? (
        <input
          type="text"
          className="edit"
          value="Editing task"
          onChange={() => {}}
        />
      ) : null}
    </>
  );
}

export default TaskItem;
