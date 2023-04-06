import React, { useState } from 'react';
import './App.css';
import TaskForm from './Componets/TaskForm';
import TaskDisplay from './Componets/TaskDisplay';


// App acts as the parent component and manages the state of the todo list
function App() {

// creates a variable to store all the changes
  const [todos, setTodos] = useState([]); // state is stored in the todos array, which is created using the useState hook


// creates a function for the child -- (TaskForm) --
  const addTask = (newTask) => {
    setTodos([...todos, newTask])
  }

// creates a function for the child -- (TaskDisplay) --
  const updateOrderList = (updatedList) => {
    setTodos(updatedList)
  }


  return (
    <div className='App'>
      <TaskForm addTask={addTask} />
      <TaskDisplay todos={todos}
        onUpdate={updateOrderList} />
    </div>
  )
}


export default App;