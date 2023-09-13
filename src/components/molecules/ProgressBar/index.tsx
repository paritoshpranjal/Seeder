import { Box, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import Icon from "../../atoms/Icon/index";
import infocircle from "../../../assets/info-circle.png";
import theme from "../../../theme/theme";
import { ThemeProvider } from "@emotion/react";
import TypographyComponent from "../../atoms/Typography";
import CircularProgressBar from "../../atoms/ProgressBar";

export type ProgressBarWithTypoProps = {
    headText: string;
    bodyText: any;
};

const StyleBox = styled(Box)(({ theme }) => ({
    background: theme.palette.background.elevation1,
    border: `1px solid ${theme.palette.border.lowemp}`,
    borderRadius: `${theme.spacing(3)}`,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: `${theme.spacing(8)}`,
    gap: `${theme.spacing(3)}`,
    width: `${theme.spacing(85)}`,
    height: `${theme.spacing(48)}`,
    top: `${theme.spacing(35.75)}`,
    left: `${theme.spacing(159.5)}`
}));

export const ProgressBarWithTypo = (props: ProgressBarWithTypoProps) => {
    return (
        <ThemeProvider theme={theme} >
            <StyleBox
                data-testid="myMProgressBar"
            >
                <Box marginTop={`${theme.spacing(4)}`}>
                    <CircularProgressBar value={60} />
                </Box>
                <Stack marginTop={`${theme.spacing(9)}`} width={`${theme.spacing(54)}`} height={`${theme.spacing(14)}`}  >
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: "center", gap: `${theme.spacing(2)}` }}>
                        <TypographyComponent variant="body1" color={theme.palette.textColor.medemp} >
                            {props.headText}
                        </TypographyComponent>
                        <Icon src={infocircle} width={theme.spacing(4.165)} height={theme.spacing(4.165)} />
                    </div>
                    <TypographyComponent variant="heading1" color={theme.palette.textColor.highemp} >
                        ${props.bodyText}
                    </TypographyComponent>
                </Stack>
            </StyleBox>
        </ThemeProvider>
    );
};
