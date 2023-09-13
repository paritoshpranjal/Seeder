import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import SliderComponent from "./index";

export default {
  title: "Atoms/Slider",
  component: SliderComponent,
} as Meta<typeof SliderComponent>;

const Template: StoryFn<typeof SliderComponent> = (args) => (
  <SliderComponent/>
);

export const Slider = Template.bind({});
