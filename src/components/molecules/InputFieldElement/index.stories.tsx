import React from "react";
import { Meta, Story } from "@storybook/react";
import InputFieldElement, { PropsTypes } from ".";
import theme from '../../../theme/theme';
import { ThemeProvider } from "@mui/material";
export default {
  title: "Molecules/InputFieldElement",
  component: InputFieldElement,
} as Meta;

const Template: Story<PropsTypes> = (args) => (
  <ThemeProvider theme={theme}>
 
    <InputFieldElement {...args} />
  </ThemeProvider>
);

export const BeforeInput = Template.bind({});
BeforeInput.args = {
  placeholder: "Ex: marketing expenses",
  type: "text",
  heading1: 'heading1',
  heading2: 'heading2',
  body1: 'body1',
  highem: `${theme.palette.textColor.highemp}`,
  lowem: `${theme.palette.textColor.lowemp}`,
  bordercolor: theme.palette . border .highemp,
  bodycolor: `${theme.palette.textColor.lowemp}`,
  };
export const AfterInput = Template.bind({});
AfterInput.args = {
   
    type: "text",
    heading1: 'heading1',
    heading2: 'heading2',
    body1: 'body1',
    highem: `${theme.palette.textColor.highemp}`,
    lowem: `${theme.palette.textColor.lowemp}`,
    bordercolor:  theme.palette.purple[400],
    bodycolor: theme.palette.purple[400],
};


