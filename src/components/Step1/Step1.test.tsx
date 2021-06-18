import React from 'react';
import { render, screen } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';

import Step1, { useStyles } from './Step1';

test('useStyles returns a styles object', () => {
  const { result } = renderHook(() => useStyles());
  expect(result.current.root).toEqual('makeStyles-root-1');
});

test('renders the legs image', () => {
  render(<Step1 />);
  const title = screen.getByAltText(/prosthetic leg diagram/i);
  expect(title).toBeInTheDocument();
});
