import React from 'react';
import { render, screen, within } from '@testing-library/react';
import App from './App';
import { experience } from './data/experience.js';

test('shows the header with name, location and LinkedIn button', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1, name: /chris trott/i })).toBeInTheDocument();
  expect(screen.getByText('Remote, Australia')).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /connect on linkedin/i })).toBeInTheDocument();
});

test('renders every section on one page', () => {
  render(<App />);
  for (const name of ['About Me', 'Experience', 'Side Projects']) {
    expect(screen.getByRole('heading', { level: 2, name })).toBeInTheDocument();
  }
});

test('shows a card with role and dates for each job', () => {
  render(<App />);
  const section = document.getElementById('experience');
  for (const job of experience) {
    expect(within(section).getByText(job.dates)).toBeInTheDocument();
  }
  expect(within(section).getAllByRole('article')).toHaveLength(experience.length);
});

test('nav links point at the page sections', () => {
  render(<App />);
  const nav = screen.getByRole('navigation');
  expect(within(nav).getByRole('link', { name: 'About Me' })).toHaveAttribute('href', '#about');
  expect(within(nav).getByRole('link', { name: 'Experience' })).toHaveAttribute('href', '#experience');
  expect(within(nav).getByRole('link', { name: 'Side Projects' })).toHaveAttribute('href', '#side-projects');
});

test('side project cards show title and gameplay screenshots', () => {
  render(<App />);
  expect(screen.getByAltText('Froccer title screen')).toHaveAttribute('src', '/images/froccer-0.png');
  expect(screen.getByAltText('Froccer gameplay')).toHaveAttribute('src', '/images/froccer-1.png');
});
