import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom"; // import the Router component
import CashPage from "./index";
import "@testing-library/jest-dom/extend-expect";
import theme from "../../../theme/theme";
import { ThemeProvider } from "@emotion/react";
jest.mock("../../organism/table", () => ({
  __esModule: true,
  default: jest.fn(() => null),
}));

test("renders the typography elements", async () => {
  render(
    <ThemeProvider theme={theme}>
      <Router>
        <CashPage />
      </Router>
    </ThemeProvider>
  );
  const text1 = screen.getByText(/Launch a new/);
  expect(text1).toBeInTheDocument();
  const text3 = screen.getByText(/Sync Now/);
  expect(text3).toBeInTheDocument();
  const text4 = screen.getByText(/My Contracts/);
  expect(text4).toBeInTheDocument();
  const text5 = screen.getByText(/My Cash Kicks/);
  expect(text5).toBeInTheDocument();
});

test("renders the button", async () => {
  render(
    <ThemeProvider theme={theme}>
      <Router>
        <CashPage />
      </Router>
    </ThemeProvider>
  );
  const btn = screen.getByTestId("theBtn");
  expect(btn).toBeInTheDocument();
});
