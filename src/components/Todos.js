import React from 'react';
import Todo from './Todo';

function Todos({ todoList, deleteTodo, editTodo }) {

    return (
        <div className="todos">

            {todoList.map((item, index) => <Todo index={index} deleteTodo={deleteTodo} editTodo={editTodo} value={item} key={index} /> )}
        </div>
    )
}

export default Todos;
