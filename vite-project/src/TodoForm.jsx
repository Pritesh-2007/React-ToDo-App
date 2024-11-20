import React, { useState } from 'react';

function TodoForm({ addTask }) {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask({ text: task, completed: false });
      setTask("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb-4">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
        className="flex-grow p-2 border rounded-l-lg"
      />
      <button type="submit" className="p-2 bg-blue-500 text-white rounded-r-lg">
        Add
      </button>
    </form>
  );
}

export default TodoForm;
