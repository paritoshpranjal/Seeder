import { styled, Card, Box } from '@mui/material';
import CalendarIcon from '../../../assets/calendar.png';
import IconTypography from '../../molecule/Index';
import documentdownload from '../../../assets/document-download.png';
import percentagesquare from '../../../assets/percentage-square.png';
import theme from '../../../theme/theme';
import { message } from "../../../utils/constants";

export interface CustomCards {
    width: number | string;
    height: number | string;
    padding: number | string;
    top?: number | string;
    left?: number | string;
    radius: number | string;
    gap?: number | string;
    color?: string;
    availanbleAmt?: any;
}

const StyleCard: any = styled(Card)<CustomCards>(({ width, height, padding, top, left, radius, gap, color }) => ({
    width: width,
    height: height,
    padding: padding,
    top: top,
    left: left,
    borderRadius: radius,
    gap: gap,
    backgroundColor: color
}))

const CardData = (props: CustomCards) => {
    const data = parseFloat(`${props.availanbleAmt / 100}`);
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
            data-testid="mycard"
        >
            <Box display="flex"
                flexDirection="row"
                gap={`${theme.spacing(50.5)}`}
                padding={0}
                width="100%"
                marginTop={`${theme.spacing(6)}`}>
                <Box width={`${theme.spacing(6)}`} height={`${theme.spacing(9)}`} marginLeft={`${theme.spacing(6)}`} marginTop={`${theme.spacing(6)}`}>
                    <IconTypography icon={CalendarIcon} infoText={message.duration} mainText={message.months} />
                </Box>
                <Box width={`${theme.spacing(6)}`} height={`${theme.spacing(9)}`} marginLeft={`${theme.spacing(6)}`} marginTop={`${theme.spacing(6)}`}>
                    <IconTypography icon={documentdownload} infoText={message.availablecredit} mainText={`$${data}k`} />
                </Box>
                <Box width={`${theme.spacing(6)}`} height={`${theme.spacing(9)}`} marginLeft={`${theme.spacing(6)}`} marginTop={`${theme.spacing(6)}`}>
                    <IconTypography icon={percentagesquare} infoText={message.maxinterest} mainText={message.interest} />
                </Box>
            </Box>
        </StyleCard>
    )
}

export default CardData; 