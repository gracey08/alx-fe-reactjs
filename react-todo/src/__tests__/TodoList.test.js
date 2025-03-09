import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

describe('TodoList Component', () => {
  // Test initial render
  test('renders initial todos correctly', () => {
    render(<App />);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Write Tests')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem').length).toBe(2);
  });

  // Test adding a todo
  test('adds a new todo', () => {
    render(<App />);
    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByTestId('add-button');

    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(addButton);

    expect(screen.getByText('New Todo')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem').length).toBe(3);
  });

  // Test toggling a todo
  test('toggles todo completion status', () => {
    render(<App />);
    const todoItem = screen.getByTestId('todo-item-1'); // 'Learn React'

    expect(todoItem).not.toHaveStyle('text-decoration: line-through');
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle('text-decoration: line-through');
    fireEvent.click(todoItem);
    expect(todoItem).not.toHaveStyle('text-decoration: line-through');
  });

  // Test deleting a todo
  test('deletes a todo', () => {
    render(<App />);
    const deleteButton = screen.getByTestId('delete-button-1'); // Delete 'Learn React'

    fireEvent.click(deleteButton);
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
    expect(screen.getAllByRole('listitem').length).toBe(1);
  });
});