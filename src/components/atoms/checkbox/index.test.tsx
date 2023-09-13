import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import CustomCheckbox, { CustomCheckboxProps } from './index';
import theme from '../../../theme/theme'

describe("CustomCheckbox", () => {
  const defaultProps: CustomCheckboxProps = {
    width: "auto",
    height: "auto",
  };

  test("calls that Checkbox function when text is changed", () => {
    let clicked = false;
    const onClick = () => {
      clicked = true;
    };
    render(<CustomCheckbox {...defaultProps} onClick={onClick} />);
    const CheckBox = screen.getByTestId("myCheck");
    fireEvent.click(CheckBox);
    expect(clicked).toBe(true);
  });

  test("renders  checkbox with default props", () => {
    render(<CustomCheckbox />);
    const checkbox = screen.getByTestId("myCheck");
    expect(checkbox).toBeInTheDocument();
  });

  test("renders a checkbox with the custom props", () => {
    render(<CustomCheckbox {...defaultProps} />);
    const checkbox = screen.getByTestId("myCheck");
    expect(checkbox).toHaveStyle(`width: auto`);
    expect(checkbox).toHaveStyle(`height: auto`);
  });

  test("displays the correct checked color the when checked", () => {
    render(<CustomCheckbox {...defaultProps} checked />);
    const checkbox = screen.getByTestId("myCheck");
    expect(checkbox).toHaveClass("Mui-checked");
    expect(checkbox).toHaveStyle(`color: ${theme.palette.purple[400]}`);
  });

});