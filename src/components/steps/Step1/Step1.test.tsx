import { render, screen } from '@testing-library/react';

import Step1 from './Step1';

test('renders the legs image', () => {
  render(<Step1 />);
  const title = screen.getByText(
    /Everyone's recovery is at a different pace./i,
  );
  expect(title).toBeInTheDocument();
});
