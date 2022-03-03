import { TImportance, TSurveyQuestions } from '../types';

export const SURVEY_QUESTIONS: TSurveyQuestions = {
  options: {
    question:
      'When there is more than one option for a part of my prosthesis, I should be told about each one.*',
    importance: '' as TImportance,
  },
  history: {
    question:
      'I believe that my prosthetist needs to know everything about my medical history to take good care of me.*',
    importance: '' as TImportance,
  },
  choices: {
    question:
      'I would rather have my prosthetist make decisions about what’s best for my prosthesis than to be given a whole lot of choices.*',
    importance: '' as TImportance,
  },
};
