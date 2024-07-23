import React from 'react';
import Task from './Task';
import '../css/TodoList.css';

function TodoList({ tasks, toggleTaskCompletion, deleteTask }) {
  return (
    <div className="todo-list">
      {tasks.map(task => (
        <Task
          key={task.id}
          task={task}
          toggleTaskCompletion={toggleTaskCompletion}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
}

export default TodoList;
