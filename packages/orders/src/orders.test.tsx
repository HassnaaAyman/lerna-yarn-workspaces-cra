/** @format */

import { render, screen } from '@testing-library/react';
import Orders from './orders';

test('renders learn react link', () => {
  render(<Orders />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
