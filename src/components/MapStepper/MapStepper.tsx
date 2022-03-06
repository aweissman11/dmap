import {
  Grid,
  Step,
  StepLabel,
  Stepper,
  Typography,
  styled,
} from '@mui/material';
import { RoadMap } from '../RoadMap';
import DotsMobileStepper from './DotsMobileStepper';

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

const RoadMapWrap = styled('div', {
  shouldForwardProp: p => p !== 'step',
})<{ step: number }>(({ theme, step }) => ({
  position: 'relative',
  [theme.breakpoints.up('md')]: {
    zIndex: -1,
    marginTop: step % 2 === 0 ? -40 : -120,
    marginBottom: step % 2 === 0 ? -80 : -20,
  },
}));

const DesktopStepWrapper = styled('div')(({ theme }) => ({
  zIndex: 1,
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

const MobileStepWrapper = styled('div')(({ theme }) => ({
  zIndex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));

const DesktopTitleGrid = styled(Grid)(({ theme }) => ({
  minHeight: '144px',
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

const MarginBelowStepper = styled(Stepper)(({ theme }) => ({
  marginBottom: theme.spacing(6),
}));

const ClickableStep = styled(Step)(({ theme }) => ({
  '& .Mui-active circle': {
    color: theme.palette.secondary.main,
  },
  '& span': {
    cursor: 'pointer',
  },
}));

function MapStepper({ activeStep, steps, setActiveStep }: TMapStepperProps) {
  return (
    <div>
      <DesktopTitleGrid container justifyContent="center" alignItems="center">
        <Typography
          data-testid="desktop-step-title"
          variant="h1"
          align="center"
          sx={{ fontSize: '4rem' }}
        >
          {steps[activeStep - 1]?.title}
        </Typography>
      </DesktopTitleGrid>
      <DesktopStepWrapper>
        <MarginBelowStepper activeStep={activeStep - 1 || 0} alternativeLabel>
          {steps.map((step: TStep, ix: number) => (
            <ClickableStep
              data-testid={`step-btn-${ix}`}
              key={`${step?.summary}${ix}`}
              onClick={() => setActiveStep(ix + 1)}
            >
              <StepLabel>{step.summary}</StepLabel>
            </ClickableStep>
          ))}
        </MarginBelowStepper>
      </DesktopStepWrapper>
      <MobileStepWrapper>
        <DotsMobileStepper
          steps={steps.length}
          activeStep={activeStep || 0}
          setActiveStep={setActiveStep}
        />
      </MobileStepWrapper>
      <MobileTitle variant="h4" align="center" sx={{ mb: 6 }}>
        {steps[activeStep - 1]?.title}
      </MobileTitle>
      <RoadMapWrap step={activeStep - 1}>
        <RoadMap step={activeStep} steps={steps} />
      </RoadMapWrap>
    </div>
  );
}

export default MapStepper;
