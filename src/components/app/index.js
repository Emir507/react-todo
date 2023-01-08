import React, { Component } from "react";

import NewTaskForm from "../new-task-form";
import TaskList from "../task-list";
import Footer from "../footer";

import "./app.css";

class App extends Component {
  state = {
    todoData: [
      this.createNewTask("Completed task"),
      this.createNewTask("Editing task"),
      this.createNewTask("Active task"),
    ],
    activeFilter: "all", // all || active || completed
  };

  createNewTask(label) {
    return {
      id: Math.floor(Date.now() * Math.random()),
      label: label,
      created: new Date(),
      completed: false,
      editing: false,
      active: false,
    };
  }
  onFilterChange = (value) => {
    this.setState({
      activeFilter: value,
    });
  };
  // удаление элемента
  onTaskDelete = (id) => {
    this.setState(({ todoData }) => ({
      todoData: todoData.filter((i) => i.id !== id),
    }));
  };

  // добавление элемента
  onTaskAdd = (message) => {
    const newItem = this.createNewTask(message);

    this.setState(({ todoData }) => ({
      todoData: [...todoData, newItem],
    }));
  };

  // обновление элемента
  toggleProperty(arr, id, propName) {
    return arr.map((todo) => {
      if (todo.id === id) {
        todo[propName] = !todo[propName];
      }
      return todo;
    });
  }
  onMakeActive = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, "active"),
      };
    });
  };
  onComplete = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, "completed"),
      };
    });
  };

  onClearCompleted = () => {
    this.setState(({ todoData }) => ({
      todoData: todoData.filter((todo) => !todo.completed),
    }));
  };

  render() {
    const { todoData, activeFilter } = this.state;
    const toDoCount = todoData.filter((todo) => !todo.completed).length;
    const filteredTodoData =
      activeFilter === "all"
        ? todoData
        : todoData.filter((todo) => todo[activeFilter]);
    return (
      <section className="todoapp">
        <header className="header">
          <h1>Todos</h1>
          <NewTaskForm onAdded={this.onTaskAdd} />
        </header>
        <section className="main">
          <TaskList
            todos={filteredTodoData}
            onDeleted={this.onTaskDelete}
            onMakeActive={this.onMakeActive}
            onComplete={this.onComplete}
          />
          <Footer
            toDo={toDoCount}
            onFilterChange={this.onFilterChange}
            activeFilter={activeFilter}
            onClearCompleted={this.onClearCompleted}
          />
        </section>
      </section>
    ); // JSX style
  }
}

// const el = React.createElement("h1", null, "helo world"); // JavaScript style
export default App;
