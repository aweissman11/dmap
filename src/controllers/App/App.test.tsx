import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

window.scrollTo = jest.fn();

test('renders learn react link', () => {
  render(<App />);
  const title = screen.getByText(/d-map/i);
  expect(title).toBeInTheDocument();
});
