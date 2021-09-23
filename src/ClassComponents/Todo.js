import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import React, { Component } from 'react';

class Todo extends Component {

    render() {
        const { value, deleteTodo, editTodo, index } = this.props;
        return (
            <div className="todo">
                <div>{value}</div>
                <button onClick={()=> editTodo(index) }>
                    <EditIcon />
                </button>
                <button onClick={()=> deleteTodo(index) }>
                    <DeleteForeverIcon />
                </button>
            </div>
        )  
    }
    
}

export default Todo;
