import React from 'react';
import PropTypes from 'prop-types';

import Task from '../task';
import './task-list.css';

function TaskList({ todos, onDeleted, onComplete, onLabelChange, onToggleActive, onToggleEditing }) {
  const elements = todos.map((todo) => {
    const { id, ...itemProps } = todo;
    return (
      <li className={todo.completed ? 'completed' : todo.editing ? 'editing' : todo.active ? 'active' : ''} key={id}>
        <Task
          {...itemProps}
          onToggleActive={() => onToggleActive(id)}
          onDeleted={() => onDeleted(id)}
          onComplete={() => onComplete(id)}
          onToggleEditing={() => onToggleEditing(id)}
          onLabelChange={(val) => onLabelChange(val, id)}
        />
      </li>
    );
  });
  return <ul className="todo-list">{elements}</ul>;
}

TaskList.defaultProps = {
  todos: [],
  onDeleted: () => {},
  onComplete: () => {},
  onLabelChange: () => {},
  onToggleActive: () => {},
  onToggleEditing: () => {},
};
TaskList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      label: PropTypes.string,
      created: PropTypes.instanceOf(Date),
      completed: PropTypes.bool,
      editing: PropTypes.bool,
      active: PropTypes.bool,
    })
  ),
  onDeleted: PropTypes.func,
  onComplete: PropTypes.func,
  onLabelChange: PropTypes.func,
  onToggleActive: PropTypes.func,
  onToggleEditing: PropTypes.func,
};

export default TaskList;
