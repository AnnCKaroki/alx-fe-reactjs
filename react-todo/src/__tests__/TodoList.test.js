import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  test('renders TodoList component', () => {
    render(<TodoList />);
    expect(screen.getByText('Todo List')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Add a new todo...')).toBeInTheDocument();
  });

  test('displays initial todos', () => {
    render(<TodoList />);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Write tests')).toBeInTheDocument();
    expect(screen.getByText('Build a todo app')).toBeInTheDocument();
  });

  test('adds a new todo', async () => {
    const user = userEvent.setup();
    render(<TodoList />);

    const input = screen.getByPlaceholderText('Add a new todo...');
    const addButton = screen.getByText('Add Todo');

    await user.type(input, 'New todo item');
    await user.click(addButton);

    expect(screen.getByText('New todo item')).toBeInTheDocument();
    expect(input).toHaveValue('');
  });

  test('does not add empty todo', async () => {
    const user = userEvent.setup();
    render(<TodoList />);

    const addButton = screen.getByText('Add Todo');
    const initialTodos = screen.getAllByClassName('todo-item');

    await user.click(addButton);

    const finalTodos = screen.getAllByClassName('todo-item');
    expect(finalTodos).toHaveLength(initialTodos.length);
  });

  test('toggles todo completion status', async () => {
    const user = userEvent.setup();
    render(<TodoList />);

    const todoText = screen.getByText('Learn React');
    expect(todoText).toHaveStyle('text-decoration: none');

    await user.click(todoText);

    expect(todoText).toHaveStyle('text-decoration: line-through');
  });

  test('deletes a todo', async () => {
    const user = userEvent.setup();
    render(<TodoList />);

    expect(screen.getByText('Learn React')).toBeInTheDocument();

    const deleteButtons = screen.getAllByText('Delete');
    await user.click(deleteButtons[0]);

    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
  });

  test('handles form submission with Enter key', async () => {
    const user = userEvent.setup();
    render(<TodoList />);

    const input = screen.getByPlaceholderText('Add a new todo...');

    await user.type(input, 'Todo via Enter key');
    await user.keyboard('{Enter}');

    expect(screen.getByText('Todo via Enter key')).toBeInTheDocument();
    expect(input).toHaveValue('');
  });

  test('initially completed todo displays as completed', () => {
    render(<TodoList />);

    const completedTodo = screen.getByText('Build a todo app');
    expect(completedTodo).toHaveStyle('text-decoration: line-through');

    const completedTodoItem = completedTodo.closest('.todo-item');
    expect(completedTodoItem).toHaveClass('completed');
  });

  test('todo counter reflects correct number', () => {
    render(<TodoList />);

    const todoItems = screen.getAllByClassName('todo-item');
    expect(todoItems).toHaveLength(3);
  });
});
