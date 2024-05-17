import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <ul className="icons">
            <li><a href="https://www.linkedin.com/in/akshayxml" className="icon-linkedin2" target="_blank" rel="noopener noreferrer">
            </a></li>
            <li><a href="mailto:akshayknr7@gmail.com" className="icon-mail" target="_blank" rel="noopener noreferrer">
            </a></li>
            <li><a href="https://github.com/akshayxml" className="icon-github" target="_blank" rel="noopener noreferrer">
            </a></li>
            <li><a href="https://www.leetcode.com/akshayxml" className="icon-leetcode" target="_blank" rel="noopener noreferrer">
            </a></li>
            <li><a href="https://twitter.com/akshayxml" className="icon-x" target="_blank" rel="noopener noreferrer">
            </a></li>
            <li><a href="https://www.instagram.com/akshayxml" className="icon-instagram" target="_blank" rel="noopener noreferrer">
            </a></li>
        </ul>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
