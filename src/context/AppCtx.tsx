import { createContext, useReducer } from 'react';

import { AppReducer } from './AppReducer';
import {
  AppCtxInterface,
  AppStateInterface,
  PRIORITIES_SELECTED,
  QUESTIONS_ANSWERED,
  TPriority,
  TSurveyQuestions,
} from '../types';
import { SURVEY_QUESTIONS } from './constants';

const defaultState: AppStateInterface = {
  priorities: [],
  surveyQuestions: SURVEY_QUESTIONS,
};

export const AppCtx = createContext<AppCtxInterface>({
  ...defaultState,
  selectPriorities: () => {},
  answerSurveyQuestions: () => {},
});

export const AppStateProvider = (props: React.PropsWithChildren<{}>) => {
  const [appState, dispatch] = useReducer(AppReducer, defaultState);

  const answerSurveyQuestions = (payload: TSurveyQuestions) => {
    dispatch({
      type: QUESTIONS_ANSWERED,
      payload,
    });
  };

  /* istanbul ignore next */
  const selectPriorities = (payload: TPriority[]) => {
    dispatch({
      type: PRIORITIES_SELECTED,
      payload,
    });
  };

  return (
    <AppCtx.Provider
      value={{
        ...appState,
        selectPriorities,
        answerSurveyQuestions,
      }}
    >
      {props.children}
    </AppCtx.Provider>
  );
};
