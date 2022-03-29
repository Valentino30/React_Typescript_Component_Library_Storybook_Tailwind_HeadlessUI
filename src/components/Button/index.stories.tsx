import React from 'react';
import { Story } from '@storybook/react';

import { Button, ButtonProps } from '.';

export default {
  title: 'Button',
  component: Button,
};

const ButtonTemplate: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = ButtonTemplate.bind({});
export const Disabled = ButtonTemplate.bind({});
export const Secondary = ButtonTemplate.bind({});

Primary.args = { name: 'Primary', variant: 'primary' };
Disabled.args = { name: 'Disabled', disabled: true };
Secondary.args = { name: 'Secondary', variant: 'secondary' };
