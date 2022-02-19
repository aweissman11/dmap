import {
  Grid,
  Step,
  StepLabel,
  Stepper,
  Typography,
  styled,
} from '@mui/material';
import RoadMap from '../RoadMap';

type TStep = {
  title: string;
  summary: string;
};

type TMapStepperProps = {
  activeStep: number;
  steps: TStep[];
  setActiveStep: (ix: number) => void;
};

const MobileTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(6),
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));

type TRoadMapWrapProps = {
  step: number;
};
const RoadMapWrap = styled('div')(({ step }: TRoadMapWrapProps) => ({
  position: 'relative',
  marginTop: step % 2 === 0 ? -40 : -120,
  marginBottom: step % 2 === 0 ? -80 : -20,
}));

const DesktopWrapper = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

const DesktopTitleGrid = styled(Grid)(({ theme }) => ({
  minHeight: '144px',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

const MarginBelowStepper = styled(Stepper)(({ theme }) => ({
  marginBottom: theme.spacing(6),
}));

const ClickableStep = styled(Step)(() => ({
  '& span': {
    cursor: 'pointer',
  },
}));

function MapStepper({ activeStep, steps, setActiveStep }: TMapStepperProps) {
  return (
    <div>
      <DesktopTitleGrid container justifyContent="center" alignItems="center">
        <Typography variant="h1" align="center" sx={{ fontSize: '4rem' }}>
          {steps[activeStep]?.title}
        </Typography>
      </DesktopTitleGrid>
      <MobileTitle variant="h4" align="center" sx={{ mb: 6 }}>
        {steps[activeStep]?.title}
      </MobileTitle>
      <RoadMapWrap step={activeStep}>
        <RoadMap step={activeStep + 1} />
      </RoadMapWrap>
      <DesktopWrapper>
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
      </DesktopWrapper>
    </div>
  );
}

export default MapStepper;
