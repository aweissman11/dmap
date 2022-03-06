import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import FourOFourPage from './FourOFourPage';

describe('FourOFourPage', () => {
  test('renders the legs image', () => {
    render(<FourOFourPage />);
    const title = screen.getByText(/Page Not Found/i);
    expect(title).toBeInTheDocument();
  });

  test('goes home', async () => {
    const history = createMemoryHistory();
    const { getAllByText } = render(
      <Router history={history}>
        <FourOFourPage />
      </Router>,
    );

    const homeBtn = await screen.findByTestId('home-btn');
    fireEvent.click(homeBtn);
    await waitFor(() => {
      getAllByText('Go Home')[0];
    });
  });
});
