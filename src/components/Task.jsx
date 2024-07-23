import React from 'react';
import '../css/Task.css';

function Task({ task, toggleTaskCompletion, deleteTask }) {
  return (
    <div className="task">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTaskCompletion(task.id)}
      />
      <span className={task.completed ? 'completed' : ''}>{task.content}</span>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
}

export default Task;
