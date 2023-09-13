
import React from 'react';
import { render, screen } from '@testing-library/react';
import NewCashCardKick from './index';

describe('NewCashCardKick', () => {
 

  it('renders the component with the given props', () => {
    render(<NewCashCardKick/>);
    const cashCard = screen.getByTestId('myBtn');
    expect(cashCard).toBeInTheDocument();
  });

  it('renders the correct heading text', () => {
    
    render(<NewCashCardKick/>);
    const heading = screen.getByText(/Launch a new/);
    expect(heading).toBeInTheDocument();
  });

  it('renders the correct body text', () => {
   
    render(<NewCashCardKick/>);
    const body = screen.getByText(/You have upto/);
    expect(body).toBeInTheDocument();
  });

  it('renders the correct button text', () => {
   
    render(<NewCashCardKick/>);
    const button = screen.getByText(/New Cash Kick/);
    expect(button).toBeInTheDocument();
  });
});
