import React from 'react';

function TodoItems({ task, index, deleteTask, toggleComplete }) {
  return (
    <li className="flex items-center mb-2"> 
    <span className={`flex-grow cursor-pointer ${task.completed ? "line-through  text-red-600" : ""}`} onClick={() => toggleComplete(index)} >
         {task.text} 
    </span>
     <button onClick={() => deleteTask(index)} className="ml-2 p-1 bg-red-500 text-white rounded"> Delete </button> 
     </li>
  );
}

export default TodoItems;
