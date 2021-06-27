import {
  Container,
  createStyles,
  Grid,
  makeStyles,
  Paper,
  Theme,
  Typography,
} from '@material-ui/core';

import AgreeRadio from './AgreeRadio';

const QUESTIONS = [
  'When there is more than one option for a part of my prosthesis, I should be told about each one.',
  'I believe that my prosthetist needs to know everything about my medical history to take good care of me.',
  'I would rather have my prosthetist make decisions about what’s best for my prosthesis than to be given a whole lot of choices.',
  'The important decisions about my prosthesis should be made by my prosthetist, not by me.',
];

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(4),
      marginBottom: theme.spacing(6),
      width: '100%',
    },
    marginBelow: {
      marginBottom: theme.spacing(8),
    },
  }),
);

export default function Step2() {
  const classes = useStyles();

  return (
    <Container>
      <Grid container justify="center">
        <Grid item md={8} xs={12} className={classes.marginBelow}>
          <Typography gutterBottom>
            You and your prosthetist will be working together to design the best
            prosthesis to meet your needs. There are many options and
            information for designing a prosthesis.
          </Typography>
          <Typography gutterBottom>
            How would you like to discuss information with your prosthetist?
          </Typography>
        </Grid>
      </Grid>
      <Grid container data-testid="step-2">
        {QUESTIONS.map(q => (
          <Paper key={q} className={classes.paper}>
            <AgreeRadio question={q} />
          </Paper>
        ))}
      </Grid>
    </Container>
  );
}
