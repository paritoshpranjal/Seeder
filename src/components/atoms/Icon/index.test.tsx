import React from "react";
import { screen, render } from "@testing-library/react";
import Icon from "./index";

test("should render Icon component", () => {
    render(<Icon />);
});

test("should render Icon props alternate text component", () => {
    render(<Icon alt="an-image" />);
});