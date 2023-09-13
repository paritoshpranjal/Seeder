import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom"; // import the Router component
import HomePage from "./index";
import "@testing-library/jest-dom/extend-expect";
import theme from "../../../theme/theme";
import { ThemeProvider } from "@emotion/react";
jest.mock('../../organism/table', () => ({
  __esModule: true,
  default: jest.fn(() => null),
}));

test("renders the typography elements", async () => {
  render(
    <Router>
      <HomePage />
    </Router>
  );
  // const tableName = screen.getByText(/your payments/i);
  // expect(tableName).toBeInTheDocument();

})
