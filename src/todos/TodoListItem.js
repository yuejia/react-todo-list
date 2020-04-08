import React from 'react'
import './TodoListItem.css'
const TodoListItem = ({ todo }) => 
(
    <section className="card mb-3">
        <div className="card-body"> 
        <h4 className="card-title">{todo.text}</h4>
        <div className="text-right">
            <button className="card-link completed-button">Mark As Completed</button>
            <button className="card-link remove-button">Remove</button>
        </div>
        </div>
    </section>
)

export default TodoListItem;