import React from 'react';
import { render, screen } from '@testing-library/react';
import CircularProgressBar from './index';

describe('CircularProgressBar', () => {
  test('renders progress bar with correct value', () => {
    const value = 50;
    render(<CircularProgressBar value={value} />);
    const progress = screen.getByTestId('myProgress');
    expect(progress).toBeInTheDocument();
    expect(progress.getAttribute('aria-valuenow')).toBe(String(value));
  });

  test('renders progress bar with correct percentage text', () => {
    const value = 75;
    render(<CircularProgressBar value={value} />);
    const text = screen.getByText(`${value}%`);
    expect(text).toBeInTheDocument();
  });
  
});
