import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Toggle, ToggleProps } from '../src';

const meta: Meta = {
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

export default meta;

const Template: Story<ToggleProps> = (args) => <Toggle {...args} />;

export const Default = Template.bind({});

Default.args = {
  enabled: false,
};
