import React from 'react';
import {
  createStyles,
  Grid,
  makeStyles,
  Paper,
  Theme,
} from '@material-ui/core';

import AgreeRadio from './AgreeRadio';

const QUESTIONS = [
  'When there is more than one method to treat a problem, I should be told about each one.',
  'I believe that my doctor needs to know everything about my medical history to take good care of me.',
  "I would rather have my doctor make decisions about what's best for my health than to be given a whole lot of choices.",
  'The important medical decisions should be made by my doctor, not by me.',
];

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(4),
      marginBottom: theme.spacing(6),
      width: '100%',
    },
  }),
);

export default function Step2() {
  const classes = useStyles();

  return (
    <Grid container data-testid="step-2">
      {QUESTIONS.map(q => (
        <Paper key={q} className={classes.paper}>
          <AgreeRadio question={q} />
        </Paper>
      ))}
    </Grid>
  );
}
