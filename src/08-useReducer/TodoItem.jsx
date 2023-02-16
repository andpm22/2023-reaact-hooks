import React from 'react'

export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
    console.log(todo.id);
    return (
        <>
            <li className="list-group-item d-flex justify-content-between">
                <span 
                    className={`align-self-center ${ (todo.done) ? 'text-decoration-line-through': ''}`}
                    onClick={() => onToggleTodo(todo.id)}
                    >
                    {todo.description}
                </span>
                <button
                    className="btn btn-danger mt-1"
                    onClick={() => onDeleteTodo(todo.id)}
                >Borrar</button>
            </li>

        </>
    )
}
