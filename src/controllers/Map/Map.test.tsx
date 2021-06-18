import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { MemoryRouter, Route } from 'react-router';

import Map, { useStyles } from './Map';

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

describe('Map', () => {
  type componentProps = {
    step?: number;
  };

  const renderComponent = (props: componentProps) =>
    render(
      <MemoryRouter initialEntries={[`/map/${props.step}`]}>
        <Route path="/map/:step">
          <Map />
        </Route>
      </MemoryRouter>,
    );

  test('useStyles returns a styles object', () => {
    const { result } = renderHook(() => useStyles());
    expect(result.current.container).toEqual('makeStyles-container-1');
  });

  test('renders the first step', async () => {
    const { getByText } = renderComponent({ step: 0 });

    await waitFor(() =>
      getByText(/How do you prefer to learn about prosthesis options?/i),
    );
  });

  test('renders the first step when there is no param', async () => {
    const { getByText } = renderComponent({ step: undefined });

    await waitFor(() =>
      getByText(/How do you prefer to learn about prosthesis options?/i),
    );
  });

  test('handleNext', async () => {
    const { getByText } = renderComponent({ step: 0 });
    const nextBtn = await screen.findByTestId('next-btn');

    fireEvent.click(nextBtn);
    await waitFor(() => {
      getByText(/Consider your values associated with prosthesis design/i);
    });

    fireEvent.click(nextBtn);
    await waitFor(() => {
      getByText(/Methods & resources for achieving preferences/i);
    });

    fireEvent.click(nextBtn);
    await waitFor(() => {
      getByText(
        /Fitting & Fabrication, Training with prosthesis, Limb volume changes & Functional Goals/i,
      );
    });

    fireEvent.click(nextBtn);
    await waitFor(() => {
      getByText(/Consider the prosthesis type and the timing of changes/i);
    });

    fireEvent.click(nextBtn);
    await waitFor(() => {
      getByText(/All set!/i);
    });
  });

  test('handleBack', async () => {
    const { getByText } = renderComponent({ step: 3 });
    const backBtn = await screen.findByTestId('back-btn');
    fireEvent.click(backBtn);

    await waitFor(() => {
      getByText(/Methods & resources for achieving preferences/i);
    });
  });

  test('handleReset', async () => {
    const { getByText } = renderComponent({ step: 6 });
    const resetBtn = await screen.findByTestId('reset-btn');
    fireEvent.click(resetBtn);

    await waitFor(() => {
      getByText(/How do you prefer to learn about prosthesis options?/i);
    });
  });

  test('click step button', async () => {
    const { getByText } = renderComponent({ step: 6 });
    const stepBtn = await screen.findByTestId('step-btn-3');
    fireEvent.click(stepBtn);

    await waitFor(() => {
      getByText(
        /Fitting & Fabrication, Training with prosthesis, Limb volume changes & Functional Goals/i,
      );
    });
  });
});
