import React from "react";
import { render, screen } from "@testing-library/react";
import TypographyComponent from "./index";
import theme from "../../../theme/theme";
test("should render typography component", () => {
  render(
    <TypographyComponent variant={"heading1"} color={theme.palette.purple[500]}>
      Hello!
    </TypographyComponent>
  );
  const textElement = screen.getByText(/hello!/i);
  expect(textElement).toBeInTheDocument();
});
