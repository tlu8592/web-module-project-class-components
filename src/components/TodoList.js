// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div className='todo-list'>
                <h2>To-Do List</h2>
                {this.props.todos.map(todo => {
                    return <Todo handleToggleTask={this.props.handleToggleTask} key={todo.id} todo={todo} />
                })}
            </div>
            
        )
    }
}

export default TodoList;