import * as React from "react";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import theme from "../../../theme/theme";
interface SlideProps {
  value?: number,
  handleChange: ((event: any, value: any) => void)
}
const SliderCustomized = styled(Slider)({
  color: theme.palette.gray[50],
  height: 8,
  "& .MuiSlider-track": {
    border: "none",
    color: theme.palette.purple[500],
  },
  "& .MuiSlider-thumb": {
    height: 23,
    width: 23,
    backgroundColor: theme.palette.purple[500],
    border: `3px solid ${theme.palette.purple[400]}`, //see
    borderRadius: "8px",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "none",
    },
    "&:before": {
      display: "none",
    },
  },
});

const SliderComponent = (props: SlideProps) => {
  return (
    <>
      <SliderCustomized aria-label="slider" value={props.value} onChange={(e, v) => {
        props.handleChange(e, v)
      }
      } />
    </>
  );
};

export default SliderComponent;
