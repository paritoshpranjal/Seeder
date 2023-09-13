import { Button, ButtonProps, styled } from "@mui/material";
import theme from "../../../theme/theme";
import React from "react";

export interface BtnProps extends ButtonProps {
  variant?: "contained" | "outlined";
  children: any;
  onClick?: () => void;
  size?: "small" | "medium" | "large";
  width?: string | number;
  height?: string | number;
  padding?: string | number;
  backgroundColor?: string;
}

const ButtonComponent = styled(Button)<{
  variant?: "contained" | "outlined";
  height?: string | number;
  width?: string | number;
}>(({ height, width, }) => ({
  borderRadius: "12px",
  height: height ?? "auto",
  width: width ?? "auto",
  backgroundColor: theme.palette.purple[500],
  textTransform: "none",
}));

const CustomButton = (props: BtnProps) => {
  const { ...others } = props;
  return (
    <ButtonComponent
      variant={props.variant}
      height={props.height}
      width={props.width}
      onClick={props.onClick}
      size={props.size}
      sx={{
        width: props.width,
        height: props.height,
        padding: props.padding,
        backgroundColor: props.backgroundColor,
        "&:hover": {
          backgroundColor: props.backgroundColor,
        },
        "&.Mui-disabled": {
          background: props.backgroundColor,
        }
      }}
      {...others}
    >
      {props.children}
    </ButtonComponent>
  );
};

export default CustomButton;
