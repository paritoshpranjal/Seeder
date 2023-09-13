import React, { useState, useEffect } from "react";
import HomeTemplate from "../../../template/HomeTemplate";
import SideBar from "../../organism/SideBarOrganism";
import DataTable from "../../organism/table";
import { columnsContracts } from "../../organism/table/columnHeaders";
import SummaryBox from "../../organism/SummaryBox";
import axios from "axios";
import { GridColDef, GridRowSelectionModel } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import TypographyComponent from "../../atoms/Typography";
import CustomButton from "../../atoms/Button";
import theme from "../../../theme/theme";
import Icon from "../../atoms/Icon";
import arrowback from "../../../assets/arrow-left.png";
import infocircle from "../../../assets/info-circle.png";
import { message } from "../../../utils/constants";
import Profile from "../../molecules/Profile";
import { useNavigate } from "react-router";

interface DataProps {
  term?: number;
  selectedContracts?: Contract[];
  selectContracts?: number;
  selectedamount?: number; //$164542.45
  totalamount?: number; //$880000.00
  paybackamount?: number; //170454
  ratepercent?: number; //12
  rate?: number; //20454
  totalpayout?: number; //150000
  handleChangeSlider?: (event: any, value: number) => void;
}
interface DataTableProps {
  checkBox: boolean;
  columns: GridColDef[];
  rows: Contract[];
  setSelectedContracts: (selectedContracts: GridRowSelectionModel) => void;
  selectedContracts: GridRowSelectionModel;
}
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

const NewCashPage = (props: DataProps) => {
  const navigate = useNavigate();
  const ratepercent = 12;
  const [rows, setRows] = useState<Contract[]>([]);
  const [selectedContracts, setSelectedContracts] = useState<any>([]);
  const [selectedAmount, setSelectedAmount] = useState<number>(0);
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [rate, setRate] = useState<number>(0);
  const [setTerm, setTermData] = useState<number>(12);
  const [selectedRow, setSelectedRow] = useState<number>(0);
  const [totalPayoutAmt, setTotalPayoutAmt] = useState<number>(0);
  const [percentage, setPercentage] = useState<number>(0);
  const [selectedContractsData, setSelectedContractsData] = useState<
    Contract[]
  >([]);

  const navigateReviewPage = () => {
    navigate("/reviewcashkick", {
      state: {
        selectedContractsData,
        term: setTerm,
        selectContracts: selectedRow,
        rate,
        totalpayout: totalPayoutAmt,
        totalamount: totalAmount,
        percentage,
        selectedAmount,
      },
    });
  };
  useEffect(() => {
    axios
      .get<Contract[]>("https://project-data-4yq4.onrender.com/contracts")
      .then((response) => {
        const modifiedRows = response.data.map((contract) => {
          return { ...contract, id: contract.id.toString() };
        });
        setRows(modifiedRows);
        const totalPaymentAmount = modifiedRows.reduce((total, contract) => {
          const paymentAmount = parseFloat(
            contract.paymentAmount.replace(/[^0-9.]/g, "")
          );
          return total + paymentAmount;
        }, 0);
        setTotalAmount(totalPaymentAmount);
      })
      .catch((error) => {
        console.log("Error");
      });
  }, []);

  const calculateRateAmount = (amount: number, ratepercent: number) => {
    return (ratepercent / 100) * amount;
  };

  useEffect(() => {
    const selectedContractsData = rows.filter((row) =>
      selectedContracts.includes(row.id)
    );
    setSelectedContractsData(selectedContractsData);
    const amount = selectedContractsData.reduce((total, contract) => {
      const paymentAmount = Number.parseFloat(
        contract.paymentAmount.replace(/[^0-9.]/g, "")
      );
      return total + paymentAmount;
    }, 0);
    setSelectedAmount(amount);
    const rateAmount = calculateRateAmount(amount, ratepercent);
    setRate(rateAmount);
    setTermData(12);
    setSelectedRow(selectedContracts.length);
    setTotalPayoutAmt(rateAmount + amount);
    const percentages = (selectedAmount / totalAmount) * 100;
    setPercentage(percentages);
  }, [selectedContracts, selectedAmount]);

  useEffect(() => {
    const numberOfRowsSelected = selectedContractsData.length;
    setSelectedRow(numberOfRowsSelected);
  }, [percentage]);

  const handleSliderChange = (event: any, value: number) => {
    const newSelectedContracts = rows.filter((contract) => {
      const paymentAmount = Number.parseFloat(
        contract.paymentAmount.replace(/[^0-9.]/g, "")
      );
      return paymentAmount <= (totalAmount * value) / 100;
    });

    const selectedContractsIds = [];
    for (let item in newSelectedContracts) {
      selectedContractsIds.push(item[0]);
    }
    console.log(selectedContractsIds);
    setSelectedContractsData(newSelectedContracts);
    console.log(selectedContractsData);
    console.log(selectedContractsData.length);
    const amount = newSelectedContracts.reduce((total, contract) => {
      const paymentAmount = Number.parseFloat(
        contract.paymentAmount.replace(/[^0-9.]/g, "")
      );
      return total + paymentAmount;
    }, 0);
    setSelectedAmount(amount);
    const rateAmount = calculateRateAmount(amount, ratepercent);
    setRate(rateAmount);
    setTermData(12);
    setTotalPayoutAmt(rateAmount + amount);
    const percentages = (amount / totalAmount) * 100;
    setPercentage(percentages);
    value = percentages;
    setSelectedContracts(selectedContractsIds);
  };
  const columnHeaders = columnsContracts.filter((data) => {
    return data.field !== "status";
  });

  const handleresetbutton = () => {
    setSelectedAmount(0);
    setSelectedContracts([]);
    setRate(0);
    setSelectedRow(0);
    setTotalPayoutAmt(0);
  };

  return (
    <HomeTemplate
      sidebar={<SideBar />}
      header={
        <div>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            height={"65px"}
            marginTop="40px"
            marginLeft="30px"
          >
            <Box display="flex" flexDirection="column" top={"40px"} gap={"5px"}>
              <Box>
                <TypographyComponent
                  variant="title"
                  color={theme.palette.textColor.highemp}
                >
                  {message.newcashkick}
                </TypographyComponent>
              </Box>
              <Box>
                <TypographyComponent
                  variant="heading2"
                  color={theme.palette.textColor.lowemp}
                >
                  {message.supporting_text}
                </TypographyComponent>
              </Box>
              <CustomButton
                variant={"contained"}
                size={"small"}
                backgroundColor={theme.palette.background.elevation1}
                width={"50px"}
              >
                <Icon src={arrowback} /> Back
              </CustomButton>
            </Box>
            <Profile />
          </Box>
        </div>
      }
      table={
        <Box marginTop={"640px"} gap={"10px"} display={"flex"}>
          <Box
            border={`1px solid${theme.palette.border.lowemp}`}
            borderRadius={"12px"}
            display={"flex"}
            flexDirection={"column"}
            width={"700px"}
            height={"416px"}
            top={"160px"}
            left={"278px"}
            gap={"0px"}
            padding={"32px 0px 32px 32px"}
            position={"absolute"}
          >
            <Box>
              <TypographyComponent
                variant="heading3"
                color={theme.palette.textColor.highemp}
              >
                {message.yourcontract}&nbsp;&nbsp;
                <Icon src={infocircle} width="16.67px" height="16.67px" />
              </TypographyComponent>
            </Box>
            <br />
            <Box
              sx={{
                overflow: "auto",
                backgroundColor: `${theme.palette.background.elevation1}`,
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: theme.palette.icon.lowemp,
                  borderRadius: 4,
                },
                "&::-webkit-scrollbar": {
                  height: 15,
                },
                "&::-webkit-scrollbar-track": {
                  backgroundColor: theme.palette.background.elevation2,
                  borderRadius: 4,
                },
              }}
              paddingRight={"0px"}
              width={"700px"}
              height={"416px"}
            >
              <DataTable
                columns={columnHeaders}
                rows={rows}
                checkBox={true}
                setSelectedContracts={setSelectedContracts}
                selectedContracts={selectedContracts}
              />
            </Box>
          </Box>

          <Box
            sx={{ backgroundColor: `${theme.palette.background.elevation1}` }}
            left={"1050px"}
            position={"absolute"}
            width={"340px"}
            height={"385px"}
            top={"160px"}
            border={`1px solid${theme.palette.border.lowemp}`}
            borderRadius={"12px"}
          >
            <SummaryBox
              selectedContracts={selectedContracts}
              selectedamount={selectedAmount}
              totalamount={totalAmount}
              percentage={percentage}
              rate={rate}
              term={setTerm}
              totalpayout={totalPayoutAmt}
              ChangeSlider={handleSliderChange}
              handleResetClick={handleresetbutton}
              selectContracts={selectedRow}
              navigateNextPage={navigateReviewPage}
              buttonTittle={"Review Your Credit"}
            />
          </Box>
        </Box>
      }
    />
  );
};

export default NewCashPage;
