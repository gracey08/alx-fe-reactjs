import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../TodoList';

// Mock functions for onToggle and onDelete
const mockOnToggle = jest.fn();
const mockOnDelete = jest.fn();

// Sample todos for testing
const sampleTodos = [
  { id: 1, text: 'Learn React', completed: false },
  { id: 2, text: 'Write Tests', completed: true },
];

describe('TodoList Component', () => {
  // Test initial render
  test('renders initial todos correctly', () => {
    render(<TodoList todos={sampleTodos} onToggle={mockOnToggle} onDelete={mockOnDelete} />);
    
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Write Tests')).toBeInTheDocument();
    expect(screen.getByText('Learn React')).not.toHaveStyle('text-decoration: line-through');
    expect(screen.getByText('Write Tests')).toHaveStyle('text-decoration: line-through');
  });

  // Test toggling a todo
  test('calls onToggle when a todo is clicked', () => {
    render(<TodoList todos={sampleTodos} onToggle={mockOnToggle} onDelete={mockOnDelete} />);
    
    const todoItem = screen.getByTestId('todo-item-1');
    fireEvent.click(todoItem);
    
    expect(mockOnToggle).toHaveBeenCalledWith(1);
    expect(mockOnToggle).toHaveBeenCalledTimes(1);
  });

  // Test deleting a todo
  test('calls onDelete when delete button is clicked', () => {
    render(<TodoList todos={sampleTodos} onToggle={mockOnToggle} onDelete={mockOnDelete} />);
    
    const deleteButton = screen.getByTestId('delete-button-2');
    fireEvent.click(deleteButton);
    
    expect(mockOnDelete).toHaveBeenCalledWith(2);
    expect(mockOnDelete).toHaveBeenCalledTimes(1);
    expect(mockOnToggle).not.toHaveBeenCalled(); // Ensure toggle isn’t triggered
  });
});