import React from 'react';

function Todo({ todos, toggleTodo, deleteTodo }) {
  return todos.map((todo, index) => (
    <div key={index}>
      <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(index)} />
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
      <button onClick={() => deleteTodo(index)}>削除</button>
    </div>
  ));
}

export default Todo;