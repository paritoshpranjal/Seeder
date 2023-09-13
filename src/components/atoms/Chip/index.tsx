import styled from "@emotion/styled";
import { Chip, ChipProps } from "@mui/material";
import theme from "../../../theme/theme";

interface PropTypes extends ChipProps {
    label?: string;
    variant?: "filled" | "outlined";
    size?: "medium" | "small" ;
}

export default function CustomChip({ label, variant, size, ...rest }: PropTypes) {

    const StyledChip = styled(Chip)({
        color: `${theme.palette.textColor.medemp}`,
        width: "auto",
        height: "25px",
        borderRadius: "4px",
        padding: "4px 8px 4px 8px",
        backgroundColor: `${theme.palette.background.elevation2}`,

    })

    return (
        <div >
            <StyledChip
                label={label}
                variant={variant}
                size={size}
                data-testid="custom-chip"
                {...rest}
            ></StyledChip>
        </div>
    );
}