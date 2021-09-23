import React, { Component } from 'react';
import './App.css';
import TodoInput from './ClassComponents/TodoInput';
import Todos from './ClassComponents/Todos';
import todoSave from './todoSave';

class ClassTodoApp extends Component {

    state = {
        todoList: false,
        todo: '',
        state: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const { state, todo } = this.state;
  
        if(state) {
          this.setState((perValue) => {
            const array = [...perValue]
            array[state.number] = todo;
            todoSave('classTodoList', array);
            return { todoList: array, todo: '', state: '' };
          });
        }else{
        
          if(todo.trim()){

            this.setState((prevState) => {
                const array =  [...prevState.todoList, todo.trim()];
                todoSave('classTodoList', array);
                return ({todoList: array, todo: ''});
            });
  
          }
        }
    }

    deleteTodo = (number) => {
        this.setState((prevState) => {
            const array =  prevState.todoList.filter((item, index)=> index!==number );
            todoSave('classTodoList', array);
            return {todoList: array };
        });
    }

    editTodo = (number) => {
        const { todoList } = this.state;
        this.setState({todo: todoList[number], state: {number, edit: 'edit'} });
      }

    render() {
        const { todoList, todo } = this.state;
        const { handleSubmit, deleteTodo, editTodo } = this;

        if(!todoList) {
            this.setState({todoList: todoSave('classTodoList') });
        }

        const inputFunc = (value) => {
            this.setState({todo: value})
        }
        return (
            <div className="box">
                <h1>AbacaxiGuy's Todo List</h1>
                <TodoInput handleSubmit={ handleSubmit } todo={todo} setTodo={inputFunc} />
                <Todos deleteTodo={deleteTodo} editTodo={editTodo} todoList={todoList} />
            </div>
        )
    }
}

export default ClassTodoApp;
