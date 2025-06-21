import React from 'react';
import CustomToggle from '../custom-toggle/CustomToggle';
import useTheme from '../../hooks/useTheme';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  const handleThemeChange = (isOn: boolean) => {
    if ((isOn && theme === 'light') || (!isOn && theme === 'dark')) {
      toggleTheme();
    }
  };

  return <CustomToggle onChange={handleThemeChange} />;
}