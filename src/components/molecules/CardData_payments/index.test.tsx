import { render, screen } from '@testing-library/react';
import { CardDataPayment ,  CustomBox } from "./index";

describe("Card data payments", () => {
  const defaultProps: CustomBox = {
    width: '300px',
    height: '200px',
    padding: '20px',
    top: '0',
    left: '0',
    radius: '10px', 
    gap: '10px',
    color: '#ffffff',
  };
  test('renders the card with the correct styles and content', () => {
    render(<CardDataPayment {...defaultProps} />);

    const cardElement = screen.getByTestId('mycardpayment');
    expect(cardElement).toHaveStyle(`width: ${defaultProps.width}`);
    expect(cardElement).toHaveStyle(`height: ${defaultProps.height}`);
    expect(cardElement).toHaveStyle(`padding: ${defaultProps.padding}`);
    expect(cardElement).toHaveStyle(`border-radius: ${defaultProps.radius}`);
    expect(cardElement).toHaveStyle(`background-color: ${defaultProps.color}`);


    const termCapElement = screen.getByTestId('mycardpayment');
    expect(termCapElement).toBeInTheDocument();

    const availableCreditElement = screen.getByTestId('mycardpayment');
    expect(availableCreditElement).toBeInTheDocument();
    expect(termCapElement).toHaveTextContent('Due - May 03, 2021 ');
    expect(termCapElement).toHaveTextContent('$14,204.55');

});
});
