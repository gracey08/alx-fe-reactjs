import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

describe('Todo List App', () => {
  // Test initial render
  test('renders initial todos', () => {
    render(<App />);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Write Tests')).toBeInTheDocument();
  });

  // Test adding a todo
  test('adds a new todo', () => {
    render(<App />);
    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByTestId('add-button');

    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(addButton);

    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });

  // Test toggling a todo
  test('toggles a todo completion status', () => {
    render(<App />);
    const todo = screen.getByText('Learn React');

    expect(todo).not.toHaveStyle('text-decoration: line-through');
    fireEvent.click(todo);
    expect(todo).toHaveStyle('text-decoration: line-through');
    fireEvent.click(todo);
    expect(todo).not.toHaveStyle('text-decoration: line-through');
  });

  // Test deleting a todo
  test('deletes a todo', () => {
    render(<App />);
    const deleteButton = screen.getByTestId('delete-button-1'); // Delete first todo

    fireEvent.click(deleteButton);
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
  });
});