// src/__tests__/TodoList.test.jsx
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import TodoList from '../TodoList';
import '@testing-library/jest-dom';

describe('TodoList', () => {
  it('renders initial todos', () => {
    render(<TodoList />);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
    expect(screen.getByText('Write Tests')).toBeInTheDocument();
  });

  it('adds a new todo', () => {
    render(<TodoList />);
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'New Todo' },
    });
    fireEvent.click(screen.getByText('Add Todo'));
    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });

  it('toggles a todo', () => {
    render(<TodoList />);
    const todoItem = screen.getByText('Learn React');
    expect(todoItem).toHaveStyle('text-decoration: none');
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle('text-decoration: line-through');
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle('text-decoration: none');
  });

  it('deletes a todo', () => {
    render(<TodoList />);
    const todoItem = screen.getByText('Learn React');
    fireEvent.click(screen.getAllByText('Delete')[0]);
    expect(screen.queryByText('Learn React')).toBeNull();
  });
});