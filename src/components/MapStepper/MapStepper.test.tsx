import React from 'react';
import { render, waitFor } from '@testing-library/react';
// import { renderHook } from '@testing-library/react-hooks';

import MapStepper from './MapStepper';

describe('MapStepper', () => {
  type TStep = {
    title: string;
    summary: string;
  };

  type componentProps = {
    activeStep: number;
    steps: TStep[];
    setActiveStep: (ix: number) => void;
  };

  const renderComponent = (props: componentProps) =>
    render(
      <MapStepper
        activeStep={props.activeStep}
        steps={props.steps}
        setActiveStep={props.setActiveStep}
      />,
    );

  test('renders on mobile', async () => {
    window.matchMedia = query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // Deprecated
      removeListener: jest.fn(), // Deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    });

    const { getByText } = renderComponent({
      activeStep: 0,
      steps: [{ title: 'active-title', summary: 'active-step' }],
      setActiveStep: () => {},
    });

    await waitFor(() => getByText(/active-title/i));
  });

  test('renders on desktop', async () => {
    window.matchMedia = query => ({
      matches: true,
      media: query,
      onchange: null,
      addListener: jest.fn(), // Deprecated
      removeListener: jest.fn(), // Deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    });

    const { getByText } = renderComponent({
      activeStep: 0,
      steps: [{ title: 'active-title', summary: 'active-step' }],
      setActiveStep: () => {},
    });

    await waitFor(() => getByText(/active-title/i));
  });
});
