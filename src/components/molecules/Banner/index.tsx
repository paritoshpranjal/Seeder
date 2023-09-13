import React from "react";
import { Card, Paper, ThemeProvider, styled } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import theme from "../../../theme/theme";
import Typography from "../../atoms/Typography";
import congratsImage from "../../../assets/images/image.svg";
import CustomButton from "../../atoms/Button";
const StyledCard = styled(Card)({
  width: "700px",
  borderRadius:'12px'
  
});

const StyledCardMedia = styled(CardMedia)({
  height: "259px",
  borderRadius: "12px",
});

const OuterDiv = styled("div")({
  position: "relative",
});

const InnerDiv = styled("div")({
  position: "absolute",
  top: 1,
  left: "20%",
  transform: "translateX(-50%)",
});

const typography1 = {
  width: "250px",
  fontSize: "24px",
  color: theme.palette.white?.[500],
  fontWeight: 600,
};
const typography2 = {
  fontSize: "16px",
  color: theme.palette.white?.[500],
  margin: "12px 0px 15px 0px",
  fontWeight: 500,
};

const Paperstyle = styled(Paper)({
  backgroundColor: "transparent",
  width: "282px",
  margin: "28px 0px 0px 64px",
  color: "theme.palette.white.500",
});

interface BannerProps {
  buttonName: string;
  headingSentence: string;
  description: string;
}

export const Banner: React.FC<BannerProps> = ({
  buttonName,
  headingSentence,
  description,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledCard>
        <OuterDiv>
          <StyledCardMedia image={congratsImage} title="party" />
          <InnerDiv>
            <Paperstyle elevation={0}>
              <Typography style={typography1} variant={"title"}>
                {headingSentence}
              </Typography>
              <Typography style={typography2} variant={"body1"}>
                {description}
              </Typography>
              <CustomButton
                variant="outlined"
                size="large"
                sx={{
                  color: theme.palette.white[500],
                  bordercolor: theme.palette.white[500],
                  border: "1px solid",
                  padding: "15px 40px",
                  borderRadius: "12px",
                  textTransform: "none",
                  fontSize: "16px",
                  fontWeight: 600,
                  "&:hover": {
                    color: theme.palette.white?.[500],
                    bordercolor: theme.palette.white?.[500],
                  },
                }}
              >
                {buttonName}
              </CustomButton>
            </Paperstyle>
          </InnerDiv>
        </OuterDiv>
      </StyledCard>
    </ThemeProvider>
  );
};
