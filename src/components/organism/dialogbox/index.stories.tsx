import { Meta, StoryFn } from "@storybook/react";
import NewCashDialog from "./index";
import { ThemeProvider } from '@mui/material/styles';
import theme from "../../../theme/theme";

export default {
    title: "organism/DialogBox",
    component: NewCashDialog,

} as Meta<typeof NewCashDialog>

const Templeat: StoryFn<typeof NewCashDialog> = () => (
    <ThemeProvider theme={theme}>
        <NewCashDialog openModal={true} closeModal={() => { }} />
    </ThemeProvider>
);

export const DialogBox = Templeat.bind({});