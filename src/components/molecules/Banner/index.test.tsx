import React from "react";
import { render, screen } from "@testing-library/react";
import { Banner } from "./index";
import "@testing-library/jest-dom";

describe("Banner component", () => {
  const bannerProps = {
    buttonName: "Learn More",
    headingSentence: "Congratulations you are ready to start!",
    description:
      "You are approved for funding. We are ready to advance you upto $8.3M",
  };

  it("renders with the correct props", () => {
    render(<Banner {...bannerProps} />);
    const headingElement = screen.getByText(bannerProps.headingSentence);
    const descriptionElement = screen.getByText(bannerProps.description);
    const buttonElement = screen.getByText(bannerProps.buttonName);
    expect(headingElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });
});
