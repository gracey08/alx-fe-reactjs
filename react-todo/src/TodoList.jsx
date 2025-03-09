import React from 'react';

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul data-testid="todo-list">
      {todos.map((todo) => (
        <li
          key={todo.id}
          onClick={() => toggleTodo(todo.id)}
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
              deleteTodo(todo.id);
            }}
            style={{ marginLeft: '10px' }}
            data-testid={`delete-button-${todo.id}`}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;