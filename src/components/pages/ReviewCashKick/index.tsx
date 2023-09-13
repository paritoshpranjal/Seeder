import SideBar from "../../../components/organism/SideBarOrganism/index";
import HomeTemplate from "../../../template/HomeTemplate/index";
import theme from "../../../theme/theme";
import { message } from "../../../utils/constants";
import TypographyComponent from "../../atoms/Typography/index";
import { Box } from "@mui/material";
import CustomButton from "../../atoms/Button";
import Icon from "../../atoms/Icon";
import arrowback from "../../../assets/arrow-left.png";
import infocircle from "../../../assets/info-circle.png";
import DataTable from "../../organism/table";
import { columnsContracts } from "../../organism/table/columnHeaders";
import axios from "axios";
import { useState } from "react";
import SummaryBox from "../../organism/SummaryBox";
import Profile from "../../molecules/Profile";
import NewCashDialog from "../../organism/dialogbox";
import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";

interface Contract {
    id: number;
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

export const ReviewPage = () => {
    const navigate = useNavigate();
    const date = new Date();
    const month = date.toLocaleString("en-US", { month: "short" });
    const day = date.toLocaleString("en-US", { day: "2-digit" });
    const year = date.getFullYear();
    const location = useLocation().state;
    const [open, setOpen] = useState(false);
    const columnHeaders = columnsContracts.filter((data) => {
        return (
            data.field !== "status" &&
            data.field !== "totalFinanced" &&
            data.field !== "totalAvailable"
        );
    });
    const handleOpenModal = () => {
        setOpen(true);
    };

    const handleCloseModal = () => {
        setOpen(false);
    };
    const handleNavigateToNext = (flag: any) => {
        flag === "close" ? navigate("/") : navigate("/cash-acceleration");
    };
    const ChangeSlider = () => { return null };
    const handleGetName = async (title: any) => {
        const totalCredit = await axios
            .get("https://project-data-4yq4.onrender.com/totalAmount")
            .then((res) => res.data.AvailableCredit);
        await axios.put("https://project-data-4yq4.onrender.com/totalAmount", {
            AvailableCredit: totalCredit - location.selectedAmount,
        });

        await axios.post("https://project-data-4yq4.onrender.com/mycashkicks", {
            name: title,
            status: "pending",
            maturity: `${month} ${day},${year}`,
            totalRecieved: {
                totalRecieved: location.totalpayout,
                totalInterestrate: "12.0% fee",
            },
            totalFinanced: location.selectedAmount,
        });
    };



    return (
        <>
            <NewCashDialog
                openModal={open}
                closeModal={handleCloseModal}
                getTitle={handleGetName}
                navigateFunction={handleNavigateToNext}
            />
            <HomeTemplate
                sidebar={<SideBar />}
                header={
                    <div>
                        <Box
                            display="flex"
                            flexDirection="row"
                            justifyContent="space-between"
                            //width={"1250px"}
                            height={"65px"}
                            marginTop="40px"
                            marginLeft="30px"
                        >
                            <Box
                                display="flex"
                                flexDirection="column"
                                top={"40px"}
                                gap={"5px"}
                            >
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
                    <Box marginTop={"640px"} display={"flex"} gap={"10px"}>
                        <Box
                            width={"700px"}
                            height={"281px"}
                            top={"160px"}
                            left={"278px"}
                            gap={"0px"}
                            padding={"32px 0px 32px 32px"}
                            position={"absolute"}
                            border={`1px solid${theme.palette.border.lowemp}`}
                            borderRadius={"12px"}
                            display={"flex"}
                            flexDirection={"column"}
                        >
                            <TypographyComponent
                                variant="heading3"
                                color={theme.palette.textColor.highemp}
                            >
                                {message.selectedContract}&nbsp;&nbsp;
                                <Icon src={infocircle} width="16.67px" height="16.67px" />
                            </TypographyComponent>
                            <br />
                            <Box
                                paddingRight={"0px"}
                                width={"700px"}
                                height={"416px"}
                                sx={{
                                    backgroundColor: `${theme.palette.background.elevation1}`,
                                    overflow: "auto",
                                    "&::-webkit-scrollbar": {
                                        height: 15,
                                    },
                                    "&::-webkit-scrollbar-track": {
                                        backgroundColor: theme.palette.background.elevation2,
                                        borderRadius: 4,
                                    },
                                    "&::-webkit-scrollbar-thumb": {
                                        backgroundColor: theme.palette.icon.lowemp,
                                        borderRadius: 4,
                                    },
                                }}
                            >
                                <DataTable
                                    columns={columnHeaders}
                                    rows={location ? location.selectedContractsData : 0}
                                    checkBox={false}
                                />
                            </Box>
                        </Box>

                        <Box
                            width={"340px"}
                            height={"385px"}
                            top={"160px"}
                            left={"1050px"}
                            position={"absolute"}
                            border={`1px solid${theme.palette.border.lowemp}`}
                            borderRadius={"12px"}
                            sx={{ backgroundColor: `${theme.palette.background.elevation1}` }}
                        >
                            <SummaryBox
                                buttonTittle="Submit Your Credit"
                                handleOpenModal={handleOpenModal}
                                ChangeSlider={ChangeSlider}
                                totalamount={location ? location.totalamount : 0}
                                rate={location ? location.rate : 0}
                                percentage={location ? location.percentage : 0}
                                totalpayout={location ? location.totalpayout : 0}
                                term={location ? location.term : 0}
                                selectedContracts={location ? location.selectedContracts : 0}
                                selectContracts={location ? location.selectContracts : 0}
                                selectedamount={location ? location.selectedAmount : 0}
                            />
                        </Box>
                    </Box>
                }
            />
        </>
    );
};
