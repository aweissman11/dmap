import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

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
