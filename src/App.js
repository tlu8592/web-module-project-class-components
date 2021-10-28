import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

import './style.css';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: []
    }
  }

  handleAddTask = (task) => {
    // console.log(task);
    const newTask = {
      task: task,
      id: this.state.todos.length,
      completed: false
    };

    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTask]
    });
  }

  handleToggleTask = task => {
    console.log(task);
    this.setState({
      ...this.state,
      todos: this.state.todos.map(todo => {
        if (todo.id === task.id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo;
      })
    })
  }

  handleClearCompleted = () => {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter(todo => !todo.completed)
    })
  }

  render() {
    console.log(this.state);
    return (
      <div className="app">
        <h1>Todo App</h1>
        <TodoForm handleAddTask={this.handleAddTask} />
        <TodoList 
          todos={this.state.todos} 
          handleToggleTask={this.handleToggleTask} 
        />
        <button className="clear-button" onClick={this.handleClearCompleted}>Clear Completed</button>
      </div>
    );
  }
}

export default App;
