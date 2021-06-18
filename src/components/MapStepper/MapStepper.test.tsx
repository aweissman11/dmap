import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';

import MapStepper, { useStyles } from './MapStepper';

describe('MapStepper', () => {
  type componentProps = {
    activeStep: number;
    steps: string[];
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

  test('useStyles returns a styles object', () => {
    const { result } = renderHook(() => useStyles());
    expect(result.current.step).toEqual('makeStyles-step-1');
  });

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
      steps: ['active-step'],
      setActiveStep: () => {},
    });

    await waitFor(() => getByText(/active-step/i));
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
      steps: ['active-step'],
      setActiveStep: () => {},
    });

    await waitFor(() => getByText(/active-step/i));
  });
});
