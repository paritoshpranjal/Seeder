import { Story } from '@storybook/react';
import CardData, { CustomCards } from './index';
import theme from '../../../theme/theme'

export default {
  title: 'Molecules/CardData',
  component: CardData,
};

const Template: Story<CustomCards> = (args) => <CardData {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  width: '700px',
  height: '259px',
  padding: '32px',
  radius: '12px',
  color: theme.palette.background.elevation1
};
