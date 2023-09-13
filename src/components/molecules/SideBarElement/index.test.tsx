import React from "react";
import { render, screen } from "@testing-library/react";
import cashicon from "../../../assets/coin.png";
import SideBarElement from ".";
import theme from "../../../theme/theme";
test("should render sidebar molecule", () => {
  render(
    <SideBarElement
      content={"Cash acceleration"}
      icon={cashicon}
      backgroundColor={theme.palette.purple[400]}
      variant="heading2"
      color={theme.palette.textColor.lowemp}
    />
  );
  const text = screen.getByText("Cash acceleration");
  expect(text).toBeInTheDocument();
});
