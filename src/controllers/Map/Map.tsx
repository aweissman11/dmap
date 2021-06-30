import React, { useEffect } from 'react';
import {
  Switch,
  Route,
  useHistory,
  useParams,
  Redirect,
} from 'react-router-dom';
import {
  Button,
  Container,
  makeStyles,
  Theme,
  createStyles,
  Typography,
  Grid,
} from '@material-ui/core';
import { Step1, Step2, Step3 } from 'components/steps';
import MapStepper from 'components/MapStepper';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    backButton: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    step: {
      '& span': {
        cursor: 'pointer',
      },
    },
  }),
);

function getSteps() {
  return [
    {
      title: 'Overview of parts of a prosthesis/prosthesis decisions',
      summary: 'Prosthesis Choices',
    },
    {
      title: 'Identifying your communication needs',
      summary: 'Communication',
    },
    {
      title: 'What is important to you for your first prosthesis?',
      summary: 'Values',
    },
    {
      title: 'Evaluating Preferences',
      summary: 'Preferences',
    },
    {
      title: 'Engage in Design and Rehabilitation Work',
      summary: 'Design & Rehabilitation',
    },
    {
      title: 'Adjust and Make Design Changes When Needed',
      summary: 'Design Changes',
    },
  ];
}

type routeParams = {
  step: string;
};

export default function HorizontalLabelPositionBelowStepper() {
  const history = useHistory();
  const { step } = useParams<routeParams>();
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState<number>(Number(step));
  const steps = getSteps();

  useEffect(() => {
    if (Number(step) !== activeStep) {
      setActiveStep(Number(step));
    }
  }, [step, activeStep, history]);

  if (step && isNaN(Number(step))) {
    return <Redirect to="/map/0" />;
  }

  const goToStep = (newStep: number): void => {
    history.push(`/map/${newStep}`);
  };

  function getStepContent(stepIndex: number) {
    switch (stepIndex) {
      case 0:
        return 'How do you prefer to learn about prosthesis options?';
      case 1:
        return 'Consider your values associated with prosthesis design';
      case 2:
        return 'Methods & resources for achieving preferences';
      case 3:
        return 'Fitting & Fabrication, Training with prosthesis, Limb volume changes & Functional Goals';
      case 4:
        return 'Consider the prosthesis type and the timing of changes';
      default:
        return 'All set!';
    }
  }
  return (
    <Container maxWidth="md" className={classes.container}>
      <MapStepper
        activeStep={activeStep}
        steps={steps}
        setActiveStep={goToStep}
      />
      <Switch>
        <Route exact path="/map/0">
          <Step1 />
        </Route>
        <Route exact path="/map/1">
          <Step2 />
        </Route>
        <Route exact path="/map/2">
          <Step3 />
        </Route>
        <Route exact path="/map/3">
          <h1>3</h1>
        </Route>
        <Route exact path="/map/4">
          <h1>4</h1>
        </Route>
        <Route exact path="/map/5">
          <h1>5</h1>
        </Route>
      </Switch>
      <Grid container justify="center">
        {activeStep === steps.length ? (
          <Grid
            item
            xs={12}
            container
            justify="center"
            direction="column"
            alignItems="center"
          >
            <Typography className={classes.instructions}>
              All steps completed
            </Typography>
            <Button data-testid="reset-btn" onClick={() => goToStep(0)}>
              Reset
            </Button>
          </Grid>
        ) : (
          <Grid item xs={12} container justify="center">
            <Grid item xs={12}>
              <Typography className={classes.instructions} align="center">
                {getStepContent(activeStep)}
              </Typography>
            </Grid>
            <Grid item xs={12} container justify="center">
              <Button
                data-testid="back-btn"
                disabled={activeStep === 0}
                onClick={() => goToStep(activeStep - 1)}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button
                data-testid="next-btn"
                variant="contained"
                color="secondary"
                onClick={() => goToStep(activeStep + 1)}
              >
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </Grid>
          </Grid>
        )}
      </Grid>
    </Container>
  );
}
