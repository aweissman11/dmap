import React, { useEffect, useState } from 'react';
import {
  createStyles,
  makeStyles,
  Step,
  StepLabel,
  Stepper,
  Theme,
  Typography,
} from '@material-ui/core';

type TMapStepperProps = {
  activeStep: number;
  steps: string[];
  setActiveStep: (ix: number) => void;
};

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
      <Typography variant="h6" align="center">
        {steps[activeStep]}
      </Typography>
    );
  }

  return (
    <Stepper activeStep={activeStep} alternativeLabel>
      {steps.map((step: string, ix: number) => (
        <Step
          data-testid={`step-btn-${ix}`}
          key={step}
          className={classes.step}
          onClick={() => setActiveStep(ix)}
        >
          <StepLabel>{step}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
}

export default MapStepper;
