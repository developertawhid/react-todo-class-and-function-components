import AddBoxIcon from '@material-ui/icons/AddBox';
import React, { Component } from 'react';

class TodoInput extends Component {

    render() {
        const { handleSubmit, todo, setTodo } = this.props;
        return (
            <form onSubmit={ handleSubmit } className="todoInput">

                <input value={todo} onChange={(e) => setTodo(e.target.value) } type="text" placeholder="Write a todo" />
                <button type="submit">
                    <AddBoxIcon fontSize="large" className="addBoxIcon" />
                </button>

            </form>
        )
    }

    
}

export default TodoInput;
