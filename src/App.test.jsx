import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('redirects to the About Me page by default', async () => {
  render(<App />);
  expect(await screen.findByRole('heading', { name: /about me/i })).toBeInTheDocument();
});

test('shows navigation links for both pages', () => {
  render(<App />);
  expect(screen.getByRole('link', { name: /about me/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /projects/i })).toBeInTheDocument();
});
