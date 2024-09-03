import React from 'react'
import PropTypes from 'prop-types'

class Main extends React.Component {
    render() {

        let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}><i className="icon-close"></i></div>

        return (
            <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

                <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none', borderRadius:"10px"}}>
                    <h2 className="major">About Me</h2>
                    <p>
                        I'm currently part of the <b>Google</b> Distributed Cloud Air-Gapped team, where I'm excited to take on new and complex challenges. Prior to joining Google, I acquired over 2 years of hands-on experience as a Software Development Engineer at <b>Media.net</b>, building a solid foundation in software development. 
                    </p>
                    <p>
                        My journey in tech started with a Master's degree in Computer Science and Engineering from <b>IIIT Hyderabad</b> where I developed my technological abilities as well as established an interest for development. During my college days, I also had the opportunity to work on research internships at <b>Samsung Research Institute</b> and <b>IIST Trivandrum</b>. 
                    </p>
                    <p>
                        I am passionate about using technology to make a difference; due to this fact, I am very eager to be part of more projects that can impact the continuously growing tech industry.
                    </p>
                    <p>Feel like working with me? Here's my complete <b><a href="https://drive.google.com/file/d/1F92PWaT9vALjFY8IrQvgKHyR8QRABOhV/view?usp=drive_link">resume</a></b></p>
                    <p>Have an amazing product idea? Let's brainstorm! Feel free to DM me.</p>
                    {close}
                </article>

                <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none', borderRadius:"10px"}}>
                    <h2 className="major">Work Experience</h2>
                    <div className="box">
                        <p><strong>Google</strong> | Software Engineer II | 08/24 - Present</p>
                        <p>Working with the Google Distributed Cloud air-gapped platform services team.</p>
                        <code>Golang</code> <code>Kubernetes</code> 
                    </div>
                    <div className="box">
                        <p><strong>Media.net</strong> | Software Development Engineer | 07/22 - 08/24</p>
                        <p>Reduced the response time of Ads Serving API by 70% and Redis Space Consumption by 85%. Optimized the Redis Operations and implemented the Custom Redis Bitmap Module to efficiently implement the needed Redis Set operations(intersect, difference, union).</p>
                        <code>Java</code> <code>NodeJs</code> <code>Python</code> <code>Kafka</code> <code>Redis</code>
                    </div>
                    <div className="box">
                        <p><strong>Samsung Research Institute, Bangalore</strong> | Student Trainee | 06/21 - 07/21</p>
                        <p>Independently researched state-of-the-art Neural Rendering algorithms to stay current with the field and identify potential applications in AR.</p>
                        <code>Augmented Reality</code>
                    </div>
                    <div className="box">
                        <p><strong>QBurst Technologies, Kochi</strong> | Engineer | 07/19 - 08/20</p>
                        <p>Implemented customer-based solutions and developed products on the Force.com platform using Apex, VisualForce, and Lightning Components.</p>
                        <code>Salesforce Development</code>
                    </div>
                    <div className="box">
                        <p><strong>IIST, Trivandrum</strong> | Research Intern | 06/18 - 07/18</p>
                        <p>Worked under Dr. B.S. Manoj on Complex Networks to find out the anchor nodes in different types of networks which reduces the average shortest path length in the network by the maximum.</p>
                        <code>Java</code> <code>Complex Networks</code> <code>Python</code>
                    </div>
                    {close}
                </article>

                <article id="project"
                         className={`${this.props.article === 'project' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`}
                         style={{display: 'none', borderRadius:"10px"}}>
                    <h2 className="major">Assorted Projects</h2>
                    <a href='https://github.com/akshayxml/Peer-to-Peer-Group-Based-File-Sharing-System' target="_blank">
                        <div className="box">
                            <p><strong>Peer-to-Peer Group Based File Sharing System</strong></p>
                            <p>A P2P file sharing system implemented using socket programming, multi-threading and SHA1 hashing. Users can share, download files from the group they belong to. Downloading is done in parallel with multiple pieces from multiple peers.</p>
                            <code>C++</code> <code>Socket Programming</code><code>Multithreading</code>
                        </div>
                    </a>
                    <a href='https://github.com/akshayxml/Google-File-System' target="_blank">
                        <div className="box">
                            <p><strong>Google File System</strong></p>
                            <p>Implemented Google File System from it’s research paper with the options to create, append, read, delete, and undelete files.</p>
                            <code>Python</code><code>gRPC</code>
                        </div>
                    </a>
                    <a href='https://github.com/akshayxml/Linux-Terminal-Based-File-Explorer' target="_blank">
                        <div className="box">
                            <p><strong>Linux Terminal Based File Explorer</strong></p>
                            <p>A Linux terminal based file explorer that can run in 2 modes: Normal mode and Command mode. Normal mode supports viewing and traversing directories and opening files. Command mode supports various operations like create, delete, rename, copy, move, search files and directories, and goto other directories. Detailed description in readme.</p>
                            <code>C++</code>
                        </div>
                    </a>
                    {close}
                </article>

                <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none', borderRadius:"10px"}}>
                    {close}
                </article>

            </div>
        )
    }
}

Main.propTypes = {
    route: PropTypes.object,
    article: PropTypes.string,
    articleTimeout: PropTypes.bool,
    onCloseArticle: PropTypes.func,
    timeout: PropTypes.bool,
    setWrapperRef: PropTypes.func.isRequired,
}

export default Main