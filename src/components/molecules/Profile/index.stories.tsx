import Profile from "./index";
import { StoryFn, Meta } from "@storybook/react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../../theme/theme";
export default {
  title: "Molecules/Profile",
  component: Profile,
} as Meta;

const Template: StoryFn<typeof Profile> = () => (
  <ThemeProvider theme={theme}>
    <Profile />
  </ThemeProvider>
);
export const Default = Template.bind({});
Default.args = {
  // sx: { display: "flex", bgcolor: "black" },
};
