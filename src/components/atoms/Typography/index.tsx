import { Typography, TypographyProps } from "@mui/material";
interface CustomTypographyProps extends TypographyProps {
  variant: "heading1" | "heading2" | "heading3" | "title" | "body1" | "body2" | "button" | "caption";
  color?: any;
};
const TypographyComponent = ({ variant, children, color, ...rest }: CustomTypographyProps) => {
  return (
    <Typography variant={variant} color={color} {...rest}>{children}</Typography>
  );
};

export default TypographyComponent;