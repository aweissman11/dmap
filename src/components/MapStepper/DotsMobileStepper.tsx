import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

type TDotsMobileStepperProps = {
  steps: number;
  activeStep: number;
  setActiveStep: (ix: number) => void;
};

export default function DotsMobileStepper({
  steps,
  activeStep,
  setActiveStep,
}: TDotsMobileStepperProps) {
  const handleNext = () => {
    setActiveStep(activeStep + 1);
    window.scrollTo(0, 56);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
    window.scrollTo(0, 56);
  };

  return (
    <MobileStepper
      data-testid="mobile-stepper"
      variant="dots"
      steps={steps}
      position="static"
      activeStep={activeStep - 1}
      sx={{ maxWidth: 400, flexGrow: 1, mb: 4, mt: '-32px' }}
      nextButton={
        <Button
          data-testid="mobile-next-btn"
          size="small"
          onClick={handleNext}
          disabled={activeStep === steps}
        >
          Next
          <KeyboardArrowRight />
        </Button>
      }
      backButton={
        <Button
          data-testid="mobile-prev-btn"
          size="small"
          onClick={handleBack}
          disabled={activeStep === 0}
        >
          <KeyboardArrowLeft />
          Back
        </Button>
      }
    />
  );
}
