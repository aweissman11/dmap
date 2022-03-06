import { render, screen } from '@testing-library/react';

import RoadMap from './RoadMap';

describe('RoadMap', () => {
  test('renders the legs image', () => {
    render(<RoadMap />);
    const title = screen.getByText(/My Communication/i);
    expect(title).toBeInTheDocument();
  });
});
