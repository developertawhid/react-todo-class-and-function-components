import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import React from 'react';

function Todo({ value, deleteTodo, editTodo, index }) {
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

export default Todo;
