import { useState, useEffect } from "react";
import axios from "axios";
import infoicon from "../../../assets/info-circle.png";
import refresh from "../../../assets/Refresh.png";
import DataTable from "../../organism/table";
import {
  columnsContracts,
  columnsCachKicks,
} from "../../organism/table/columnHeaders";
import HomeTemplate from "../../../template/HomeTemplate";
import SideBar from "../../organism/SideBarOrganism";
import TypographyComponent from "../../atoms/Typography";
import theme from "../../../theme/theme";
import { ThemeProvider, Box } from "@mui/material";
import { message } from "../../../utils/constants";
import CardData from "../../molecules/CardData";
import NewCashCardKick from "../../molecules/NewCashCardKick";
import Profile from "../../molecules/Profile";
import Icon from "../../atoms/Icon";
import CustomButton from "../../atoms/Button";
import { useNavigate } from "react-router-dom";

const CashPage = () => {
  const navigate = useNavigate();
  const tablestyles: any = {
    padding: theme.spacing(5),
    width: theme.spacing(265),
    backgroundColor: `${theme.palette.background.elevation1}`,
    border: `${theme.spacing(0.25)} solid ${theme.palette.border.lowemp}`,
    borderRadius: theme.spacing(3),
    margin: theme.spacing(3.75, 0, 3.75, 3.75)
  };
  const [table1data, settable1Data] = useState([]);
  const [table2data, settable2Data] = useState([]);
  const [coldata1, setcoldata1] = useState([]);
  const [coldata2, setcoldata2] = useState([]);
  const [showContract, setshowContract] = useState(false);
  const [showCash, setshowcash] = useState(true);
  const [clicked1, setclicked1] = useState(false);
  const [clicked2, setclicked2] = useState(true);

  const handleClick1 = () => {
    setshowContract(true);
    setshowcash(false);
    setclicked1(true);
    setclicked2(false);
  };
  const handleClick2 = () => {
    setshowcash(true);
    setshowContract(false);
    setclicked1(false);
    setclicked2(true);
  };
  useEffect(() => {
    // axios.get("http://localhost:5000/contracts").then((response) => {
    //   settable1Data(response.data);
    axios.get("https://project-data-4yq4.onrender.com/contracts").then((response) => {
      settable1Data(response.data);
    });
    // axios.get("http://localhost:5000/mycashkicks").then((response) => {
    //   settable2Data(response.data);
    axios.get("https://project-data-4yq4.onrender.com/mycashkicks").then((response) => {
      settable2Data(response.data);
    });
    const deletecol: any = columnsContracts.filter((value, index) => {
      if (index !== 4 && index !== 6) return value;
    });
    setcoldata1(deletecol);
    setcoldata2(columnsCachKicks);
  }, []);
  //http://localhost:5000/totalAmount
//https://project-data-4yq4.onrender.com/totalAmount
  const [amt, setAmt] = useState(0);
  const availableAmt = async () => {
    const totalCredit = await axios.get("https://project-data-4yq4.onrender.com/totalAmount").then((res) => res.data.AvailableCredit)
    setAmt(totalCredit)
  };
  availableAmt()
  const handleNavigateToNewCashKick = () => {
    navigate("/newcashkick");
  }

  return (
    <ThemeProvider theme={theme}>
      <HomeTemplate

        sidebar={<SideBar />}
        header={
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            style={{
              margin: theme.spacing(3.75),
            }}
          >
            <Box display="flex" flexDirection="column">
              <Box>
                <TypographyComponent
                  variant="title"
                  color={theme.palette.textColor.highemp}
                >
                  {message.Heading}
                </TypographyComponent>
              </Box>
              <Box>
                <TypographyComponent
                  variant="caption"
                  color={theme.palette.textColor.lowemp}
                >
                  {message.SubHeading}
                </TypographyComponent>
              </Box>
            </Box>
            <Profile />
          </Box>
        }
        datacard={
          <Box
            style={{
              marginLeft: theme.spacing(3.75),
            }}
          >
            <CardData
              height={theme.spacing(65)}
              width={theme.spacing(187.5)}
              color={theme.palette.background.elevation1}
              padding={""}
              top={""}
              left={""}
              radius={theme.spacing(3)}
              gap={""}
              availanbleAmt={amt}
            />
          </Box>
        }
        cashkickcard={
          <Box
            style={{
              marginLeft: theme.spacing(3),
            }}
            data-testid="theBtn"
          >
            <NewCashCardKick
              availableAmt={amt}
              heading1="heading1"
              body1="body1"
              highem={theme.palette.textColor.highemp}
              lowem={theme.palette.textColor.lowemp}
              navigateFunction={handleNavigateToNewCashKick}
            />
          </Box>
        }
        table={
          <Box component="div" sx={tablestyles}>
            <Box sx={{ width: theme.spacing(255), marginLeft: theme.spacing(3) }}>

              <Box display={"flex"} alignItems={"center"}>
                <Box component="div" flexGrow={1} gap={theme.spacing(2)} >
                  <TypographyComponent
                    variant="heading3"
                    color={theme.palette.textColor.highemp}
                    sx={{ marginRight: theme.spacing(1.25) }}
                  >
                    {message.Heading}
                  </TypographyComponent>
                  <Icon src={infoicon} alt="info" width={theme.spacing(4.165)} height={theme.spacing(4.165)} />
                </Box>
                <CustomButton
                  variant="contained"
                  backgroundColor={theme.palette.background.elevation1}
                >
                  <Icon src={refresh} alt="refresh" />
                  <TypographyComponent
                    variant="caption"
                    color={theme.palette.purple[400]}
                    sx={{ marginLeft: theme.spacing(1.25) }}
                  >
                    {message.sync}
                  </TypographyComponent>
                </CustomButton>
              </Box>
              <Box sx={{ margin: theme.spacing(3.75, 0) }}>
                <span style={{ marginRight: theme.spacing(2) }}>
                  <CustomButton
                    variant="contained"
                    onClick={handleClick1}
                    backgroundColor={
                      clicked1 ? theme.palette.purple[600] : theme.palette.gray[100]
                    }
                    width={theme.spacing(36.75)}
                    height={theme.spacing(10.75)}
                  >
                    <TypographyComponent
                      variant="caption"
                      color={
                        clicked1
                          ? theme.palette.purple[400]
                          : theme.palette.textColor.medemp
                      }
                    >
                      {message.Contract}
                    </TypographyComponent>
                  </CustomButton>
                </span>
                <CustomButton
                  variant="contained"
                  onClick={handleClick2}
                  backgroundColor={
                    clicked2 ? theme.palette.purple[600] : theme.palette.gray[100]
                  }
                  width={theme.spacing(36.75)}
                  height={theme.spacing(10.75)}
                >
                  <TypographyComponent
                    variant="caption"
                    color={
                      clicked2
                        ? theme.palette.purple[400]
                        : theme.palette.textColor.medemp
                    }
                  >
                    {message.cashkick}
                  </TypographyComponent>
                </CustomButton>

              </Box>

              {showContract && !showCash ? (
                <DataTable
                  checkBox={false}
                  columns={coldata1}
                  rows={table1data}
                />
              ) : (
                <DataTable
                  checkBox={false}
                  columns={coldata2}
                  rows={table2data}
                />
              )}
            </Box>
          </Box>
        }
      />
    </ThemeProvider>
  );
};

export default CashPage;