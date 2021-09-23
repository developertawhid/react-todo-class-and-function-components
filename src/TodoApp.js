import React, { useState } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import Todos from './components/Todos';
import todoSave from './todoSave';


function TodoApp() {
  const [todoList, setTodoList] = useState(false)
  const [todo, setTodo] = useState('')
  const [state, setState] = useState('')

  if(!todoList) {
    setTodoList(todoSave('funtionTodoList'))
  }
  

  const handleSubmit = (e) => {
      e.preventDefault();

      if(state) {
        setTodoList((perValue) => {
          const array = [...perValue]
          array[state.number] = todo;
          todoSave('funtionTodoList', array)
          return array;
        });
        setState('')
        setTodo('');
      }else{
      
        if(todo.trim()){

            setTodoList((perValue) => {
              const array = [...perValue, todo.trim()];
              todoSave('funtionTodoList', array);
              return array;
            }
            );
            setTodo('');
        }
      }
  }


  const deleteTodo = (number) => {
    setTodoList((prevState) => {
      const array = prevState.filter((item, index)=> index!==number );
      todoSave('funtionTodoList', array)
      return array;
    });
  }

  const editTodo = (number) => {
    setTodo(todoList[number]);
    setState({number, edit: 'edit'})
  }

  return (
    <div className="box">
      <h1>AbacaxiGuy's Todo List</h1>
      <TodoInput handleSubmit={ handleSubmit } todo={todo} setTodo={setTodo} />
      <Todos deleteTodo={deleteTodo} editTodo={editTodo} todoList={todoList} />
    </div>
  )
}

export default TodoApp;
