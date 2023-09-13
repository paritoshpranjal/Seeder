import React from "react";
import { Meta, Story } from "@storybook/react";
import CustomCheckbox, { CustomCheckboxProps } from ".";
import theme from "../../../theme/theme";

export default {
  component: CustomCheckbox,
  title: "Atoms/CustomCheckbox",
} as Meta;

const Template: Story<CustomCheckboxProps> = (args) => (
  <CustomCheckbox {...args} />
);

export const Default = Template.bind({});
Default.args = {
  checked: true,
  height: "16.67x",
  width: "16.67px",
};

export const Disabled = Template.bind({});
Disabled.args = {
  checked: false,
  height: "16.67x",
  width: "16.67px",
  
  disabled: false, 
};