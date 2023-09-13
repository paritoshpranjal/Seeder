import { render, screen } from '@testing-library/react';
import CardData, { CustomCards } from './index';

describe('CardData', () => {
    const props: CustomCards = {
      width: 200,
      height: 100,
      padding: 10,
      top: 0,
      left: 0,
      radius: 5,
      gap: 20,
      color: '#fff',
    };
  
    test('renders card data with props', () => {
      render(<CardData {...props} />);
  
      const card = screen.getByTestId('mycard');
      expect(card).toBeInTheDocument();
      expect(card).toHaveStyle(`width: ${props.width}px`);
      expect(card).toHaveStyle(`height: ${props.height}px`);
      expect(card).toHaveStyle(`padding: ${props.padding}px`);
      expect(card).toHaveStyle(`top: ${props.top}px`);
      expect(card).toHaveStyle(`left: ${props.left}px`);
      expect(card).toHaveStyle(`border-radius: ${props.radius}px`);
      expect(card).toHaveStyle(`background-color: ${props.color}`);
    });
  });
  