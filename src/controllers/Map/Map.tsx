import React, { useEffect } from 'react';
import {
  Switch,
  Route,
  useHistory,
  useParams,
  Redirect,
} from 'react-router-dom';
import { Button, Container, Typography, Grid, styled } from '@mui/material';
import {
  Step1,
  Step2,
  Step3,
  Step4,
  Step5,
  Step6,
} from '../../components/steps';
import { MapStepper } from '../../components/MapStepper';

const MapContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),
  [theme.breakpoints.down('sm')]: {
    paddingLeft: 0,
    paddingRight: 0,
  },
}));

function getSteps() {
  return [
    {
      title: 'My Amputation and Early Recovery',
      summary: 'Amputation',
    },
    {
      title: 'My Communication Preferences',
      summary: 'Communication',
    },
    {
      title: 'My Values for Prosthesis Design',
      summary: 'Values',
    },
    {
      title: 'My First Prosthesis Design',
      summary: 'First Prosthesis',
    },
    {
      title: 'My Preferences for Prosthesis Design',
      summary: 'Preferences',
    },
    {
      title: 'My Journey with a Prosthesis',
      summary: 'Journey',
    },
  ];
}

type routeParams = {
  step: string;
};

export default function Map() {
  const history = useHistory();
  const { step } = useParams<routeParams>();
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
    window.scrollTo(0, 56);
    history.push(`/map/${newStep}`);
  };

  // TODO: Fix these questions and show them on the page again
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
    <MapContainer maxWidth="xl">
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
          <Step4 />
        </Route>
        <Route exact path="/map/4">
          <Step5 />
        </Route>
        <Route exact path="/map/5">
          <Step6 />
        </Route>
      </Switch>
      <Grid container justifyContent="center">
        {activeStep === steps.length ? (
          <Grid
            item
            xs={12}
            container
            justifyContent="center"
            direction="column"
            alignItems="center"
          >
            <Typography
              sx={{
                mt: 1,
                mb: 1,
              }}
            >
              All steps completed
            </Typography>
            <Button data-testid="reset-btn" onClick={() => goToStep(0)}>
              Reset
            </Button>
          </Grid>
        ) : (
          <Grid item xs={12} container justifyContent="center" sx={{ mt: 6 }}>
            {/* <Grid item xs={12}>
              <Typography
                sx={{
                  mt: 1,
                  mb: 1,
                }}
                align="center"
              >
                {getStepContent(activeStep)}
              </Typography>
            </Grid> */}
            <Grid
              item
              xs={12}
              container
              justifyContent="center"
              data-testid={getStepContent(activeStep)}
            >
              <Button
                data-testid="back-btn"
                disabled={activeStep === 0}
                onClick={() => goToStep(activeStep - 1)}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Button
                data-testid="next-btn"
                variant="contained"
                color="success"
                onClick={() => goToStep(activeStep + 1)}
              >
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </Grid>
          </Grid>
        )}
      </Grid>
    </MapContainer>
  );
}
