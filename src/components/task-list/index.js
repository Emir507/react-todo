import React from 'react';
import PropTypes from 'prop-types';

import Task from '../task';
import './task-list.css';

function TaskList({ todos, onDeleted, onToggleActive, onComplete }) {
  const elements = todos.map((todo) => {
    const { id, ...itemProps } = todo;
    return (
      <li className={todo.completed ? 'completed' : todo.editing ? 'editing' : todo.active ? 'active' : ''} key={id}>
        <Task
          {...itemProps}
          onToggleActive={() => onToggleActive(id)}
          onDeleted={() => onDeleted(id)}
          onComplete={() => onComplete(id)}
        />
      </li>
    );
  });
  return <ul className="todo-list">{elements}</ul>;
}

TaskList.defaultProps = {
  todos: [],
  onDeleted: () => {},
  onToggleActive: () => {},
  onComplete: () => {},
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
  onToggleActive: PropTypes.func,
  onComplete: PropTypes.func,
};

export default TaskList;
