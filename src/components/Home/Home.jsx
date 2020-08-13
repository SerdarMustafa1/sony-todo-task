import React from 'react';

import TodoList from './TodoList/TodoListContainer';

import './assets/styles/index.css';

const Home = () => {
  return (
    <div>
      <div className="app-header">
        <h1>Sony To-Do App</h1>
      </div>
      <div className="main-content">
        <TodoList />
      </div>
    </div>
  );
};

export default Home;
