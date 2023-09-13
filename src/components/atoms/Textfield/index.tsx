
import { InputBase, styled } from "@mui/material";
import theme from "../../../theme/theme";

export interface InputProps {
  placeholder?: string;
  onChange?: (e: any) => void;
  value?: string;
  type?: string;
  height: string | number;
  width: string | number;
  border?: string | number;
  bradius?: string | number;
  bcolor?: string;
  typographyVariant?: React.CSSProperties;
  typocolor?: string;
  bgcolor?: string;
}

const StyledInput = styled(InputBase)<{
  width?: number | string;
  height?: number | string;
  border?: number | string;
  bradius?: string | number;
  bcolor?: string;
  bgcolor?: string;
}>(({ width, height, border, bradius, bcolor, bgcolor }) => ({
  width: width ?? "auto",
  height: height ?? "auto",
  border: border ?? "auto",
  borderColor: bcolor ?? "auto",
  borderRadius: bradius ?? "auto",
  backgroundColor: bgcolor ?? "auto",
}));
const TextInput = (props: InputProps) => {
  return (
    <StyledInput
      data-testid="myInput"
      type={props.type}
      onChange={props.onChange}
      placeholder={props.placeholder}
      value={props.value}
      width={props.width}
      height={props.height}
      border={props.border}
      bradius={props.bradius}
      bcolor={props.bcolor}
      bgcolor={props.bgcolor}
      sx={{
        color: props.typocolor || 'auto',
        padding: `${theme.spacing(3)} ${theme.spacing(4.25)}`,
        typography: props.typographyVariant || 'auto',
        '&: hover': {
          borderColor: `${theme.palette.purple[400]}`
        }
      }}

    ></StyledInput>
  );
};

export default TextInput;