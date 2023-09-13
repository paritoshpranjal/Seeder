import { ComponentStory, ComponentMeta } from "@storybook/react";
import Dropdown,{DropdownProps} from "./index";
export{}

export default {
  title: "Atoms/Dropdown",
  component: Dropdown,
  
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (
    args: JSX.IntrinsicAttributes & DropdownProps
) => <Dropdown {...args}  />;

export const DropdownButton = Template.bind({});
DropdownButton.args = {
//    width:"8.53px",
//    height:"8.53px"
};
