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
  Step7,
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
      summary: 'Prosthesis Design',
    },
    {
      title: 'My Preferences for Prosthesis Design',
      summary: 'Preferences',
    },
    {
      title: 'My Journey with a Prosthesis',
      summary: 'Journey',
    },
    {
      title: 'Print Decision Aid',
      summary: 'Print',
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
    window.scrollTo(0, 56);
  }, []);

  useEffect(() => {
    if (Number(step) !== activeStep) {
      setActiveStep(Number(step));
    }
  }, [step, activeStep, history]);

  if (step && isNaN(Number(step))) {
    return <Redirect to="/map/1" />;
  }

  if (!step || (step && (Number(step) < 1 || Number(step) > steps.length))) {
    return <Redirect to="/map/1" />;
  }

  const goToStep = (newStep: number): void => {
    window.scrollTo(0, 56);
    history.push(`/map/${newStep}`);
  };

  return (
    <MapContainer maxWidth="xl">
      <MapStepper
        activeStep={activeStep}
        steps={steps}
        setActiveStep={goToStep}
      />
      <Switch>
        <Route exact path="/map/1">
          <Step1 />
        </Route>
        <Route exact path="/map/2">
          <Step2 />
        </Route>
        <Route exact path="/map/3">
          <Step3 />
        </Route>
        <Route exact path="/map/4">
          <Step4 />
        </Route>
        <Route exact path="/map/5">
          <Step5 />
        </Route>
        <Route exact path="/map/6">
          <Step6 />
        </Route>
        <Route exact path="/map/7">
          <Step7 />
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
            <Button data-testid="reset-btn" onClick={() => goToStep(1)}>
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
              data-testid={
                activeStep ? steps[activeStep].summary : 'no-active-step'
              }
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
