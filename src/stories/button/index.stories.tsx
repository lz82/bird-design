import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';

import Button, { ButtonProps } from '../../components/button';

export default {
  title: 'Example/Button',
  component: Button
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  btnType: 'primary',
  size: 'lg',
  text: 'primary button',
  onClick: action('handle btn click...')
};

export const Link = Template.bind({});
Link.args = {
  btnType: 'link',
  size: 'lg',
  text: 'link button',
  link: 'http://www.baidu.com'
};
