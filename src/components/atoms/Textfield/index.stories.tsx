import React from "react";
import { Meta, Story } from "@storybook/react";
import TextInput, { InputProps } from ".";
import theme from '../../../theme/theme';

import { ThemeProvider } from "@mui/material";
export default {
  title: "Atoms/TextInput",
  component: TextInput,
} as Meta;

const Template: Story<InputProps> = (args) => (
  <ThemeProvider theme={theme}>
 
    <TextInput {...args} />
  </ThemeProvider>
);

export const BeforeInput = Template.bind({});
BeforeInput.args = {
  placeholder: "Ex: marketing expenses",
  type: "text",
  width: "560px",
  height: "56px",
  border: "1px solid",
  bcolor: `${theme.palette.border.highemp}`,
  bradius: '12px',
  typographyVariant: theme.typography.body1 ,
  typocolor: `${theme.palette.textColor.lowemp}`,
  bgcolor: `${theme.palette.gray[50]}`,
  };
export const AfterInput = Template.bind({});
AfterInput.args = {
  type: "text",
  width: "560px",
  height: "56px",
  border: "1px solid",
  bcolor: theme.palette.purple[400],
  bgcolor: theme.palette.gray[50],
  bradius: '12px',
  typographyVariant: theme.typography.body1  ,
  typocolor:theme.palette.textColor.medemp,
};


