import { fireEvent, render, screen } from '@testing-library/react';

import Step2 from './Step2';
import AgreeRadio from './AgreeRadio';

describe('Step2', () => {
  test('renders the the step wrapper component', () => {
    render(<Step2 />);
    const step2 = screen.getByTestId('step-2');
    expect(step2).toBeInTheDocument();
  });

  test('answers a question', () => {
    render(<Step2 />);

    const disagree = screen.getAllByDisplayValue('disagree');
    fireEvent.click(disagree[0], { target: { value: 'disagree' } });
    expect((disagree[0] as HTMLInputElement).checked).toBe(false);
  });
});

describe('AgreeRadio', () => {
  test('renders the radio', () => {
    render(
      <AgreeRadio
        id="options"
        question={{ importance: '', question: 'question-prop' }}
        answerQuestion={() => {}}
      />,
    );
    const label = screen.getByText('question-prop');
    expect(label).toBeInTheDocument();
  });

  test('handleChange', () => {
    const question = { importance: '', question: 'question-prop' };

    const answerQuestion = () => (question.importance = 'disagree');

    render(
      <AgreeRadio
        id="options"
        question={question}
        answerQuestion={answerQuestion}
      />,
    );
    const disagree = screen.getByDisplayValue('disagree');
    fireEvent.click(disagree, { target: { value: 'disagree' } });
    expect((disagree as HTMLInputElement).checked).toBe(false);
  });
});
