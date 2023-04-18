import React, { useState } from 'react';

import NewTaskForm from '../new-task-form';
import TaskList from '../task-list';
import Footer from '../footer';

import './app.css';

function App() {
  function createNewTask(label) {
    return {
      id: Math.floor(Date.now() * Math.random()),
      label,
      created: new Date(),
      completed: false,
      editing: false,
      active: false,
    };
  }
  function toggleProperty(arr, id, propName) {
    return arr.map((todo) => {
      if (todo.id === id) {
        todo[propName] = !todo[propName];
      }
      return todo;
    });
  }
  const [todoData, setTodoData] = useState([
    createNewTask('Completed task'),
    createNewTask('Editing task'),
    createNewTask('Active task'),
  ]);
  const [activeFilter, setActiveFilter] = useState('all');
  const onToggleActive = (id) => {
    setTodoData(toggleProperty(todoData, id, 'active'));
  };
  const onToggleEditing = (id) => {
    setTodoData(toggleProperty(todoData, id, 'editing'));
  };
  const onComplete = (id) => {
    setTodoData(toggleProperty(todoData, id, 'completed'));
  };
  const onClearCompleted = () => {
    setTodoData(todoData.filter((todo) => !todo.completed));
  };
  const onFilterChange = (value) => {
    setActiveFilter(value);
  };
  const onTaskDelete = (id) => {
    setTodoData(todoData.filter((i) => i.id !== id));
  };
  const onTaskAdd = (message) => {
    const newItem = createNewTask(message);

    setTodoData([...todoData, newItem]);
  };
  const onLabelChange = (value, id) => {
    setTodoData(
      todoData.map((todo) => {
        if (todo.id === id) {
          todo.label = value;
        }
        return todo;
      })
    );
  };

  const toDoCount = todoData.filter((todo) => !todo.completed).length;
  const filteredTodoData = activeFilter === 'all' ? todoData : todoData.filter((todo) => todo[activeFilter]);
  // eslint-disable-next-line
  console.log(todoData);
  return (
    <section className="todoapp">
      <header className="header">
        <h1>Todos</h1>
        <NewTaskForm onAdded={onTaskAdd} />
      </header>
      <section className="main">
        <TaskList
          todos={filteredTodoData}
          onDeleted={onTaskDelete}
          onComplete={onComplete}
          onLabelChange={onLabelChange}
          onToggleActive={onToggleActive}
          onToggleEditing={onToggleEditing}
        />
        <Footer
          toDo={toDoCount}
          onFilterChange={onFilterChange}
          activeFilter={activeFilter}
          onClearCompleted={onClearCompleted}
        />
      </section>
    </section>
  );
}

export default App;
