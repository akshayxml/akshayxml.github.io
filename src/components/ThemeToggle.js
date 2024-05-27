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
                <div className="switch-container" >
                    <span
                        className={theme === 'dark' ? "icon-darkswitch themeTogglerButton" : "icon-lightswitch themeTogglerButton"}
                        onClick={() => toggleTheme(theme === 'dark' ? 'light' : 'dark')}
                        style={props.isArticleVisible ? {visibility: 'hidden'} : {visibility: 'visible'}}
                    >
                    </span>
                </div>
            );
        }}
    </ThemeToggler>
);


ThemeToggle.propTypes = {
    isArticleVisible: PropTypes.bool
}

export default ThemeToggle;