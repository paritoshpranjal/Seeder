import Icon from "../../atoms/Icon";
import TypographyComponent from "../../atoms/Typography";
import Box from "@mui/material/Box";
import theme from "../../../theme/theme"

type SideBarElementProps = {
  backgroundColor?: string;
  icon: any;
  content: string;
  color: any;
  variant: any;
};
const SideBarElement = (props: SideBarElementProps) => {
  return (
    <>
      <Box
        bgcolor={props.backgroundColor}
        sx={{
          height: `${theme.spacing(12.25)}`,
          width: `${theme.spacing(52.5)}`,
          borderRadius: "12px",
        }}
        display="flex"
        alignItems="center"
      >
        <Box display="flex" alignItems="center" sx={{ paddingLeft: "15px" }}>
          <Icon src={props.icon} />
          <TypographyComponent
            style={{ paddingLeft: `${theme.spacing(3)}`}}
            variant={props.variant}
            color={props.color}
          >
            {props.content}
          </TypographyComponent>
        </Box>
      </Box>
    </>
  );
};
export default SideBarElement;
