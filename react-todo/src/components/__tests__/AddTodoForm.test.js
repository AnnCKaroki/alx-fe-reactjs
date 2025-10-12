import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AddTodoForm from '../AddTodoForm';

describe('AddTodoForm Component', () => {
  test('renders form elements', () => {
    const mockOnAddTodo = jest.fn();
    render(<AddTodoForm onAddTodo={mockOnAddTodo} />);

    expect(screen.getByPlaceholderText('Add a new todo...')).toBeInTheDocument();
    expect(screen.getByText('Add Todo')).toBeInTheDocument();
  });

  test('calls onAddTodo with input value when form is submitted', async () => {
    const user = userEvent.setup();
    const mockOnAddTodo = jest.fn();
    render(<AddTodoForm onAddTodo={mockOnAddTodo} />);

    const input = screen.getByPlaceholderText('Add a new todo...');
    const button = screen.getByText('Add Todo');

    await user.type(input, 'Test todo');
    await user.click(button);

    expect(mockOnAddTodo).toHaveBeenCalledWith('Test todo');
    expect(mockOnAddTodo).toHaveBeenCalledTimes(1);
  });

  test('clears input after form submission', async () => {
    const user = userEvent.setup();
    const mockOnAddTodo = jest.fn();
    render(<AddTodoForm onAddTodo={mockOnAddTodo} />);

    const input = screen.getByPlaceholderText('Add a new todo...');
    const button = screen.getByText('Add Todo');

    await user.type(input, 'Test todo');
    await user.click(button);

    expect(input).toHaveValue('');
  });

  test('does not call onAddTodo for empty input', async () => {
    const user = userEvent.setup();
    const mockOnAddTodo = jest.fn();
    render(<AddTodoForm onAddTodo={mockOnAddTodo} />);

    const button = screen.getByText('Add Todo');

    await user.click(button);

    expect(mockOnAddTodo).not.toHaveBeenCalled();
  });

  test('does not call onAddTodo for whitespace-only input', async () => {
    const user = userEvent.setup();
    const mockOnAddTodo = jest.fn();
    render(<AddTodoForm onAddTodo={mockOnAddTodo} />);

    const input = screen.getByPlaceholderText('Add a new todo...');
    const button = screen.getByText('Add Todo');

    await user.type(input, '   ');
    await user.click(button);

    expect(mockOnAddTodo).not.toHaveBeenCalled();
  });

  test('updates input value when typing', async () => {
    const user = userEvent.setup();
    const mockOnAddTodo = jest.fn();
    render(<AddTodoForm onAddTodo={mockOnAddTodo} />);

    const input = screen.getByPlaceholderText('Add a new todo...');

    await user.type(input, 'Test input');

    expect(input).toHaveValue('Test input');
  });
});
