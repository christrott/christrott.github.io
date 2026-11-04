import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('shows the header with name and LinkedIn button', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1, name: /chris trott/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /connect on linkedin/i })).toBeInTheDocument();
});

test('renders About and Projects on one page', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /about me/i })).toBeInTheDocument();
  expect(screen.getByText('Projects', { selector: '#projects .title' })).toBeInTheDocument();
});

test('nav links point at the page sections', () => {
  render(<App />);
  expect(screen.getByRole('link', { name: 'About Me' })).toHaveAttribute('href', '#about');
  expect(screen.getByRole('link', { name: 'Projects' })).toHaveAttribute('href', '#projects');
});
