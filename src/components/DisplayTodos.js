import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const DisplayTodos = ( {todo, toggleComplete, deleteTodo, editTodo} ) => {
  return (
  <div className='Todo'>
    <span className={`${todo.completed ? "completed" : "incompleted"}`} 
    onClick={() => toggleComplete(todo.id)}>{todo.task}</span>
    <span>
      <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(todo.id)}/>
      <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(todo.id)}/>
    </span>
  </div>
  )
}
// style={{ color: todo.completed ? 'green' : 'black'
