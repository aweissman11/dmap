import {
  PRIORITIES_SELECTED,
  ActionType,
  AppStateInterface,
  QUESTIONS_ANSWERED,
} from '../types';

export const AppReducer = (state: AppStateInterface, action: ActionType) => {
  switch (action.type) {
    case PRIORITIES_SELECTED:
      return {
        ...state,
        priorities: action.payload,
      };
    case QUESTIONS_ANSWERED:
      return {
        ...state,
        surveyQuestions: action.payload,
      };
  }
};
