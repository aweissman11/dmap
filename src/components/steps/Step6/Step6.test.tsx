import React from 'react';
import { render, screen } from '@testing-library/react';

import Step2 from './Step6';

describe('Step2', () => {
  test('renders the the step wrapper component', () => {
    render(<Step2 />);
    const step2 = screen.getByTestId('step-2');
    expect(step2).toBeInTheDocument();
  });
});
