import { render, screen } from '@testing-library/react';
import App from './App';

test('renders String Calculator heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/string calculator/i);
  expect(headingElement).toBeInTheDocument();
});
