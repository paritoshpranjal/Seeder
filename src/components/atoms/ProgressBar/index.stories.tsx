import React from 'react';
import { Meta, Story } from '@storybook/react';
import CircularProgressBar, { StyledCircularProgressProps } from './index';
import theme from '../../../theme/theme';

export default {
  component: CircularProgressBar,
  title: 'atoms/CircularProgressBar',
} as Meta;

const Template: Story<StyledCircularProgressProps> = (args) => <CircularProgressBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: 35,
};

