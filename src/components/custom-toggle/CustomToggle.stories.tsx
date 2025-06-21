import type { Meta, StoryObj } from '@storybook/react-vite';

import CustomToggle from './CustomToggle';

const meta = {
  component: CustomToggle,
} satisfies Meta<typeof CustomToggle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};