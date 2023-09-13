import React from "react";
import {Paper,IconButton} from "@mui/material";
import TypographyComponent from "../../atoms/Typography";
import SliderComponent from "../../atoms/Slider";
import theme from "../../../theme/theme";
import Divider from "@mui/material/Divider";
import InfoIcon from "../../../assets/info-circle.png";
import styled from "@emotion/styled";
import { ThemeProvider } from "@emotion/react";

import {
  SummaryText,
  TermText,
  SelectedText,
  SlideText,
  OutofSelectedText,
  PaybackText,
  Rateext,
  TotalText,
} from "../../../utils/constants";
import CustomButton from "../../atoms/Button";

const PaperStyle = styled(Paper)({
  width: `${theme.spacing(85)}`,
  //height: `${theme.spacing(128.25)}`,
  padding: `${theme.spacing(8)}`,
  gap: `${theme.spacing(5)}`,
  backgroundColor: theme.palette.background.elevation1,
  borderRadius: `${theme.spacing(3)}`,
});

const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
});
const SummaryTypo = styled("div")({
  display: "flex",
  justifyContent: "left",
});
const InfoTypo = styled("div")({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  marginTop: `${theme.spacing(5)}`,
});
const SelectInfoTypo = styled("div")({
  display: "flex",
  flexDirection: "row",
  marginTop: `${theme.spacing(2.5)}`,
  gap: "0.3rem",
});

const PaybackTypo = styled("div")({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  marginTop: `${theme.spacing(5)}`,
});
const RateTypo = styled("div")({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  marginTop: `${theme.spacing(2.5)}`,
  marginBottom: `${theme.spacing(5)}`,
});
const ToatalTypo = styled("div")({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  marginTop: `${theme.spacing(5)}`,
  marginBottom: `${theme.spacing(5)}`,
});
interface Contract {
  id: string;
  name: string;
  type: string;
  status: string;
  perPayment: string;
  termLength: {
    termLength: string;
    termPercentage: string;
  };
  totalFinanced: string;
  paymentAmount: string;
}
interface DataProps {
  term?: number;
  selectedContracts?: Contract[] | any;
  selectContracts?: number;
  selectedamount?: number;
  totalamount?: number;
  paybackamount?: number;
  ratepercent?: number;
  rate?: number;
  totalpayout?: number;
  percentage?: number;
  buttonTittle?: any;
  ChangeSlider: (e: any, value: any) => void;
  handleResetClick?: () => void;
  handleOpenModal?: any;
  navigateNextPage?: any;
}

function SummaryBox(props: DataProps) {
  return (
    <ThemeProvider theme={theme}>
      <PaperStyle>
        <Container>
          <SummaryTypo>
            <TypographyComponent
              variant="heading2"
              fontWeight="600"
              color={theme.palette.textColor.highemp}
            >
              {SummaryText}
            </TypographyComponent>
            <IconButton>
              {" "}
              {
                <img
                  src={InfoIcon}
                  width={theme.spacing(4.25)}
                  height={theme.spacing(4.25)}
                />
              }
            </IconButton>
          </SummaryTypo>
          <InfoTypo>
            <TypographyComponent
              variant="body1"
              color={theme.palette.textColor.lowemp}
            >
              {TermText}
            </TypographyComponent>
            <TypographyComponent
              variant="body1"
              color={theme.palette.textColor.highemp}
            >
              {props.term} months
            </TypographyComponent>
          </InfoTypo>
          <InfoTypo>
            <TypographyComponent
              variant="body1"
              color={theme.palette.textColor.lowemp}
            >
              {SelectedText}
            </TypographyComponent>
            <TypographyComponent
              variant="body1"
              color={theme.palette.textColor.highemp}
            >
              {props.selectContracts}
            </TypographyComponent>
          </InfoTypo>
          {props.buttonTittle === "Review Your Credit" && (
            <>
              <InfoTypo>
                <TypographyComponent
                  variant="body1"
                  color={theme.palette.textColor.lowemp}
                >
                  {SlideText}
                </TypographyComponent>
                <CustomButton
                  variant="contained"
                  size="small"
                  backgroundColor={theme.palette.background.elevation2}
                  width={theme.spacing(16.25)}
                  height={theme.spacing(7.75)}
                  onClick={props.handleResetClick}
                >
                  Reset
                </CustomButton>
              </InfoTypo>

              <div style={{ display: "flex", marginTop: "10px" }}>
                <SliderComponent
                  value={props.percentage}
                  handleChange={(e, v) => props.ChangeSlider(e, v)}
                />
              </div>

              <SelectInfoTypo>
                <TypographyComponent
                  variant="body1"
                  color={theme.palette.purple[400]}
                >
                  ${props.selectedamount}
                </TypographyComponent>
                <TypographyComponent
                  variant="body1"
                  color={theme.palette.textColor.highemp}
                >
                  {OutofSelectedText}
                </TypographyComponent>

                <TypographyComponent
                  variant="body1"
                  color={theme.palette.textColor.lowemp}
                >
                  ${props.totalamount}
                </TypographyComponent>
              </SelectInfoTypo>
            </>
          )}
          <PaybackTypo>
            <TypographyComponent
              variant="body1"
              color={theme.palette.textColor.lowemp}
            >
              {PaybackText}
            </TypographyComponent>
            <TypographyComponent
              variant="body1"
              color={theme.palette.textColor.highemp}
            >
              ${props.selectedamount}
            </TypographyComponent>
          </PaybackTypo>

          <RateTypo>
            <TypographyComponent
              variant="body1"
              color={theme.palette.textColor.lowemp}
            >
              {Rateext}
            </TypographyComponent>
            <div
              style={{
                display: "flex",
                alignContent: "center",
                alignItems: "center",
                gap: "0.3rem",
              }}
            >
              <TypographyComponent
                variant="caption"
                color={theme.palette.textColor.lowemp}
              >
                ({props.ratepercent}%)
              </TypographyComponent>
              <TypographyComponent
                variant="body1"
                color={theme.palette.textColor.highemp}
              >
                ${props.rate}
              </TypographyComponent>
            </div>
          </RateTypo>
          <Divider
            sx={{ border: `1px solid ${theme.palette.border.highemp}` }}
          />
          <ToatalTypo>
            <TypographyComponent
              variant="heading2"
              color={theme.palette.textColor.lowemp}
            >
              {TotalText}
            </TypographyComponent>
            <TypographyComponent
              variant="heading1"
              fontWeight="600"
              color={theme.palette.textColor.highemp}
            >
              ${props.totalpayout}
            </TypographyComponent>
          </ToatalTypo>

          <CustomButton
            height={theme.spacing(15)}
            backgroundColor={theme.palette.purple[500]}
            variant="contained"
            size="large"
            onClick={
              props.buttonTittle !== "Review Your Credit"
                ? props.handleOpenModal
                : props.navigateNextPage
            }
            disabled={props.buttonTittle === "Review Your Credit" && props.selectContracts === 0}
          >
            {props.buttonTittle}
          </CustomButton>
        </Container>
      </PaperStyle>
    </ThemeProvider>
  );
}

export default SummaryBox;
