import React from 'react';

function TodoList({ todos, onToggle, onDelete }) {
  return (
    <ul data-testid="todo-list">
      {todos.map((todo) => (
        <li
          key={todo.id}
          onClick={() => onToggle(todo.id)}
          style={{
            textDecoration: todo.completed ? 'line-through' : 'none',
            cursor: 'pointer',
          }}
          data-testid={`todo-item-${todo.id}`}
        >
          {todo.text}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDelete(todo.id);
            }}
            data-testid={`delete-button-${todo.id}`}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;