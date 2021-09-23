import React, { Component } from 'react';
import Todo from './Todo';

class Todos extends Component {

    render() {
        const { todoList, deleteTodo, editTodo } = this.props;
        
        return (
            <div className="todos">

                {todoList && todoList?.map((item, index) => <Todo index={index} deleteTodo={deleteTodo} editTodo={editTodo} value={item} key={index} /> )}
            </div>
        )
    }
    
}

export default Todos;
