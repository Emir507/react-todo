import React from "react";
import PropTypes from "prop-types";

import "./task-filter.css";
const buttons = [
  {
    label: "All",
    value: "all",
    id: 1,
  },
  {
    label: "Active",
    value: "active",
    id: 2,
  },
  {
    label: "Completed",
    value: "completed",
    id: 3,
  },
];
const TaskFilter = ({ activeFilter, onFilterChange }) => {
  return (
    <ul className="filters">
      {buttons.map(({ id, label, value }) => (
        <li key={id}>
          <button
            className={activeFilter === value ? "selected" : ""}
            onClick={() => onFilterChange(value)}
          >
            {label}
          </button>
        </li>
      ))}
    </ul>
  );
};
TaskFilter.defaultProps = {
  activeFilter: "all",
  onFilterChange: () => {},
};
TaskFilter.propTypes = {
  activeFilter: PropTypes.string,
  onFilterChange: PropTypes.func,
};
export default TaskFilter;
