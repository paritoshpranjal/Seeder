import React, { useState } from "react";
import { render, screen, getByText, fireEvent } from '@testing-library/react';
import NewCashDialog from "./index";
import { ThemeProvider } from "@emotion/react";
import theme from "../../../theme/theme";

describe("Test cases for the Dialogbox", () => {

    test("Component should have the title", () => {
        const getTitle = jest.fn();
        const close = jest.fn();
        render(
            <ThemeProvider theme={theme}>
                <NewCashDialog openModal={true} closeModal={close} getTitle={getTitle} />
            </ThemeProvider>
        );
        const ele = screen.getByTestId("title");
        expect(ele).toHaveTextContent("Name your cash kick");
    });
    test("test useState is working", () => {
        const setStateMock = jest.fn();
        const close = jest.fn();
        const useStateMock: any = (useState: any) => [useState, setStateMock];
        jest.spyOn(React, 'useState').mockImplementation(useStateMock);
        const getTitle = jest.fn();
        const component = render(
            <ThemeProvider theme={theme}>
                <NewCashDialog openModal={true} closeModal={close} getTitle={getTitle} />
            </ThemeProvider>
        )
        const button = component.getByText("Create Cash Kick");
        const inField = component.getByPlaceholderText("Ex: markting expenses");
        fireEvent.change(inField, { target: { value: "sandeep" } });
        fireEvent.click(button);
        const btn = component.getByText("View Cash Kicks");
        expect(btn).toBeInTheDocument();
    });
    test("test useState is working", () => {
        const setStateMock = jest.fn();
        const close = jest.fn();
        const useStateMock: any = (useState: any) => [useState, setStateMock];
        jest.spyOn(React, 'useState').mockImplementation(useStateMock);
        const getTitle = jest.fn();
        const component = render(
            <ThemeProvider theme={theme}>
                <NewCashDialog openModal={true} closeModal={close} getTitle={getTitle} />
            </ThemeProvider>
        )
        const inField = component.getByPlaceholderText("Ex: markting expenses");
        fireEvent.change(inField, { target: { value: "sandeep" } });
        const btn = component.queryByTestId("create-button");
        expect(setStateMock).not.toHaveBeenCalledWith(true);
    });
    test("should dialog is render", () => {
        const setStateMock = jest.fn();
        const getTitle = jest.fn();
        const close = jest.fn();
        const useStateMock: any = (useState: any) => [useState, setStateMock];
        jest.spyOn(React, 'useState').mockImplementation(useStateMock);
        const component = render(
            <ThemeProvider theme={theme}>
                <NewCashDialog openModal={true} closeModal={close} getTitle={getTitle} />
            </ThemeProvider>
        );
        const dialogTitle = component.getByTestId("dialog-title");
        expect(dialogTitle).toBeInTheDocument();
        const crossBtn = component.getByTestId("cross-btn");
        fireEvent.click(crossBtn);
        expect(setStateMock).not.toHaveBeenCalledWith(true);
    });
    test("should dialog content is render", () => {
        const getTitle = jest.fn();
        const close = jest.fn();
        const setStateMock = jest.fn();
        const useStateMock: any = (useState: any) => [useState, setStateMock];
        jest.spyOn(React, 'useState').mockImplementation(useStateMock);
        const component = render(
            <ThemeProvider theme={theme}>
                <NewCashDialog openModal={true} closeModal={close} getTitle={getTitle} />
            </ThemeProvider>
        )
        const crossBtn = component.getByTestId("cross-btn");
        fireEvent.click(crossBtn);
        expect(setStateMock).not.toHaveBeenCalledWith(false);
    })
});
