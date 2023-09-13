

import { Meta, StoryFn } from "@storybook/react";
import Icon from "./index";
import calendar from "../../../assets/calendar.png";
import docDownload from "../../../assets/document-download.png"
import percentageSquare from "../../../assets/percentage-square.png"
import receiptText from "../../../assets/receipt-text.png"
import circularProgress from "../../../assets/circular-progress.png"
import infoCircle from "../../../assets/info-circle.png";

export default {
    title: "atoms/Icon",
    component: Icon,
    argTypes: {
        src: {
            control: {
                type: "text"
            }
        },
        width: {
            control: {
                type: "number"
            }
        },
        height: {
            control: {
                type: "number"
            }
        }
    }
} as Meta<typeof Icon>;


const Template: StoryFn<typeof Icon> = (args) => <Icon {...args} />;

export const Calendar = Template.bind({});
Calendar.args = {
    src: calendar,
    alt: "calendar-image",
    width: "40px",
    height: "40px"
};

export const DocDownload = Template.bind({});
DocDownload.args = {
    src: docDownload,
    alt: "calendar-image",
    width: "40px",
    height: "40px"
};

export const PercentageSquare = Template.bind({});
PercentageSquare.args = {
    src: percentageSquare,
    alt: "calendar-image",
    width: "40px",
    height: "40px"
};

export const ReceiptText = Template.bind({});
ReceiptText.args = {
    src: receiptText,
    alt: "calendar-image",
    width: "40px",
    height: "40px"
};

export const CircularProgress = Template.bind({});
CircularProgress.args = {
    src: circularProgress,
    alt: "calendar-image",
    width: "40px",
    height: "40px"
};

export const InfoCircle = Template.bind({});
InfoCircle.args = {
    src: infoCircle,
    alt: "calendar-image",
    width: "20px",
    height: "20px"
};
