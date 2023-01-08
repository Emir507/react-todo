import React from "react";

import Task from "../task";
import "./task-list.css";

const TodoList = ({ todos, onDeleted, onMakeActive, onComplete }) => {
  const elements = todos.map((todo) => {
    const { id, ...itemProps } = todo;
    // li class names completed | editing | empty string
    return (
      <li
        className={
          todo.completed
            ? "completed"
            : todo.editing
            ? "editing"
            : todo.active
            ? "active"
            : ""
        }
        key={id}
      >
        <Task
          {...itemProps}
          onMakeActive={() => onMakeActive(id)}
          onDeleted={() => onDeleted(id)}
          onComplete={() => onComplete(id)}
        />
      </li>
    );
  });
  return <ul className="todo-list">{elements}</ul>; // сюда передали массив элементов JSX
};

export default TodoList;
