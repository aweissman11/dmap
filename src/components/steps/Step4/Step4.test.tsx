import { render, screen } from '@testing-library/react';

import Step4 from './Step4';

test('renders the legs image', () => {
  render(<Step4 />);
  const title = screen.getAllByAltText(/prosthetic leg diagram/i);
  expect(title[0]).toBeInTheDocument();
});
