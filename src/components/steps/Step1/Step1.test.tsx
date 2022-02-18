import React from 'react';
import { render, screen } from '@testing-library/react';

import Step1 from './Step1';

test('renders the legs image', () => {
  render(<Step1 />);
  const title = screen.getByAltText(/prosthetic leg diagram/i);
  expect(title).toBeInTheDocument();
});
