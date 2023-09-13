import * as React from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import { Box } from "@mui/material";
import Icon from "../../atoms/Icon";
import crossIcon from "../../../assets/add.png";
import progress from "../../../assets/Animation_seeder.gif";
import TypographyComponent from "../../atoms/Typography";
import CustomButton from "../../atoms/Button";
import theme from "../../../theme/theme";
import TextInput from "../../atoms/Textfield";
import {
    dilogStateRepresentHead,
    dilogStateRepresentInfo,
    dilogCancelButton,
    dilogCloseButton,
    dilogCreateButton,
    dilogViewButton,
    dialogTitleOne,
    dilogTitleTwo,
    dilogSubHeadingOne,
    dilogSubHeadingTwo,
    dilogInputFieldHead,
} from "../../../utils/constants";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
        padding: theme.spacing(4.3),
    },
    "& .MuiDialogActions-root": {
        padding: theme.spacing(4.3),
    },
    backdropFilter: "blur(8px)",
}));

export interface DialogTitleProps {
    id: string;
    children?: React.ReactNode;
    onClose: () => void;
}

function BootstrapDialogTitle(props: DialogTitleProps) {
    const { children, onClose, ...other } = props;
    return (
        <DialogTitle
            sx={{
                m: 0,
                padding: `${theme.spacing(3)} ${theme.spacing(4.25)}`,
                width: theme.spacing(160.1),
                height: theme.spacing(28.25),
                backgroundColor: theme.palette.gray[100],
                display: "flex",
                flexDirection: "column",
            }}
            {...other}
        >
            {children}
            {onClose ? (
                <IconButton
                    data-testid="cross-btn"
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: "absolute",
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <Icon src={crossIcon} />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
}

interface PropsTypes {
    openModal?: boolean;
    closeModal?: any;
    getTitle?: any;
    navigateFunction?: any;
}

export default function NewCashDialog({
    openModal,
    closeModal,
    getTitle,
    navigateFunction,
}: PropsTypes) {
    const [isCreate, setIsCreate] = React.useState(false);
    const [onChange, setOnchange] = React.useState("");
    const handleIsCreate = () => {
        setIsCreate(true);
        getTitle(onChange);
    };

    const handleOnchange = (e: any) => {
        setOnchange(e.target.value);
    };

    const progressStyle: any = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: theme.spacing(0),
        gap: theme.spacing(8),
        width: theme.spacing(137.5),
        height: theme.spacing(76.75),
    };
    const inputArgs = {
        placeholder: "Ex: markting expenses",
        width: theme.spacing(140),
        height: theme.spacing(14),
        border: "1px solid",
        bradius: theme.spacing(3),
        bcolor: theme.palette.border.highemp,
        bgcolor: theme.palette.gray[50],
        typocolor: theme.palette.textColor.medemp,
    };

    return (
        <BootstrapDialog
            onClose={closeModal}
            aria-labelledby="customized-dialog-title"
            open={openModal !== undefined ? openModal : false}
            maxWidth="md"
            PaperProps={{ sx: { borderRadius: `${theme.spacing(3)}` } }}
        >
            <BootstrapDialogTitle
                id="customized-dialog-title"
                data-testid="dialog-title"
                onClose={
                    !isCreate
                        ? () => {
                            setIsCreate(false);
                            closeModal();
                        }
                        : () => {
                            setIsCreate(false);
                            navigateFunction("close");
                        }
                }
            >
                <TypographyComponent
                    variant="heading1"
                    color={theme.palette.textColor.highemp}
                    data-testid="title"
                >
                    {!isCreate ? dialogTitleOne : dilogTitleTwo}
                </TypographyComponent>
                <TypographyComponent
                    data-testid="sub-title"
                    variant="heading2"
                    color={theme.palette.textColor.lowemp}
                >
                    {!isCreate ? dilogSubHeadingOne : dilogSubHeadingTwo}
                </TypographyComponent>
            </BootstrapDialogTitle>
            <DialogContent
                data-testId="dialog-content"
                sx={
                    !isCreate
                        ? {
                            m: 0,
                            padding: `${theme.spacing(3)} ${theme.spacing(4.25)}`,
                            width: theme.spacing(160),
                            height: theme.spacing(28.25),
                            backgroundColor: theme.palette.gray[100],
                            display: "flex",
                            flexDirection: "column",
                        }
                        : {
                            backgroundColor: theme.palette.gray[100],
                            display: "flex",
                            flexDirection: "column",
                            width: theme.spacing(160),
                            height: theme.spacing(88.75),
                            padding: `${theme.spacing(6)} ${theme.spacing(10)}`,
                            justifyContent: "center",
                            alignItems: "center",
                        }
                }
            >
                {!isCreate ? (
                    <>
                        <TypographyComponent
                            variant="body1"
                            color={
                                onChange === ""
                                    ? theme.palette.textColor.lowemp
                                    : theme.palette.purple[400]
                            }
                        >
                            {dilogInputFieldHead}
                        </TypographyComponent>
                        <TextInput {...inputArgs} onChange={handleOnchange} data-testid="input-field" />
                    </>
                ) : (
                    <Box sx={progressStyle} data-testid="gif">
                        <Icon
                            src={progress}
                            width={theme.spacing(43)}
                            height={theme.spacing(43)}
                        />
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <TypographyComponent
                                variant="heading3"
                                color={theme.palette.textColor.highemp}
                            >
                                {dilogStateRepresentHead}
                            </TypographyComponent>
                            <TypographyComponent
                                variant="body1"
                                sx={{ textAlign: "center", color: "#A5A5A6" }}
                            >
                                {" "}
                                {dilogStateRepresentInfo}
                            </TypographyComponent>
                        </Box>
                    </Box>
                )}
            </DialogContent>
            <DialogActions
                sx={{
                    m: 0,
                    padding: `${theme.spacing(3)} ${theme.spacing(4.25)}`,
                    width: theme.spacing(160),
                    height: theme.spacing(28.25),
                    backgroundColor: theme.palette.gray[100],
                    display: "flex",
                    flexDirection: "row",
                }}
            >
                <CustomButton
                    variant="contained"
                    size="small"
                    backgroundColor={theme.palette.background.elevation2}
                    width={!isCreate ? theme.spacing(33.25) : theme.spacing(30.4)}
                    height={theme.spacing(15)}
                    onClick={
                        !isCreate
                            ? () => {
                                setIsCreate(false);
                                closeModal();
                            }
                            : () => {
                                setIsCreate(false);
                                navigateFunction("close");
                            }
                    }
                >
                    {!isCreate ? dilogCancelButton : dilogCloseButton}
                </CustomButton>
                {!isCreate ? (
                    <CustomButton
                        variant="contained"
                        size="small"
                        backgroundColor={theme.palette.purple[500]}
                        width={theme.spacing(52)}
                        height={theme.spacing(15)}
                        onClick={handleIsCreate}
                        disabled={onChange === ""}
                        className="create-btn"
                        data-testid="create-button"
                        role="create-btn"
                    >
                        {dilogCreateButton}
                    </CustomButton>
                ) : (
                    <CustomButton
                        variant="contained"
                        size="small"
                        backgroundColor={theme.palette.purple[500]}
                        width={theme.spacing(49.5)}
                        height={theme.spacing(15)}
                        onClick={() => {
                            setIsCreate(false);
                            navigateFunction("");
                        }}
                        data-testid="view"
                    >
                        {dilogViewButton}
                    </CustomButton>
                )}
            </DialogActions>
        </BootstrapDialog>
    );
}
