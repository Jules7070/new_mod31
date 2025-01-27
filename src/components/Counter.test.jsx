// src/components/Counter.test.jsx
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test('renders Counter component', () => {
  render(<Counter />);
  expect(screen.getByText(/Counter:/i)).toBeInTheDocument();
});

test('increments the counter', () => {
  render(<Counter />);
  const incrementButton = screen.getByText(/Increment/i);
  fireEvent.click(incrementButton);
  expect(screen.getByText(/Counter: 1/i)).toBeInTheDocument();
});

test('decrements the counter', () => {
  render(<Counter />);
  const decrementButton = screen.getByText(/Decrement/i);
  fireEvent.click(decrementButton);
  expect(screen.getByText(/Counter: -1/i)).toBeInTheDocument();
});

test('resets the counter', () => {
  render(<Counter />);
  const resetButton = screen.getByText(/Reset/i);
  fireEvent.click(resetButton);
  expect(screen.getByText(/Counter: 0/i)).toBeInTheDocument();
});
