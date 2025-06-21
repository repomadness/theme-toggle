import { userEvent, within } from 'storybook/test';
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

export const DarkModeToggle: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    await userEvent.click(await canvas.findByRole('switch', { name: 'Dark Mode Toggle' }));
  }
};