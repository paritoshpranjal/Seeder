import { Story, Meta } from '@storybook/react';
import { CardDataPayment, CustomBox } from './index';
import theme from '../../../theme/theme'
export default {
  component: CardDataPayment,
  title: 'molecules/CardDataPayment',
} as Meta;

const Template: Story<CustomBox> = (args) => <CardDataPayment {...args} />;

export const Default = Template.bind({});
Default.args = {
  height: '259px',
  width: '340px',
  
  radius: '12px',
  padding: '32px',
  color: theme.palette.background.elevation1,

};
