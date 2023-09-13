import React from "react";
import { screen, render } from "@testing-library/react";
import IconTypography from "./Index";

describe("Testing the IconTypography component", () => {
    test("should render IconTypography component", () => {
        render(<IconTypography />);
    });

    test("Test the component have tyography", async () => {
        render(<IconTypography />);
        const typograpyList = await screen.getAllByRole("info-text");
        expect(typograpyList).toHaveLength(2);
    });
})