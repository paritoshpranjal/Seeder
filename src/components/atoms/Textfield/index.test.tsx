import { render, screen, fireEvent } from "@testing-library/react";
import TextInput, { InputProps } from "./index";
import userEvent from "@testing-library/user-event";

import "@testing-library/jest-dom/extend-expect";
import theme from "../../../theme/theme";
describe("TextInput", () => {
  const defaultProps: InputProps = {
    width: 200,
    height: 50,
    bcolor: `${theme.palette.purple[400]}`,
    placeholder: "Enter your email",
  };

  test("renders textlabel with placeholder", () => {
    render(<TextInput {...defaultProps} />);
    const textlabel = screen.getByTestId("myInput");
    expect(textlabel).toBeInTheDocument();
  });
  

  test("render textlabel with correct width", () => {
    render(<TextInput {...defaultProps} />);
    const textlabel = screen.getByTestId("myInput");
    expect(textlabel).toHaveStyle(`width : ${defaultProps.width}px`);
  });

  test("renders textlabel with correct border", () => {
    render(
      <TextInput {...defaultProps} border="1px solid black" bradius="5px" />
    );
  });

test("onChange event handler is called correctly", () => {
    const handleChange = jest.fn();
    const { getByTestId } = render(
      <TextInput data-testid= "myInput" onChange={handleChange} />
    );
    const inputElement = getByTestId("myInput").querySelector('input');
    const inputValue = "Test Input";
    fireEvent.change(inputElement, { target: { value: inputValue } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  
  });
});
