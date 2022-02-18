import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

type AgreeRadioProps = {
  question: string;
};

const AGREEMENT_LEVELS = [
  {
    val: 'str_agree',
    title: 'Strongly Agree',
  },
  {
    val: 'agree',
    title: 'Agree',
  },
  {
    val: 'neutral',
    title: 'Neutral',
  },
  {
    val: 'disagree',
    title: 'Disagree',
  },
  {
    val: 'str_disagree',
    title: 'Strongly Disagree',
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
      <RadioGroup
        aria-label="gender"
        name="gender1"
        value={value}
        onChange={handleChange}
        row
      >
        {AGREEMENT_LEVELS.map(lvl => (
          <FormControlLabel
            key={lvl.val}
            value={lvl.val}
            control={<Radio />}
            label={lvl.title}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
