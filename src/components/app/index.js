import React, { Component } from 'react';

import NewTaskForm from '../new-task-form';
import TaskList from '../task-list';
import Footer from '../footer';

import './app.css';

class App extends Component {
  static createNewTask(label) {
    return {
      id: Math.floor(Date.now() * Math.random()),
      label,
      created: new Date(),
      completed: false,
      editing: false,
      active: false,
    };
  }

  static toggleProperty(arr, id, propName) {
    return arr.map((todo) => {
      const item = { ...todo };
      if (todo.id === id) {
        item[propName] = !todo[propName];
      }
      return todo;
    });
  }

  constructor() {
    super();
    this.state = {
      todoData: [
        this.createNewTask('Completed task'),
        this.createNewTask('Editing task'),
        this.createNewTask('Active task'),
      ],
      activeFilter: 'all',
    };
  }

  onMakeActive = (id) => {
    this.setState(({ todoData }) => ({
      todoData: this.toggleProperty(todoData, id, 'active'),
    }));
  };

  onComplete = (id) => {
    this.setState(({ todoData }) => ({
      todoData: this.toggleProperty(todoData, id, 'completed'),
    }));
  };

  onClearCompleted = () => {
    this.setState(({ todoData }) => ({
      todoData: todoData.filter((todo) => !todo.completed),
    }));
  };

  onFilterChange = (value) => {
    this.setState({
      activeFilter: value,
    });
  };

  onTaskDelete = (id) => {
    this.setState(({ todoData }) => ({
      todoData: todoData.filter((i) => i.id !== id),
    }));
  };

  onTaskAdd = (message) => {
    const newItem = this.createNewTask(message);

    this.setState(({ todoData }) => ({
      todoData: [...todoData, newItem],
    }));
  };

  render() {
    const { todoData, activeFilter } = this.state;
    const toDoCount = todoData.filter((todo) => !todo.completed).length;
    const filteredTodoData = activeFilter === 'all' ? todoData : todoData.filter((todo) => todo[activeFilter]);
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
    );
  }
}

export default App;
