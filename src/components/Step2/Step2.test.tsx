import React from 'react';
import {
  fireEvent,
  getByDisplayValue,
  render,
  screen,
} from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';

import Step2, { useStyles } from './Step2';
import AgreeRadio from './AgreeRadio';

describe('Step2', () => {
  test('useStyles returns a styles object', () => {
    const { result } = renderHook(() => useStyles());
    expect(result.current.paper).toEqual('makeStyles-paper-1');
  });

  test('renders the the step wrapper component', () => {
    render(<Step2 />);
    const step2 = screen.getByTestId('step-2');
    expect(step2).toBeInTheDocument();
  });
});

describe('AgreeRadio', () => {
  test('renders the radio', () => {
    render(<AgreeRadio question="question-prop" />);
    const label = screen.getByText('question-prop');
    expect(label).toBeInTheDocument();
  });

  test('handleChange', () => {
    render(<AgreeRadio question="question-prop" />);
    const disagree = screen.getByDisplayValue('disagree');
    fireEvent.click(disagree, { target: { value: 'disagree' } });
    expect((disagree as HTMLInputElement).checked).toBe(true);
  });
});
