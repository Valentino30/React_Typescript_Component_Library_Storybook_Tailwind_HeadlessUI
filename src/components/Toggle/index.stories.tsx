import React from 'react';
import { Story } from '@storybook/react';

import { Toggle, ToggleProps } from '../..';

export default {
  title: 'Toggle',
  component: Toggle,
  argTypes: {
    onClick: { action: 'clicked' },
    enabled: {
      control: {
        type: 'boolean',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

const ToggleTemplate: Story<ToggleProps> = (args) => <Toggle {...args} />;

export const Disabled = ToggleTemplate.bind({});
export const Enabled = ToggleTemplate.bind({});

Disabled.args = { enabled: false };
Enabled.args = { enabled: true };
