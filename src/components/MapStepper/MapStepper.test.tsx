import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
// import { renderHook } from '@testing-library/react-hooks';

import MapStepper from './MapStepper';

window.scrollTo = jest.fn();

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

    const { getAllByText } = renderComponent({
      activeStep: 0,
      steps: [{ title: 'active-title', summary: 'active-step' }],
      setActiveStep: () => {},
    });

    await waitFor(() => getAllByText(/active-step/i));
  });

  test('renders on mobile', async () => {
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

    const { getByTestId } = renderComponent({
      activeStep: 0,
      steps: [{ title: 'active-title', summary: 'active-step' }],
      setActiveStep: () => {},
    });

    await waitFor(() => getByTestId(/mobile-stepper/i));
  });

  test('can hanlde next', async () => {
    renderComponent({
      activeStep: 1,
      steps: [
        { title: 'active-title', summary: 'active-step' },
        { title: 'active-title-1', summary: 'active-step' },
      ],
      setActiveStep: () => {},
    });

    fireEvent.click(screen.getByTestId('mobile-next-btn'));

    // await waitFor(() => screen.getByRole('heading'));

    expect(screen.getByTestId('desktop-step-title')).toHaveTextContent(
      'active-title',
    );
  });

  test('can hanlde prev', async () => {
    renderComponent({
      activeStep: 1,
      steps: [
        { title: 'active-title', summary: 'active-step' },
        { title: 'active-title-1', summary: 'active-step' },
      ],
      setActiveStep: () => {},
    });

    fireEvent.click(screen.getByTestId('mobile-prev-btn'));

    // await waitFor(() => screen.getByRole('heading'));

    expect(screen.getByTestId('desktop-step-title')).toHaveTextContent(
      'active-title',
    );
  });
});
