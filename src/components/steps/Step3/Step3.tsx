import {
  Container,
  createStyles,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';

import PrioritiesDnD from './PrioritiesDnD';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    marginBelow: {
      marginBottom: theme.spacing(8),
    },
  }),
);

export default function Step3() {
  const classes = useStyles();

  return (
    <Container>
      <Grid container justify="center">
        <Grid item md={8} xs={12} className={classes.marginBelow}>
          <Typography gutterBottom>
            You and your prosthetist will be working together to design the best
            prosthesis to meet your needs. It is important to consider your
            personal values, goals, and lifestyle to help determine the best
            prosthesis for you.
          </Typography>
          <Typography gutterBottom>
            What is important to you for your first prosthesis?
          </Typography>
        </Grid>
      </Grid>
      <Grid container justify="center">
        <PrioritiesDnD />
      </Grid>
    </Container>
  );
}
