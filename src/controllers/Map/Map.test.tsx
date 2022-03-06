import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router';

import Map from './Map';

window.scrollTo = jest.fn();

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

  test('renders the first step', async () => {
    const { getByTestId } = renderComponent({ step: 0 });

    await waitFor(() => getByTestId(/step-btn-1/i));
  });

  test('renders the first step when there is no param', async () => {
    const { getByTestId } = renderComponent({ step: undefined });

    await waitFor(() => getByTestId(/step-btn-1/i));
  });

  test('handleNext', async () => {
    const { getAllByText } = renderComponent({ step: 0 });
    const nextBtn = await screen.findByTestId('next-btn');

    fireEvent.click(nextBtn);
    await waitFor(() => {
      getAllByText(/Communication/i)[0];
    });

    fireEvent.click(nextBtn);
    await waitFor(() => {
      getAllByText(/Values/i)[0];
    });

    fireEvent.click(nextBtn);
    await waitFor(() => {
      getAllByText(/First Prosthesis/i)[0];
    });

    fireEvent.click(nextBtn);
    await waitFor(() => {
      getAllByText(/Preferences/i)[0];
    });

    fireEvent.click(nextBtn);
    await waitFor(() => {
      getAllByText(/Journey/i)[0];
    });

    fireEvent.click(nextBtn);
    await waitFor(() => {
      getAllByText(/Print/i)[0];
    });
  });

  test('handleBack', async () => {
    const { getByText } = renderComponent({ step: 3 });
    const backBtn = await screen.findByTestId('back-btn');
    fireEvent.click(backBtn);

    await waitFor(() => {
      getByText(/Values/i);
    });
  });

  test('handleReset', async () => {
    const { getAllByText } = renderComponent({ step: 7 });
    const resetBtn = await screen.findByTestId('reset-btn');
    fireEvent.click(resetBtn);

    await waitFor(() => {
      getAllByText(/Amputation/i)[0];
    });
  });

  test('click step button', async () => {
    const { getByText } = renderComponent({ step: 6 });
    const stepBtn = await screen.findByTestId('step-btn-4');
    fireEvent.click(stepBtn);

    await waitFor(() => {
      getByText(/First Prosthesis/i);
    });
  });
});
