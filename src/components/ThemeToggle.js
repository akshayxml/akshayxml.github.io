import React from 'react';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';
import PropTypes from "prop-types";

const ThemeToggle = (props) => (
    <ThemeToggler>
        {({ theme, toggleTheme }) => {
            if (typeof window !== 'undefined' && theme) {
                document.body.className = theme;
            }

            return (
                <span
                    className={theme === 'dark' ? "icon-sun themeTogglerButton" : "icon-moon1 themeTogglerButton"}
                    onClick={() => toggleTheme(theme === 'dark' ? 'light' : 'dark')}
                    style={props.isArticleVisible ? {visibility: 'hidden'} : {visibility: 'visible'}}
                >
                </span>
            );
        }}
    </ThemeToggler>
);


ThemeToggle.propTypes = {
    isArticleVisible: PropTypes.string
}

export default ThemeToggle;