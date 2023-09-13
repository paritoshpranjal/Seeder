import { Box } from "@mui/system";
import TypographyComponent from "../../atoms/Typography/index";
import ButtonComponent from "../../atoms/Button/index";
import theme from "../../../theme/theme";
import { ThemeProvider } from "@mui/material";
import { message } from "../../../utils/constants";

interface PropsTypes {
  heading1?: string;
  body1?: string;
  highem?: string;
  lowem?: string;
  navigateFunction?: any;
  availableAmt?: any;
}

export default function NewCashCardKick(props: PropsTypes) {
  const container: any = {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",

    gap: theme.spacing(5),
    position: "absolute",
    width: theme.spacing(85),
    height: theme.spacing(64.25),

    backgroundColor: `${theme.palette.background.elevation1}`,

    border: `${theme.spacing(0.25)} solid ${theme.palette.border.lowemp}`,

    borderRadius: theme.spacing(3),
  };
  interface ButtonCompoStyles {
    display: string;
    flexDirection: string;
    justifyContent: string;
    alignItems: string;
    padding: string;
    gap: string;
  }
  const buttoncompo: ButtonCompoStyles = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: `${theme.spacing(1, 5, 2, 7.5)}`,
    gap: `${theme.spacing(2)}`,
    top: `${theme.spacing(41.5)}`,
    left: `${theme.spacing(8)}`,
  };



  return (
    <ThemeProvider theme={theme}>
      <Box component="div" sx={container} data-testid="myBtn">
        <TypographyComponent
          variant={props.heading1}
          color={props.highem}
          padding={theme.spacing(6.25, 5, 0, 7.5)}
        >
          {message.NewLauch} <br />
          {message.cash}
        </TypographyComponent>
        <TypographyComponent variant={props.body1} color={props.lowem} padding={theme.spacing(0.5, 5, 0, 7.5)}>

          {message.AmountLeft}
          <span style={{ color: theme.palette.textColor.medemp }}>
            {" "}
            ${props.availableAmt}
            {" "}
          </span>
          {message.Avail} <br /> {message.AdvanceCash}
        </TypographyComponent>


        <Box component="div" sx={buttoncompo}>

          <ButtonComponent
            onClick={props.navigateFunction}
            variant="contained"
            size="large"
            height={theme.spacing(14.75)}
            width={theme.spacing(69)}
          >
            {message.ButtonData}
          </ButtonComponent>

        </Box>
      </Box>
    </ThemeProvider>
  );
}
