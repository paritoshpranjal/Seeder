import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import TypographyComponent from "./index";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../../theme/theme"
export default {
  title: "Atoms/Typography",
  component: TypographyComponent,
} as Meta;

const Template: StoryFn<typeof TypographyComponent> = ({
  children,
  ...args
}) => (
  <ThemeProvider theme={theme}>
    <TypographyComponent {...args}>{children}</TypographyComponent>
  </ThemeProvider>
);
export const Title = Template.bind({});

Title.args = {
  variant: "title",
  children: "title",
  color: theme.palette.purple[500]
};
export const Heading1 = Template.bind({});

Heading1.args = {
  variant: "heading1",
  children: "heading1",
  color: theme.palette.purple[500]
};
export const Heading2 = Template.bind({});

Heading2.args = {
  variant: "heading2",
  children: "heading2",
  color: theme.palette.purple[500]
};
export const Body1 = Template.bind({});

Body1.args = {
  variant: "body1",
  children: "body1",
  color: theme.palette.purple[500]
};
export const Body2 = Template.bind({});

Body2.args = {
  variant: "body2",
  children: "body2",
  color: theme.palette.purple[500]
};
export const Caption = Template.bind({});

Caption.args = {
  variant: "caption",
  children: "caption",
  color: theme.palette.purple[500]
};
export const Button = Template.bind({});

Button.args = {
  variant: "button",
  children: "button",
  color: theme.palette.purple[500]
};
