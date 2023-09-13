import { Box } from "@mui/system";
import TypographyComponent from "../../atoms/Typography/index";
import TextfieldComponent from "../../atoms/Textfield/index";
import theme from "../../../theme/theme";
import { ThemeProvider } from "@mui/material";
import { message } from "../../../utils/constants";
interface PropsTypes {
  heading1?: string;
  onChange?: ()=>void;
  heading2?: string;
  body1?: string;
  highem?: string;
  lowem?: string;
  bordercolor?: string;
  type?: string;
  placeholder?: string;
  bodycolor?: string;
}

export default function TextTypo(props: PropsTypes) {
  const container: any = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: theme.spacing(0),

    position: "absolute",
    width: theme.spacing(160),
    height: theme.spacing(90.75),
 

    backgroundColor: `${theme.palette.gray[100]}`,

    border: `${theme.spacing(0.25)} solid ${theme.palette.border.lowemp}`,

    borderRadius: theme.spacing(3),
  };
 const textcompo: any = {
    padding : `${theme.spacing(0,0,0,9.5)}`,
 };

  return (
    <ThemeProvider theme={theme}>
      <Box component="div" sx={container}  data-testid= "myText">
        <TypographyComponent variant={props.heading1} color={props.highem} padding = {theme.spacing(5,0,1.25,9.5)}>
          {message.Name}
        </TypographyComponent>
        <TypographyComponent variant={props.heading2} color={props.lowem} padding={theme.spacing(0,0,5,9.5)}>
          {message.AddCashKick}
        </TypographyComponent>
        <TypographyComponent
          variant={props.body1}
          color={props.bodycolor}
          padding={theme.spacing(2,4,2,9.5)}
        >
          {message.CashKickName}
        </TypographyComponent>
        <Box component= "div" sx={textcompo}> <TextfieldComponent
          placeholder={props.placeholder}
          onChange={props.onChange}
         
          type={props.type}
          width={theme.spacing(140)}
          height={theme.spacing(14)}
          border={`${theme.spacing(0.25)} solid`}
          bcolor={props.bordercolor}
          bradius={theme.spacing(3)}
          typographyVariant={theme.typography.body1}
          typocolor={theme.palette.textColor.lowemp}
          bgcolor={theme.palette.gray[50]}
        />
        </Box>
      </Box>
    </ThemeProvider>
  );
}
