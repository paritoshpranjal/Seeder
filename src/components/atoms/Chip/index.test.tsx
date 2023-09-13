import React from "react";
import { render } from "@testing-library/react";
import CustomChip from "./index";

test("should render Chip component", () => {
    render(<CustomChip

        label="Available"
        variant="outlined"
        size="medium"
    />);
});

test("should render Chip component", () => {
    render(<CustomChip

        label="Available"
        variant="filled"
        size="medium"
    />);
});