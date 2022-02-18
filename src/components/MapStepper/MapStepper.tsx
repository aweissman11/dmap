import { useEffect, useState } from 'react';
import {
  Container,
  Grid,
  Step,
  StepLabel,
  Stepper,
  Typography,
  styled,
} from '@mui/material';

type TStep = {
  title: string;
  summary: string;
};

type TMapStepperProps = {
  activeStep: number;
  steps: TStep[];
  setActiveStep: (ix: number) => void;
};

const DesktopTitleGrid = styled(Grid)(({ theme }) => ({
  marginBottom: theme.spacing(6),
  minHeight: '144px',
}));

const MarginBelowStepper = styled(Stepper)(({ theme }) => ({
  marginBottom: theme.spacing(6),
}));

const ClickableStep = styled(Step)(({ theme }) => ({
  '& span': {
    cursor: 'pointer',
  },
}));

function MapStepper({ activeStep, steps, setActiveStep }: TMapStepperProps) {
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
      <Typography
        variant="h4"
        align="center"
        sx={{ mb: theme => theme.spacing(6) }}
      >
        {steps[activeStep]?.title}
      </Typography>
    );
  }

  return (
    <Container>
      <DesktopTitleGrid container justifyContent="center" alignItems="center">
        <Typography variant="h2" align="center">
          {steps[activeStep]?.title}
        </Typography>
      </DesktopTitleGrid>
      <MarginBelowStepper activeStep={activeStep} alternativeLabel>
        {steps.map((step: TStep, ix: number) => (
          <ClickableStep
            data-testid={`step-btn-${ix}`}
            key={`${step?.summary}${ix}`}
            onClick={() => setActiveStep(ix)}
          >
            <StepLabel>{step.summary}</StepLabel>
          </ClickableStep>
        ))}
      </MarginBelowStepper>
    </Container>
  );
}

export default MapStepper;
