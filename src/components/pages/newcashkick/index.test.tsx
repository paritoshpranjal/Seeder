import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CustomButton from "../../atoms/Button";
import "@testing-library/jest-dom";
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";
import theme from "../../../theme/theme";
import Icon from "../../atoms/Icon";
import arrowback from "../../../assets/arrow-left.png";
import NewCashPage from ".";
import { ThemeProvider } from "@emotion/react";


jest.mock('../../organism/table/index.tsx', () => ({
    __esModule: true,
    default: jest.fn(() => null),
}));

describe("ReviewPage", () => {

    it("should render with the correct text and icon", () => {
        render(
            <BrowserRouter>
                <CustomButton
                    data-testid="mybtn"
                    variant={'contained'}
                    size={'small'}
                    backgroundColor={theme.palette.background.elevation1}
                    width={"70px"}
                    children={
                        <span style={{ display: 'flex' }}>

                            <Icon src={arrowback} alt={'loading'} />
                            Back
                        </span>
                    }
                />
            </BrowserRouter>
        );
        const buttonElement = screen.getByRole("button", { name: /Back/i });
        const iconElement = screen.getByAltText("loading");
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement).toHaveTextContent("Back");
        expect(iconElement).toBeInTheDocument();
        expect(iconElement).toHaveAttribute("src", "arrow-left.png");
    });
    test("renderw the typography elements" , async()=>{
        render(
          <ThemeProvider theme={theme}>
          <Router> 
            <NewCashPage />
          </Router>
          </ThemeProvider>
        );
        const text1 = screen.getByText(/New Cash Kick/); 
        expect(text1).toBeInTheDocument();
        const text3 = screen.getByText(/Let’s setup a new cash kick to power your Saas/); 
        expect(text3).toBeInTheDocument();
        const text4 = screen.getByText(/Your Contracts/); 
        expect(text4).toBeInTheDocument();

      })
    


      
}
)