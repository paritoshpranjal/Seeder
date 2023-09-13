import { Box} from "@mui/material";
import { styled } from "@mui/material/styles";
import reciept_text from "../../../assets/receipt-text.png"
import IconTypography from '../../molecule/Index';
import theme from "../../../theme/theme";
import { message } from "../../../utils/constants";

export type CustomBox = {
    width: number | string;
    height: number | string;
    padding: number | string;
    top?: number | string;
    left?: number | string;
    radius: number | string;
    gap?: number | string;
    color?: string;
};

const StyleCard: any = styled(Box)<CustomBox>(({ width, height, padding, top, left, radius, gap, color }) => ({
    width: width,
    height: height,
    padding: padding,
    top: top,
    left: left,
    borderRadius: radius,
    gap: gap,
    backgroundColor: color
}))

export const CardDataPayment = (props: CustomBox) => {
    return (
      <StyleCard
            width={props.width}
            height={props.height}
            padding={props.padding}
            top={props.top}
            left={props.left}
            radius={props.radius} 
            gap={props.gap}
            color={props.color}
            data-testid="mycardpayment"
        >
            <Box display="flex"
                flexDirection="row"
                gap={`${theme.spacing(40.5)}`}
                padding={0}
                width="100%" 
                marginTop={`${theme.spacing(6)}`}>
                <Box width={`${theme.spacing(6)}`} height={`${theme.spacing(9)}`} marginLeft={`${theme.spacing(6)}`} marginTop={`${theme.spacing(6)}`}>
                    <IconTypography icon={reciept_text} infoText={message.duedate} mainText={message.leftcredit} />
                </Box>
            </Box>
        </StyleCard>
    );
};
