import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import CustomButton, { BtnProps } from "./index";
import theme from "../../../theme/theme";
import arrowLeft from "../../../assets/arrow-left.png";
import home from "../../../assets/home-2.png";
import coin from "../../../assets/coin.png";
export default {
  title: "atoms/CustomButton",
  component: CustomButton,
} as Meta;

const Template: StoryFn<BtnProps> = (args: BtnProps) => (
  <CustomButton {...args} />
);


export const reviewButton: StoryFn<BtnProps> = Template.bind({});
reviewButton.args = {
  children: "Review your credit",
  variant: "contained",
   size: 'large',
  
  
};

export const newcashkick: StoryFn<BtnProps> = Template.bind({});
newcashkick.args = {
  children: "New Cash Kick",
  variant: "contained",
  
  size: 'large',
  
};
