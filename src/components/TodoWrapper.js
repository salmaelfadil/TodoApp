import React, {useState} from 'react'
import { TodoForm } from './TodoForm'
import { v4 as uuidv4 } from 'uuid';
import { DisplayTodos } from './DisplayTodos';
import { EditForm } from './EditForm';

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, {id: uuidv4(), task: todo, 
      completed: false, isEditing: false}])
    console.log(todos);
  }
  const toggleComplete = (id) => {
    setTodos(todos.map(todo => todo.id === id ? 
      {...todo, completed: !todo.completed} : todo ))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id) )
  }
  const editTodo = (id) => {
    setTodos(todos.map(todo => todo.id === id ?
      {...todo, isEditing : !todo.isEditing} : todo));
  }
  const editTask = (task,id) => {
    setTodos(todos.map(todo => todo.id === id ?
      {...todo, task, isEditing : !todo.isEditing} : todo));
  }

  return (
    <div className='TodoWrapper'>
      <h1>Let's Be Productive!</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo) => todo.isEditing ? (
        <EditForm key={todo.id} editTodo={editTask} todo={todo} />
      ) : (
      <DisplayTodos 
      key={todo.id}
      todo={todo} 
      toggleComplete={toggleComplete}
      deleteTodo={deleteTodo}
      editTodo={editTodo}
      />
      )
  )}
  </div>
  );
};

