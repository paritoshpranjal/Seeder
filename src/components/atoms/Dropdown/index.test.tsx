import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Dropdown from ".";


test("Should Render a Dropdown Button with Props", () => {
  render(
    <Dropdown width="9px" height="9px"/>
    
  );
  const buttonElement = screen.getByRole("button");
  expect(buttonElement).toBeInTheDocument();
});

test("Should Render a Dropdown Button without props", () => {
  render(
    <Dropdown />
    
  );
  const buttonElement = screen.getByRole("button");
  expect(buttonElement).toBeInTheDocument();
});