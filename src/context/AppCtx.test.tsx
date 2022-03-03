import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from '../controllers/App';
import { PRIORITIES_SELECTED } from '../types';
import { AppStateProvider } from './AppCtx';
import { SURVEY_QUESTIONS, QUESTIONS_ANSWERED } from './constants';
import { AppReducer } from './AppReducer';
import { prioritiesList } from '../components/steps/Step3/Priorities';

window.scrollTo = jest.fn();

describe('AppStateProvider', () => {
  test('AppStateProvider renders', () => {
    render(
      <AppStateProvider>
        <App />
      </AppStateProvider>,
    );

    const aDiv = screen.getByTestId('home-container');
    expect(aDiv).toBeInTheDocument();
  });

  test('Context Methods', async () => {
    render(
      <AppStateProvider>
        <App />
      </AppStateProvider>,
    );

    const getStarted = screen.getByTestId('get_started');
    fireEvent.click(getStarted);
    const nextBtn = screen.getByTestId('next-btn');
    fireEvent.click(nextBtn);
    const step2 = screen.getByTestId('step-2');
    expect(step2).toBeInTheDocument();

    const disagree = screen.getAllByDisplayValue('disagree');
    fireEvent.click(disagree[0], { target: { value: 'disagree' } });
    expect((disagree[0] as HTMLInputElement).checked).toBe(true);

    fireEvent.click(nextBtn);
  });
});

describe('AppReducer', () => {
  test('PRIORITIES_SELECTED', () => {
    let state = {
      priorities: [],
      surveyQuestions: SURVEY_QUESTIONS,
    };
    AppReducer(state, {
      type: PRIORITIES_SELECTED,
      payload: [prioritiesList[0]],
    });
    AppReducer(state, {
      type: QUESTIONS_ANSWERED,
      payload: {
        options: {
          question:
            'When there is more than one option for a part of my prosthesis, I should be told about each one.*',
          importance: 'disagree',
        },
        history: {
          question:
            'I believe that my prosthetist needs to know everything about my medical history to take good care of me.*',
          importance: '',
        },
        choices: {
          question:
            'I would rather have my prosthetist make decisions about what’s best for my prosthesis than to be given a whole lot of choices.*',
          importance: '',
        },
      },
    });
  });
});
