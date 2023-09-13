import * as React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import CustomAvatar, { AvatarProps } from './index';
import avatar from "../../../assets/images/avatar.svg";

export default {
  title: 'Atoms/Avatar',
  component: CustomAvatar,
} as Meta<typeof CustomAvatar>;

const Template: StoryFn<AvatarProps> = (args) => <CustomAvatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: avatar,
  alt: 'Avatar Image',
};

