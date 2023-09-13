
import infoIcon from "../../assets/info-circle.png";
import Icon from "../atoms/Icon";
import { Box } from "@mui/system";
import TypographyComponent from "../atoms/Typography";
import { ThemeProvider } from "@emotion/react";

import theme from "../../theme/theme"



interface PropsTypes {
    icon?: any,
    alt?: string,
    infoText?: string,
    mainText?: string,
}

export default function IconTypography(props: PropsTypes) {




    const container: any = {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "0px",
        gap: theme.spacing(6),
        width: theme.spacing(60),
        height: theme.spacing(42),
    }

    const bgIcon: any = {
        boxSizing: "border-box",
        width: theme.spacing(20),
        height: theme.spacing(20),
        borderRadius: theme.spacing(3),
        padding: theme.spacing(5),
        gap: theme.spacing(5),
        border: `${theme.spacing(0.25)} solid ${theme.palette.border.lowemp}`,
        backgroundColor: `${theme.palette.gray[100]}`
    }

    const infoTextStyle: any = {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        padding: theme.spacing(0),
        gap: theme.spacing(2),
        width: theme.spacing(51),
        height: theme.spacing(8.5)
    }

    return (
        <ThemeProvider theme={theme}>
            <Box component="div" sx={container}>
                {props.alt !== "progressBar-icon" ? <Box component="div" sx={bgIcon}>
                    <Icon src={props.icon} alt={props.alt} />
                </Box> :
                    <Icon src={props.icon} alt={props.alt} />
                }
                <Box component="div" sx={infoTextStyle}>
                    <TypographyComponent variant="body1" role="info-text" color={`${theme.palette.textColor.medemp}`}>{props.infoText}</TypographyComponent>
                    <Icon src={infoIcon} data-testid="icon" alt="info-circle-icon" />
                    <TypographyComponent variant="heading1" role="info-text" color={`${theme.palette.textColor.highemp}`}>{props.mainText}</TypographyComponent>
                </Box>
            </Box>
        </ThemeProvider>
    )
}