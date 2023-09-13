import { render, screen, fireEvent } from "@testing-library/react";
import InputFieldElement, { PropsTypes } from "./index";
import "@testing-library/jest-dom/extend-expect";
import theme from "../../../theme/theme";
describe("InputFieldElement", () => {
  const defaultProps: PropsTypes = {
    bcolor: `${theme.palette.purple[400]}`,
    placeholder: "Enter your email",
  };

  test("render textlabel with placeholder", () => {
    render(<InputFieldElement {...defaultProps} />);
    const textlabel = screen.getByTestId("myText");
    expect(textlabel).toBeInTheDocument();
  });
  test("render the typography elements" , ()=>{
    render(<InputFieldElement/>);
  const text = screen.getByText('Name your cash kick'); 
  expect(text).toBeInTheDocument();
  })

  test("renders textlabel with correct border", () => {
    render(
      <InputFieldElement {...defaultProps} border="1px solid black" bradius="5px" />
    );
  });

  test("onChange event handler is called correctly", () => {
    const handleChange = jest.fn();
    const { getByTestId } = render(
      <InputFieldElement data-testid="myText" onChange={handleChange} />
    );
    const inputElement = getByTestId("myText").querySelector("input");
    const inputValue = "Test Input";
    fireEvent.change(inputElement, { target: { value: inputValue } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
