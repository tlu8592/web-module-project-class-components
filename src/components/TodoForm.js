import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            input: ""
        }
    }

    handleChanges = event => {
        console.log(event.target.value);
        this.setState({
            ...this.state,
            input: event.target.value
        });
    }

    handleSubmit = event => { 
        event.preventDefault();
        this.props.handleAddTask(this.state.input);
        this.setState({
            ...this.state,
            input: "",
        })
    }

    render() {
        return(
            <div className="todo-form">
                <h2>Anything to Do?</h2>
                <form className='form-container' onSubmit={this.handleSubmit}>
                    <input 
                        type='text'
                        name='task'
                        value={this.state.input}
                        onChange={this.handleChanges}
                    />
                    <button className="add-button">Add task</button>
                </form>
            </div> 
        )
        
    }
}

export default TodoForm;