import React, { useState } from 'react';
import '../css/AddTodoForm.css';

function AddTodoForm({ addTask }) {
  const [taskContent, setTaskContent] = useState('');

  const handleInputChange = (e) => {
    setTaskContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskContent.trim() !== '') {
      addTask(taskContent);
      setTaskContent('');
    }
  };

  return (
    <form className="add-todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter task..."
        value={taskContent}
        onChange={handleInputChange}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default AddTodoForm;
