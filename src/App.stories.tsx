import { userEvent, within, expect, waitFor } from 'storybook/test';
import App from './App';

const meta = {
  component: App,
};

export default meta;

export const Default = {};

export const DarkModeToggle = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    await userEvent.click(await canvas.findByRole('switch', { name: 'Dark Mode Toggle' }));
    await waitFor(() => expect(canvas.queryByRole('heading', { name: '✨ dark vibes 🌙' })).toBeInTheDocument());
  }
};