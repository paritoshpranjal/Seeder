import React from "react";
import { Meta, Story } from "@storybook/react";
import NewCashCardKick, { PropsTypes } from ".";
import theme from "../../../theme/theme";
import { ThemeProvider } from "@mui/material";
export default {
  title: "Molecules/NewCashCardKick",
  component: NewCashCardKick,
} as Meta;

const Template: Story<PropsTypes> = (args) => (
  <ThemeProvider theme={theme}>
    <NewCashCardKick {...args} />
  </ThemeProvider>
);

export const LaunchCash = Template.bind({});
LaunchCash.args = {
  heading1: "heading1",
  body1: "body1",
  highem: `${theme.palette.textColor.highemp}`,
  lowem: `${theme.palette.textColor.lowemp}`,
 
};
