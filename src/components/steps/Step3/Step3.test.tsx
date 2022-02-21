import { render, screen } from '@testing-library/react';

import Step3 from './Step3';

// TODO: Test PrioritiesDnD
test('renders the legs image', () => {
  render(<Step3 />);
  const title = screen.getByText(
    /Your values, goals and lifestyle will help to inform the best prosthesis design for you./i,
  );
  expect(title).toBeInTheDocument();
});
