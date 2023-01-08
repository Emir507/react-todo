import React from "react";
import PropTypes from "prop-types";
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

Footer.defaultProps = {
  toDo: 0,
  activeFilter: "all",
  onFilterChange: () => {},
  onClearCompleted: () => {},
};

Footer.propTypes = {
  toDo: PropTypes.number,
  activeFilter: PropTypes.string,
  onFilterChange: PropTypes.func,
  onClearCompleted: PropTypes.func,
};

export default Footer;
