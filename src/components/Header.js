import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-code-fork"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Akshay M</h1>
                <h2 className='box'>Software Engineer</h2>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>About</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>work</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('project')}}>project</a></li>
                {/*<li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>hobbies</a></li>*/}
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
