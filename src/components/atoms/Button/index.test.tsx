import React from "react";
import { render,screen } from "@testing-library/react";
import CustomButton from "./index";

test("Should Renders a Button", () => {
    render(
      <CustomButton  size="medium" variant="contained">
        Button
      </CustomButton>
    );
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });
  
  test("Should Renders a Button with size medium", () => {
    render(
      <CustomButton  size="medium" variant="contained">
        Button
      </CustomButton>
    );
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });
  test("Should Renders a Button with size large", () => {
    render(
      <CustomButton  size="large" variant="contained">
        Button
      </CustomButton>
    );
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });
  test("Should Renders a Button with size small", () => {
    render(
      <CustomButton  size="small" variant="contained">
        Button
      </CustomButton>
    );
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });
  
  