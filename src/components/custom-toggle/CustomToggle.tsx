import React from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Clouds } from '../../assets/Clouds';
import { Stars } from '../../assets/Stars';
import { Sun } from '../../assets/Sun';
import { Moon } from '../../assets/Moon';

export interface CustomToggleProps {
  onChange?: (isOn: boolean) => void;
  defaultChecked?: boolean;
  className?: string;
  ariaLabel?: string;
}

export default function CustomToggle({
  onChange,
  defaultChecked = false,
  className = '',
  ariaLabel = 'Dark Mode Toggle',
}: CustomToggleProps) {
  const [isOn, setIsOn] = useState(defaultChecked);
  const [theme, setTheme] = useState('light-theme');
  const [handleTheme, setHandleTheme] = useState('handle-light-theme');

  const toggleSwitch = () => {
    const newState = !isOn;
    setIsOn(newState);
    onChange?.(newState);
    if (isOn) {
        setTheme('light-theme');
        setHandleTheme('handle-light-theme');
    } else {
        setTheme('dark-theme');
        setHandleTheme('handle-dark-theme');
    }
  };

  const containerStyle = {
    width: '100px',
    height: '50px',
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
    display: 'flex',
    padding: '4px',
    transition: 'background-color 0.2s ease',
    backgroundColor: theme === 'light-theme' ? '#F89980' : '#E2ABFB',
    justifyContent: isOn ? 'flex-end' : 'flex-start',
    // CSS reset protection
    margin: '0',
    outline: 'none',
    boxSizing: 'border-box' as const,
    position: 'relative' as const,
    overflow: 'hidden',
    // Force these styles
    minWidth: '100px',
    minHeight: '50px',
    maxWidth: '100px',
    maxHeight: '50px',
  };

  const handleStyle = {
    width: '45px',
    height: '45px',
    borderRadius: '50%',
    transition: 'background-color 0.2s ease',
    alignSelf: 'center',
    // CSS reset protection
    margin: '0',
    padding: '0',
    border: 'none',
    outline: 'none',
    boxSizing: 'border-box' as const,
    position: 'relative' as const,
    // Force these styles
    minWidth: '45px',
    minHeight: '45px',
    maxWidth: '45px',
    maxHeight: '45px',
  };

  const backgroundIconStyle = {
    position: 'absolute' as const,
    top: '50%',
    transform: 'translateY(-50%)',
    width: '40px',
    height: '40px',
    opacity: 0.8,
    pointerEvents: 'none' as const,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <button
      className={className}
      style={containerStyle}
      onClick={toggleSwitch}
      role="switch"
      aria-checked={isOn}
      aria-label={ariaLabel}
    >
      {/* Background icons */}
      <div style={{
        ...backgroundIconStyle,
        right: '8px',
        display: theme === 'light-theme' ? 'flex' : 'none'
      }}>
        <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Clouds />
        </div>
      </div>
      <div style={{
        ...backgroundIconStyle,
        left: '8px',
        display: theme === 'dark-theme' ? 'flex' : 'none'
      }}>
        <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Stars />
        </div>
      </div>
      
      <motion.div
        style={handleStyle}
        layout
        transition={{
          type: "spring",
          duration: 0.4,
          bounce: 0.2,
        }}
      >
        {/* Handle icons */}
        <div style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          {handleTheme === 'handle-light-theme' ? <Sun /> : <Moon />}
        </div>
      </motion.div>
    </button>
  );
}
