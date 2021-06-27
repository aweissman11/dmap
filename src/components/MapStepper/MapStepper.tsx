import React, { useEffect, useState } from 'react';
import {
  Container,
  createStyles,
  Grid,
  makeStyles,
  Step,
  StepLabel,
  Stepper,
  Theme,
  Typography,
} from '@material-ui/core';

type TStep = {
  title: string;
  summary: string;
};

type TMapStepperProps = {
  activeStep: number;
  steps: TStep[];
  setActiveStep: (ix: number) => void;
};

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    desktopTitle: {
      marginBottom: theme.spacing(6),
      minHeight: '144px',
    },
    marginBelow: {
      marginBottom: theme.spacing(6),
    },
    step: {
      '& span': {
        cursor: 'pointer',
      },
    },
  }),
);

function MapStepper({ activeStep, steps, setActiveStep }: TMapStepperProps) {
  const classes = useStyles();
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      let mql = window.matchMedia('(max-width: 600px)');
      if (mql.matches) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile]);

  if (isMobile) {
    return (
      <Typography variant="h4" align="center" className={classes.marginBelow}>
        {steps[activeStep]?.title}
      </Typography>
    );
  }

  return (
    <Container>
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.desktopTitle}
      >
        <Typography variant="h2" align="center">
          {steps[activeStep]?.title}
        </Typography>
      </Grid>
      <Stepper
        activeStep={activeStep}
        alternativeLabel
        className={classes.marginBelow}
      >
        {steps.map((step: TStep, ix: number) => (
          <Step
            data-testid={`step-btn-${ix}`}
            key={`${step?.summary}${ix}`}
            className={classes.step}
            onClick={() => setActiveStep(ix)}
          >
            <StepLabel>{step.summary}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Container>
  );
}

export default MapStepper;
