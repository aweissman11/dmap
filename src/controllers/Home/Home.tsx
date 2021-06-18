import React from 'react';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';

import RoadMap from '../../assets/presentation_road_map.png';
import {
  Button,
  createStyles,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      paddingTop: theme.spacing(8),
    },
    image: {
      width: '100%',
      height: 'auto',
    },
    buttonWrap: {
      marginTop: theme.spacing(8),
    },
  }),
);

export default function SimpleContainer() {
  const classes = useStyles();

  return (
    <Container maxWidth="md" className={classes.container}>
      <img
        className={classes.image}
        src={RoadMap}
        alt="Decision Road Map Diagram"
      />
      <Typography align="center" variant="h1">
        DECISION MAP
      </Typography>
      <Typography align="center" variant="h3">
        decision making support for prosthetic design
      </Typography>
      <Grid container justify="center" className={classes.buttonWrap}>
        <Button
          variant="contained"
          component={Link}
          to="/map"
          color="secondary"
        >
          Get Started
        </Button>
      </Grid>
    </Container>
  );
}
