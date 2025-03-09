import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../TodoList';

describe('TodoList Component', () => {
  const mockTodos = [
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Write Tests', completed: true },
  ];
  const mockToggleTodo = jest.fn();
  const mockDeleteTodo = jest.fn();

  test('renders todos correctly', () => {
    render(
      <TodoList
        todos={mockTodos}
        toggleTodo={mockToggleTodo}
        deleteTodo={mockDeleteTodo}
      />
    );
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Write Tests')).toHaveStyle(
      'text-decoration: line-through'
    );
  });

  test('calls toggleTodo when a todo is clicked', () => {
    render(
      <TodoList
        todos={mockTodos}
        toggleTodo={mockToggleTodo}
        deleteTodo={mockDeleteTodo}
      />
    );
    const todoItem = screen.getByTestId('todo-item-1');
    fireEvent.click(todoItem);
    expect(mockToggleTodo).toHaveBeenCalledWith(1);
  });

  test('calls deleteTodo when delete button is clicked', () => {
    render(
      <TodoList
        todos={mockTodos}
        toggleTodo={mockToggleTodo}
        deleteTodo={mockDeleteTodo}
      />
    );
    const deleteButton = screen.getByTestId('delete-button-1');
    fireEvent.click(deleteButton);
    expect(mockDeleteTodo).toHaveBeenCalledWith(1);
  });
});