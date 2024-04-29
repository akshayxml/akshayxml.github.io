import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <ul className="icons">
            <li><a href="https://www.linkedin.com/in/akshayxml" className="icon fa-linkedin" target="_blank"><span className="label">linkedin</span></a></li>
            <li><a href="mailto:akshayknr7@gmail.com" className="icon fa-envelope" target="_blank"><span className="label">Mail</span></a></li>
            <li><a href="https://github.com/akshayxml" className="icon fa-github" target="_blank"><span className="label">GitHub</span></a></li>
            <li><a href="https://twitter.com/akshayxml" className="icon fa-twitter" target="_blank"><span className="label">Twitter</span></a></li>
            <li><a href="https://www.instagram.com/akshayxml" className="icon fa-instagram" target="_blank"><span className="label">Instagram</span></a></li>
        </ul>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
