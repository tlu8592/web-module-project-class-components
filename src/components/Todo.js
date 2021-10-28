import React from 'react';
import './Todo.css';

class Todo extends React.Component {
    handleClick = () => {
        this.props.handleToggleTask(this.props.todo);
    }

    render() {
        console.log(this.props)
        return (
            <div onClick={this.handleClick} className={`task${this.props.todo.completed ? ' completed' : ''}`}>
                <p>{this.props.todo.task}</p>
            </div>
        );
    }
}

export default Todo;