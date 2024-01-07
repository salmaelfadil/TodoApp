import React, { useState } from 'react'

export const EditForm = ( {editTodo, todo} ) => {
  const [value, setValue] = useState(todo.task)

  const handleChange = (e) => {
    setValue(e.target.value)
  };
  const handleSubmit = (e) => {
    // prevent default action which is reload of page after submitting the form
    e.preventDefault(); 
    editTodo(value, todo.id);
  };
  return (
    <form className='todoform' onSubmit={handleSubmit}>
        <input type="text" 
        className="todo-input" value={value} 
        placeholder="Update Task"
        onChange={handleChange}/>
        <button type="submit" className='todo-btn'>Update Task</button>
    </form>
  )
}

