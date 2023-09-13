import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material";
import { Banner } from "./index";

export default {
  title: "Molecules/Banner",
  component: Banner,
} as Meta<typeof Banner>;

const Template: StoryFn<typeof Banner> = (args) => <Banner {...args} />;

export const Default = Template.bind({});
Default.args = {
  buttonName: "Learn More",
  headingSentence: "Congratulations you are ready to start!",
  description:
    "You are approved for funding. We are ready to advance you upto $8.3M",
};