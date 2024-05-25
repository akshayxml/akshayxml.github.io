import React from 'react';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';

const ThemeToggle = () => (
    <ThemeToggler>
        {({ theme, toggleTheme }) => {
            if (typeof window !== 'undefined' && theme) {
                document.body.className = theme;
            }

            return (
                <span
                    className={theme === 'dark' ? "icon-sun themeTogglerButton" : "icon-moon1 themeTogglerButton"}
                    onClick={() => toggleTheme(theme === 'dark' ? 'light' : 'dark')}>
                </span>
            );
        }}
    </ThemeToggler>
);

export default ThemeToggle;