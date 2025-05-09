import React from 'react'
import PropTypes from 'prop-types'
import profilePic from '../images/dp.jpg'; 

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <img src={profilePic} alt="Akshay M Profile Picture "/> 
        </div>
        <div className="content">
            <div className="inner">
                <h1>Akshay M</h1>
                <h2 className='box'>Software Engineer</h2>
            </div>
        </div>
        <nav>
            <ul>
                <li>
                    <a href="javascript:;" onClick={() => {
                            props.onOpenArticle('intro');
                            window.dataLayer.push({event: 'about-click'});
                        }}>
                        About
                    </a>
                </li>
                <li>
                    <a href="javascript:;" onClick={() => {
                        props.onOpenArticle('work');
                        window.dataLayer.push({event: 'work-click'});
                    }}>work
                    </a>
                </li>
                <li>
                    <a href="javascript:;" onClick={() => {
                        props.onOpenArticle('project');
                        window.dataLayer.push({event: 'project-click'});
                    }}>projects
                    </a>
                </li>
                {/*<li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>hobbies</a></li>*/}
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
}

export default Header
