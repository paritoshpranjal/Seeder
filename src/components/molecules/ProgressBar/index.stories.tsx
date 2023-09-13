import { Story, Meta } from '@storybook/react';
import { ProgressBarWithTypo, ProgressBarWithTypoProps } from './index';

export default {
  component: ProgressBarWithTypo,
  title: 'molecules/ProgressBarWithTypo',
} as Meta;

const Template: Story<ProgressBarWithTypoProps> = (args) => <ProgressBarWithTypo {...args} />;

export const Default = Template.bind({});
Default.args = {
  headText: 'Outstanding Amout',
  bodyText: '170,454.55',
};
