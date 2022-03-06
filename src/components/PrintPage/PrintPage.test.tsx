import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import PrintPage from './PrintPage';

window.scrollTo = jest.fn();

describe('PrintPage', () => {
  test('renders the legs image', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <PrintPage />
      </Router>,
    );

    const title = screen.getByText(/Print/i);
    expect(title).toBeInTheDocument();
  });
});
