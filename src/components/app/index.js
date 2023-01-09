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
      if (todo.id === id) {
        todo[propName] = !todo[propName];
      }
      return todo;
    });
  }

  constructor() {
    super();
    this.state = {
      todoData: [
        App.createNewTask('Completed task'),
        App.createNewTask('Editing task'),
        App.createNewTask('Active task'),
      ],
      activeFilter: 'all',
    };
  }

  onToggleActive = (id) => {
    this.setState(({ todoData }) => ({
      todoData: App.toggleProperty(todoData, id, 'active'),
    }));
  };

  onToggleEditing = (id) => {
    this.setState(({ todoData }) => ({
      todoData: App.toggleProperty(todoData, id, 'editing'),
    }));
  };

  onComplete = (id) => {
    this.setState(({ todoData }) => ({
      todoData: App.toggleProperty(todoData, id, 'completed'),
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
    const newItem = App.createNewTask(message);

    this.setState(({ todoData }) => ({
      todoData: [...todoData, newItem],
    }));
  };

  onLabelChange = (value, id) => {
    this.setState(({ todoData }) => ({
      todoData: todoData.map((todo) => {
        if (todo.id === id) {
          todo.label = value;
        }
        return todo;
      }),
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
            onComplete={this.onComplete}
            onLabelChange={this.onLabelChange}
            onToggleActive={this.onToggleActive}
            onToggleEditing={this.onToggleEditing}
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
