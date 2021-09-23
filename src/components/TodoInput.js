import AddBoxIcon from '@material-ui/icons/AddBox';
import React from 'react';

function TodoInput({ handleSubmit, todo, setTodo }) {


    return (
        <form onSubmit={ handleSubmit } className="todoInput">

            <input value={todo} onChange={(e) => setTodo(e.target.value) } type="text" placeholder="Write a todo" />
            <button type="submit">
                <AddBoxIcon fontSize="large" className="addBoxIcon" />
            </button>

        </form>
    )
}

export default TodoInput;
