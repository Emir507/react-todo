import React from "react";
import TaskFilter from "../task-filter";

import "./footer.css";

const Footer = ({ toDo, activeFilter, onFilterChange, onClearCompleted }) => {
  return (
    <footer className="footer">
      <span className="todo-count">
        {toDo ? `${toDo} items left` : "all done"}
      </span>
      <TaskFilter activeFilter={activeFilter} onFilterChange={onFilterChange} />
      <button className="clear-completed" onClick={onClearCompleted}>
        Clear completed
      </button>
    </footer>
  );
};

export default Footer;
