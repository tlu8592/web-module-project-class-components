// class component because form state will be managed in this component

import React from 'react'; // or import React, { Component } from 'react'

export default class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            todoText: ''
        }
    }

    handleChanges = (e) => {
        const { name, target } = e.target;
        this.setState({
            [name]: value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.todoText);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor='todo-input'>Add Todo: </label>
                <input 
                    id='todo-input'
                    name='todoText' 
                    value={this.state.todoText} 
                    onChange={this.handleChanges} 
                />
                <button>Add Todo</button>
            </form>
        )
    }
}