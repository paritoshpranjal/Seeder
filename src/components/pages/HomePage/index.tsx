import React,{ useEffect, useState } from "react";
import HomeTemplate from "../../../template/HomeTemplate";
import SideBar from "../../organism/SideBarOrganism";
import TypographyComponent from "../../atoms/Typography";
import theme from "../../../theme/theme";
import Profile from "../../molecules/Profile";
import NewCashCardKick from "../../molecules/NewCashCardKick";
import DataTable from "../../organism/table";
import { columnsPayments } from "../../organism/table/columnHeaders";
import { CardDataPayment } from "../../molecules/CardData_payments";
import { ProgressBarWithTypo } from "../../molecules/ProgressBar";
import { Box, padding } from "@mui/system";
import { ThemeProvider } from "@emotion/react";
import InCircleIcon from "../../../assets/info-circle.png";
import Icon from "../../atoms/Icon";
import { HomePageMessage } from "../../../utils/constants";
import { Banner } from "../../molecules/Banner";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function HomePage() {
  const navigate = useNavigate();
  const [paymentData, setPaymentData] = useState([]);
  const [outstandingAmt, setOutStandingAmt] = useState();
  //http://localhost:5000/payments
  useEffect(() => {
    axios
      .get("https://project-data-4yq4.onrender.com/payments")
      .then((response) => {
        setPaymentData(response.data);
      });
    axios
      .get("https://project-data-4yq4.onrender.com/mycashkicks")
      .then((res) => {
        setOutStandingAmt(res.data[res.data.length - 1].totalFinanced);
      })
  }, []);
  const handleNavigateToNewCashKick = () => {
    navigate("/newcashkick");
  };

  return (
    <ThemeProvider theme={theme}>
      {paymentData.length === 0 && (
        <HomeTemplate
          sidebar={<SideBar />}
          header={
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginLeft: `${theme.spacing(5)}`,
                marginTop: `${theme.spacing(6.25)}`,
                marginBottom: `${theme.spacing(6.25)}`,
                marginRight: `${theme.spacing(5)}`,
              }}
            >
              <Box
                style={{ display: "flex", flexDirection: "column" }}
                gap={theme.spacing(0.5)}
              >
                <TypographyComponent
                  variant="heading1"
                  color={theme.palette.textColor.highemp}
                >
                  {HomePageMessage.Greeting}
                </TypographyComponent>
                <TypographyComponent
                  variant="heading2"
                  color={theme.palette.textColor.lowemp}
                >
                  {HomePageMessage.Date}
                </TypographyComponent>
              </Box>

              <Profile />
            </div>
          }
          datacard={
            <Box marginLeft={theme.spacing(5)}>
              <Banner
                buttonName={HomePageMessage.ButtonName}
                headingSentence={HomePageMessage.HeadingSentence}
                description={HomePageMessage.Description}
              />
            </Box>
          }
          cashkickcard={
            <Box
              marginLeft={theme.spacing(4)}
              width={theme.spacing(85)}
              height={theme.spacing(64.25)}
            >
              <NewCashCardKick
                availableAmt={outstandingAmt}
                navigateFunction={handleNavigateToNewCashKick}
                heading1="heading1"
                body1="body1"
                highem={theme.palette.textColor.highemp}
                lowem={theme.palette.textColor.lowemp}
              />
            </Box>
          }
          table={
            <Box
              sx={{
                backgroundColor: `${theme.palette.background.elevation1}`,
                padding: `${theme.spacing(8)}`,
              }}
              gap={theme.spacing(5)}
              width={theme.spacing(265)}
              height={theme.spacing(132.25)}
              display="flex"
              flexDirection="column"
              marginLeft={theme.spacing(5)}
              borderColor={theme.palette.border.lowemp}
              borderRadius={theme.spacing(3)}
              marginRight={theme.spacing(5)}
              marginTop={theme.spacing(3.75)}
              
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: `${theme.spacing(2)} `,
                }}
              >
                <TypographyComponent
                  variant="heading2"
                  fontWeight={600}
                  color={theme.palette.textColor.highemp}
                >
                  {HomePageMessage.TableName}
                </TypographyComponent>
                <Icon src={InCircleIcon} />
              </div>
              <DataTable checkBox={false} columns={columnsPayments} rows={[]} />
            </Box>
          }
        />
      )}
      <HomeTemplate
        sidebar={<SideBar />}
        header={
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginLeft: `${theme.spacing(5)}`,
              marginTop: `${theme.spacing(6.25)}`,
              marginBottom: `${theme.spacing(6.25)}`,
              marginRight: `${theme.spacing(5)}`,
            }}
          >
            <Box style={{ display: "flex", flexDirection: "column" }} gap="2px">
              <TypographyComponent
                variant="heading1"
                color={theme.palette.textColor.highemp}
              >
                {HomePageMessage.Greeting}
              </TypographyComponent>
              <TypographyComponent
                variant="heading2"
                color={theme.palette.textColor.lowemp}
              >
                {HomePageMessage.Date}
              </TypographyComponent>
            </Box>

            <Profile />

          </div>
        }
        datacard={
          <Box marginLeft={theme.spacing(5)}>
            <CardDataPayment
              height={theme.spacing(62.5)}
              width={theme.spacing(85)}
              left={theme.spacing(69.5)}
              top={theme.spacing(35.75)}
              radius={theme.spacing(3)}
              padding={theme.spacing(0.75)}
              gap={theme.spacing(3)}
              color={theme.palette.background.elevation1}
            />
          </Box>
        }
        progresscard={
          <Box marginLeft={theme.spacing(3.75)}>
            <ProgressBarWithTypo
              headText={HomePageMessage.HeadText}
              bodyText={outstandingAmt}
            />
          </Box>
        }
        cashkickcard={
          <Box
            marginLeft={theme.spacing(3.75)}
            width={theme.spacing(85)}
            height={theme.spacing(64.25)}
          >
            <NewCashCardKick
              heading1="heading1"
              availableAmt={outstandingAmt}
              navigateFunction={handleNavigateToNewCashKick}
              body1="body1"
              highem={theme.palette.textColor.highemp}
              lowem={theme.palette.textColor.lowemp}
            />
          </Box>
        }
        table={

          <Box
          display="flex"
          flexDirection="column"
            sx={{
              backgroundColor: `${theme.palette.background.elevation1}`,
              padding: `${theme.spacing(8)}`,
            }}
            gap={theme.spacing(5)}
            width={theme.spacing(265)}
            height={theme.spacing(132.25)}
            marginLeft={theme.spacing(5)}
            marginRight={theme.spacing(5)}
            marginTop={theme.spacing(3.75)}
            borderColor={theme.palette.border.lowemp}
            borderRadius={theme.spacing(3)}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: `${theme.spacing(2)}`,
              }}
            >
              <TypographyComponent
                variant="heading2"
                fontWeight={600}
                color={theme.palette.textColor.highemp}
              >
                {HomePageMessage.TableName}
              </TypographyComponent>
              <Icon src={InCircleIcon} />
            </div>

            <DataTable
              checkBox={false}
              columns={columnsPayments}
              rows={paymentData}
            />
          </Box>
        }
      />
    </ThemeProvider>
  );
}

export default HomePage;
