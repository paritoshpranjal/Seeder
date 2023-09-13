import { Meta, StoryFn } from "@storybook/react";
import BgIcon from "./Index";
import calendar from "../../assets/calendar.png";
import docDowonload from "../../assets/document-download.png";
import precentageSquare from "../../assets/percentage-square.png";
import receiptText from "../../assets/receipt-text.png";
import progressBar from "../../assets/circular-progress.png";

export default {
    title: "molecules/BgIcon",
    component: BgIcon,
} as Meta<typeof BgIcon>;

const Templeat: StoryFn<typeof BgIcon> = (args) => <BgIcon {...args} />;

export const Calendar = Templeat.bind({});
Calendar.args = {
    icon: calendar,
    alt: "calendar-icon",
    infoText: "Term cap",
    mainText: "12Months"
}

export const DocDownload = Templeat.bind({});
DocDownload.args = {
    icon: docDowonload,
    alt: "docdownload-icon",
    infoText: "Available credit",
    mainText: "$709.45k"
}

export const PercentageSquare = Templeat.bind({});
PercentageSquare.args = {
    icon: precentageSquare,
    alt: "percentsquare-icon",
    infoText: "Max interest rate",
    mainText: "12.00%"
}

export const ReceiptText = Templeat.bind({});
ReceiptText.args = {
    icon: receiptText,
    alt: "receiptText-icon",
    infoText: "Due-May 03,2021",
    mainText: "$14,204.55"
}

export const ProgressBar = Templeat.bind({});
ProgressBar.args = {
    icon: progressBar,
    alt: "progressBar-icon",
    infoText: "Outstanding amount",
    mainText: "$170,454.55"
}

