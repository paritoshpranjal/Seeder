import SummaryBox from ".";
import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { ThemeProvider } from "@mui/material/styles";

import theme from "../../../theme/theme";
export default {
  title: "Organism/SummaryBox",
  component: SummaryBox,
} as Meta;




const Template: StoryFn<typeof SummaryBox> = (args) => (
  <ThemeProvider theme={theme}>
    <SummaryBox {...args} />
  </ThemeProvider>
);
export const Summary = Template.bind({});
Summary.args = {
  term: 12,
  selectedContracts: 3,
  selectedamount: 164542.45,
  totalamount: 880000.00,
  paybackamount: 170454,
  ratepercent: 12,
  rate: 20454,
  totalpayout: 150000,



}