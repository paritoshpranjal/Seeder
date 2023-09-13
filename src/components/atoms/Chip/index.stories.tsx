
import { Meta, StoryFn } from "@storybook/react";
import BasicChip from "./index";

export default {
    title: "atoms/BasicChip",
    component: BasicChip,
    
} as Meta<typeof BasicChip>;

const Templeat: StoryFn<typeof BasicChip> = (args) => <BasicChip {...args} />;


export const Available = Templeat.bind({});
Available.args = {
    label: "Available",
    variant: "filled",
    
    size: "medium",
   
};

export const Pending = Templeat.bind({});
Pending.args = {
    label: "Pending",
    variant: "filled",
    
    size: "medium",
  
};


export const Upcoming = Templeat.bind({});
Upcoming.args = {
    label: "Upcoming",
    variant: "filled",
   
    size: "medium",
 
};


