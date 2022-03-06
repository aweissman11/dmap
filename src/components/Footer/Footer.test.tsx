import { render, screen } from '@testing-library/react';

import Footer from './Footer';

describe('Footer', () => {
  test('renders the legs image', () => {
    render(<Footer />);
    const title = screen.getByText(
      /This project is funded by The Orthotics and Prosthetics Research Foundation/i,
    );
    expect(title).toBeInTheDocument();
  });
});
