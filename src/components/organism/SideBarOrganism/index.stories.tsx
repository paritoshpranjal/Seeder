import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import SideBar from "./index";
import { ThemeProvider } from "@mui/material/styles";
import { MemoryRouter } from "react-router-dom";

import theme from "../../../theme/theme";
export default {
  title: "Organism/Sidebar",
  component: SideBar,
} as Meta;

const Template: StoryFn<typeof SideBar> = () => (
  <ThemeProvider theme={theme}>
    <MemoryRouter>
      <SideBar />
    </MemoryRouter>
  </ThemeProvider>
);
export const Title = Template.bind({});
