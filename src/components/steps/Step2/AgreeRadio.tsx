import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { styled } from '@mui/material';

const FlexibleRadioGroup = styled(RadioGroup)(({ theme }) => ({
  flexDirection: 'row',
  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column',
  },
}));

type AgreeRadioProps = {
  question: string;
};

const AGREEMENT_LEVELS = [
  {
    val: 'str_disagree',
    title: 'Strongly Disagree',
  },
  {
    val: 'disagree',
    title: 'Disagree',
  },
  {
    val: 'neutral',
    title: 'Neutral',
  },
  {
    val: 'agree',
    title: 'Agree',
  },
  {
    val: 'str_agree',
    title: 'Strongly Agree',
  },
];

export default function AgreeRadio({ question }: AgreeRadioProps) {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{question}</FormLabel>
      <FlexibleRadioGroup
        aria-label="gender"
        name="gender1"
        value={value}
        onChange={handleChange}
      >
        {AGREEMENT_LEVELS.map(lvl => (
          <FormControlLabel
            key={lvl.val}
            value={lvl.val}
            control={<Radio />}
            label={lvl.title}
          />
        ))}
      </FlexibleRadioGroup>
    </FormControl>
  );
}
