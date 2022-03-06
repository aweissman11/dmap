import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { styled } from '@mui/material';
import { TQuestion, TImportance, TQuestionId } from '../../../types';

const FlexibleRadioGroup = styled(RadioGroup)(({ theme }) => ({
  flexDirection: 'row',
  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column',
  },
}));

type AgreeRadioProps = {
  question: TQuestion;
  id: TQuestionId;
  answerQuestion: (id: TQuestionId, imp: TImportance) => void;
};

export const AGREEMENT_LEVELS = {
  str_disagree: 'Strongly Disagree',
  disagree: 'Disagree',
  neutral: 'Neutral',
  agree: 'Agree',
  str_agree: 'Strongly Agree',
};

export default function AgreeRadio({
  id,
  question,
  answerQuestion,
}: AgreeRadioProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    answerQuestion(id, (event.target as HTMLInputElement).value as TImportance);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{question.question}*</FormLabel>
      <FlexibleRadioGroup
        aria-label="gender"
        name="gender1"
        value={question.importance}
        onChange={handleChange}
      >
        {Object.entries(AGREEMENT_LEVELS).map(lvl => (
          <FormControlLabel
            key={lvl[0]}
            value={lvl[0]}
            control={<Radio />}
            label={lvl[1]}
          />
        ))}
      </FlexibleRadioGroup>
    </FormControl>
  );
}
