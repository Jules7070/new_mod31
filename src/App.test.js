// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App component', () => {
  render(<App />);
  expect(screen.getByText(/React Testing App/i)).toBeInTheDocument();
});

