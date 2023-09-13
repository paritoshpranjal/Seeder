import { fireEvent, render } from "@testing-library/react";
import SliderComponent from ".";

describe("SliderComponent", () => {
  it("renders with initial value", () => {
    const handleChange = jest.fn();
    const { getByRole } = render(
      <SliderComponent value={50} handleChange={handleChange} />
    );
    const slider = getByRole("slider");
    expect(slider).toHaveAttribute("aria-valuenow", "50");
  });

  it("calls handleChange on slider change", () => {
    const handleChange = jest.fn();
    const { getByRole } = render(
      <SliderComponent value={50} handleChange={handleChange} />
    );
    const slider = getByRole("slider");
    fireEvent.change(slider, { target: { value: 75 } });
    expect(handleChange).toHaveBeenCalledWith(expect.any(Object), 75);
  });
});