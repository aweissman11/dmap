export type TImportance =
  | 'str_disagree'
  | 'disagree'
  | 'neutral'
  | 'agree'
  | 'str_agree'
  | '';

export enum TQuestionId {
  options = 'options',
  history = 'history',
  choices = 'choices',
}

export type TQuestion = {
  question: string;
  importance: TImportance;
};

export type TSurveyQuestions = {
  [questionId in TQuestionId]: TQuestion;
};

export type TPriority = {
  id: string;
  name: string;
  content: JSX.Element;
};

export type AppStateInterface = {
  priorities: TPriority[];
  surveyQuestions: TSurveyQuestions;
};

export type TSelectPriorities = (priorities: TPriority[]) => void;
export type TAnswerSurveyQuestions = (answers: TSurveyQuestions) => void;

export interface AppCtxInterface extends AppStateInterface {
  selectPriorities: TSelectPriorities;
  answerSurveyQuestions: TAnswerSurveyQuestions;
}

export const PRIORITIES_SELECTED = 'PRIORITIES_SELECTED';
export const QUESTIONS_ANSWERED = 'QUESTIONS_ANSWERED';

export type ActionType =
  | { type: typeof PRIORITIES_SELECTED; payload: TPriority[] }
  | { type: typeof QUESTIONS_ANSWERED; payload: TSurveyQuestions };
