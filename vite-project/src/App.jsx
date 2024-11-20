import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './index.css'
import Header from './Header';
function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const toggleComplete = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  return (
    <div className="container mx-auto mt-10 p-4 bg-gray-100 rounded-lg shadow-md"> 
      <Header></Header>
     <TodoForm addTask={addTask} />
     <TodoList tasks={tasks} deleteTask={deleteTask} toggleComplete={toggleComplete} /> 
     </div>
  );
}

export default App;
