import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState("")
  
  const handleChange = (e) => {
    setValue(e.target.value)
  };

  const handleSubmit = (e) => {
    // prevent default action which is reload of page after submitting the form
    e.preventDefault(); 
    addTodo(value);
    // clears the state value and 
    // since it is tied with the input field it is cleared as weell
    setValue("")
  };
  return (
    <form className='todoform' onSubmit={handleSubmit}>
        <input type="text" className="todo-input" value={value} placeholder="Enter Task"
        onChange={handleChange}/>
        <button type="submit" className='todo-btn'>Add Task</button>
    </form>
  )
}
