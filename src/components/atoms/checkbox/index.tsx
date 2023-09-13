import { Checkbox, ThemeProvider, styled } from "@mui/material";
import React from "react";
import theme from '../../../theme/theme'

export interface CustomCheckboxProps {
  checked?: boolean;
  height?: string | number;
  width?: string | number;
  top?: string | number;
  left?: string | number;
  bgcolor?: string;
  onClick?: () => void;
  disabled?: boolean;
}
const StyledCheckbox = styled(Checkbox)<CustomCheckboxProps>(({ height, width, top, left, bgcolor }) => ({
  height: height ?? "auto",
  width: width ?? "auto",
  top: top ?? "auto",
  left: left ?? "auto",
  color: bgcolor,
}));

const CustomCheckbox = (props: CustomCheckboxProps) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledCheckbox
        data-testid="myCheck"
        checked={props.checked}
        sx={{
          color: theme.palette.icon?.lowemp,
          "& .MuiSvgIcon-root": {
            width: props.width,
            height: props.height,
            top: props.top,
            left: props.left,
          },
          '&.Mui-checked': {
            color: theme.palette.purple?.[400],
          },
        }}
        bgcolor={props.bgcolor}
        onClick={props.onClick}
        disabled={props.disabled}
      />
    </ThemeProvider>
  );
};

export default CustomCheckbox;

