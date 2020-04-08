import React from 'react';
import TodoListItem from './TodoListItem';
import NewTodoFrom from './NewTodoForm';
import './TodoList.css'

const TodoList = ({ todos =[{text: "hello"}, {text: "world"}] }) => (
    <div className="">
        <NewTodoFrom />
        {todos.map((todo, i) => <TodoListItem key={i} todo={todo} />)}
    </div>
)

export default TodoList;