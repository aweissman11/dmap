import { render, screen } from '@testing-library/react';
import { AppCtx } from '../../context/AppCtx';
import { prioritiesList } from '../steps/Step3/Priorities';
import { SURVEY_QUESTIONS } from '../../context/constants';

import AllAnswers from './AllAnswers';

describe('AllAnswers', () => {
  test('renders the legs image', () => {
    render(<AllAnswers />);
    const title = screen.getByText(/Communication/i);
    expect(title).toBeInTheDocument();
  });

  test('renders with some priorities and no answered questions', () => {
    render(
      <AppCtx.Provider
        value={{
          priorities: prioritiesList,
          surveyQuestions: SURVEY_QUESTIONS,
        }}
      >
        <AllAnswers />
      </AppCtx.Provider>,
    );
    expect(screen.getByText('Less Important')).toBeInTheDocument();
  });

  test('renders with some priorities and an answered questions', () => {
    const answeredQ = {
      ...SURVEY_QUESTIONS,
    };
    answeredQ.options.importance = 'agree';
    render(
      <AppCtx.Provider
        value={{
          priorities: prioritiesList,
          surveyQuestions: answeredQ,
        }}
      >
        <AllAnswers />
      </AppCtx.Provider>,
    );
    expect(screen.getByText('Less Important')).toBeInTheDocument();
  });
});
