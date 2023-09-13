import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import SideBarElement from ".";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../../theme/theme";
import homeicon from "../../../assets/home-2.png";
import logoicon from "../../../assets/logo.png";
export default {
  title: "Molecules/SideBarElement",
  component: SideBarElement,
} as Meta;

const Template: StoryFn<typeof SideBarElement> = ({ ...args }) => (
  <ThemeProvider theme={theme}>
    <SideBarElement {...args} />
  </ThemeProvider>
);
export const Logo = Template.bind({});
Logo.args = {
  content: "Seeder",
  icon: logoicon,
  color: theme.palette.white[500],
  variant: "logo",
};
export const Item = Template.bind({});
Item.args = {
  content: "Home",
  icon: homeicon,
  color: theme.palette.textColor.lowemp,
  variant: "caption",
};
export const ItemClicked = Template.bind({});
ItemClicked.args = {
  content: "Home",
  icon: homeicon,
  backgroundColor: theme.palette.background.elevation2,
  color: theme.palette.textColor.highemp,
  variant: "caption",
};
