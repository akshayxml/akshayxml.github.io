(self.webpackChunkAkshay_M_portfolio=self.webpackChunkAkshay_M_portfolio||[]).push([[293],{225:function(e,t,n){"use strict";var a=n(4994);t.__esModule=!0,t.default=void 0;var l=a(n(2475)),r=a(n(6221)),i=a(n(3693)),o=a(n(6540)),s=a(n(5556)),c=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return t=e.call.apply(e,[this].concat(a))||this,(0,i.default)((0,l.default)(t),"state",{theme:"undefined"!=typeof window?window.__theme:null}),t}(0,r.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;window.__onThemeChange=function(){e.setState({theme:window.__theme})}},n.toggleTheme=function(e){window.__setPreferredTheme(e)},n.render=function(){return o.default.createElement(this.props.children,{theme:this.state.theme,toggleTheme:this.toggleTheme})},t}(o.default.Component);c.propTypes={children:s.default.func.isRequired};var m=c;t.default=m},3146:function(e,t,n){"use strict";var a=n(4994)(n(225));t.G=a.default},5952:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x}});var a=n(7387),l=n(6540),r=n(3895);var i=e=>l.createElement("header",{id:"header",style:e.timeout?{display:"none"}:{}},l.createElement("div",{className:"logo"},l.createElement("span",{className:"icon-strategy inner"})),l.createElement("div",{className:"content"},l.createElement("div",{className:"inner"},l.createElement("h1",null,"Akshay M"),l.createElement("h2",{className:"box"},"Software Engineer"))),l.createElement("nav",null,l.createElement("ul",null,l.createElement("li",null,l.createElement("a",{href:"javascript:;",onClick:()=>{e.onOpenArticle("intro"),window.dataLayer.push({event:"about-click"})}},"About")),l.createElement("li",null,l.createElement("a",{href:"javascript:;",onClick:()=>{e.onOpenArticle("work"),window.dataLayer.push({event:"work-click"})}},"work")),l.createElement("li",null,l.createElement("a",{href:"javascript:;",onClick:()=>{e.onOpenArticle("project"),window.dataLayer.push({event:"project-click"})}},"projects")))));let o=function(e){function t(){return e.apply(this,arguments)||this}return(0,a.A)(t,e),t.prototype.render=function(){let e=l.createElement("div",{className:"close",onClick:()=>{this.props.onCloseArticle()}},l.createElement("i",{className:"icon-close"}));return l.createElement("div",{ref:this.props.setWrapperRef,id:"main",style:this.props.timeout?{display:"flex"}:{display:"none"}},l.createElement("article",{id:"intro",className:`${"intro"===this.props.article?"active":""} ${this.props.articleTimeout?"timeout":""}`,style:{display:"none",borderRadius:"10px"}},l.createElement("h2",{className:"major"},"About Me"),l.createElement("p",null,"I'm currently part of the ",l.createElement("b",null,"Google")," Distributed Cloud Air-Gapped team, where I'm excited to take on new and complex challenges. Prior to joining Google, I acquired over 2 years of hands-on experience as a Software Development Engineer at ",l.createElement("b",null,"Media.net"),", building a solid foundation in software development."),l.createElement("p",null,"My journey in tech started with a Master's degree in Computer Science and Engineering from ",l.createElement("b",null,"IIIT Hyderabad")," where I developed my technological abilities as well as established an interest for development. During my college days, I also had the opportunity to work on research internships at ",l.createElement("b",null,"Samsung Research Institute")," and ",l.createElement("b",null,"IIST Trivandrum"),"."),l.createElement("p",null,"I am passionate about using technology to make a difference; due to this fact, I am very eager to be part of more projects that can impact the continuously growing tech industry."),l.createElement("p",null,"Feel like working with me? Here's my complete ",l.createElement("b",null,l.createElement("a",{href:"https://drive.google.com/file/d/1F92PWaT9vALjFY8IrQvgKHyR8QRABOhV/view?usp=drive_link"},"resume"))),l.createElement("p",null,"Have an amazing product idea? Let's brainstorm! Feel free to DM me."),e),l.createElement("article",{id:"work",className:`${"work"===this.props.article?"active":""} ${this.props.articleTimeout?"timeout":""}`,style:{display:"none",borderRadius:"10px"}},l.createElement("h2",{className:"major"},"Work Experience"),l.createElement("div",{className:"box"},l.createElement("p",null,l.createElement("strong",null,"Google")," | Software Engineer II | 08/24 - Present"),l.createElement("p",null,"Working with the Google Distributed Cloud air-gapped platform services team."),l.createElement("code",null,"Golang")," ",l.createElement("code",null,"Kubernetes")),l.createElement("div",{className:"box"},l.createElement("p",null,l.createElement("strong",null,"Media.net")," | Software Development Engineer | 07/22 - 08/24"),l.createElement("p",null,"Reduced the response time of Ads Serving API by 70% and Redis Space Consumption by 85%. Optimized the Redis Operations and implemented the Custom Redis Bitmap Module to efficiently implement the needed Redis Set operations(intersect, difference, union)."),l.createElement("code",null,"Java")," ",l.createElement("code",null,"NodeJs")," ",l.createElement("code",null,"Python")," ",l.createElement("code",null,"Kafka")," ",l.createElement("code",null,"Redis")),l.createElement("div",{className:"box"},l.createElement("p",null,l.createElement("strong",null,"Samsung Research Institute, Bangalore")," | Student Trainee | 06/21 - 07/21"),l.createElement("p",null,"Independently researched state-of-the-art Neural Rendering algorithms to stay current with the field and identify potential applications in AR."),l.createElement("code",null,"Augmented Reality")),l.createElement("div",{className:"box"},l.createElement("p",null,l.createElement("strong",null,"QBurst Technologies, Kochi")," | Engineer | 07/19 - 08/20"),l.createElement("p",null,"Implemented customer-based solutions and developed products on the Force.com platform using Apex, VisualForce, and Lightning Components."),l.createElement("code",null,"Salesforce Development")),l.createElement("div",{className:"box"},l.createElement("p",null,l.createElement("strong",null,"IIST, Trivandrum")," | Research Intern | 06/18 - 07/18"),l.createElement("p",null,"Worked under Dr. B.S. Manoj on Complex Networks to find out the anchor nodes in different types of networks which reduces the average shortest path length in the network by the maximum."),l.createElement("code",null,"Java")," ",l.createElement("code",null,"Complex Networks")," ",l.createElement("code",null,"Python")),e),l.createElement("article",{id:"project",className:`${"project"===this.props.article?"active":""} ${this.props.articleTimeout?"timeout":""}`,style:{display:"none",borderRadius:"10px"}},l.createElement("h2",{className:"major"},"Assorted Projects"),l.createElement("a",{href:"https://github.com/akshayxml/Peer-to-Peer-Group-Based-File-Sharing-System",target:"_blank"},l.createElement("div",{className:"box"},l.createElement("p",null,l.createElement("strong",null,"Peer-to-Peer Group Based File Sharing System")),l.createElement("p",null,"A P2P file sharing system implemented using socket programming, multi-threading and SHA1 hashing. Users can share, download files from the group they belong to. Downloading is done in parallel with multiple pieces from multiple peers."),l.createElement("code",null,"C++")," ",l.createElement("code",null,"Socket Programming"),l.createElement("code",null,"Multithreading"))),l.createElement("a",{href:"https://github.com/akshayxml/Google-File-System",target:"_blank"},l.createElement("div",{className:"box"},l.createElement("p",null,l.createElement("strong",null,"Google File System")),l.createElement("p",null,"Implemented Google File System from it’s research paper with the options to create, append, read, delete, and undelete files."),l.createElement("code",null,"Python"),l.createElement("code",null,"gRPC"))),l.createElement("a",{href:"https://github.com/akshayxml/Linux-Terminal-Based-File-Explorer",target:"_blank"},l.createElement("div",{className:"box"},l.createElement("p",null,l.createElement("strong",null,"Linux Terminal Based File Explorer")),l.createElement("p",null,"A Linux terminal based file explorer that can run in 2 modes: Normal mode and Command mode. Normal mode supports viewing and traversing directories and opening files. Command mode supports various operations like create, delete, rename, copy, move, search files and directories, and goto other directories. Detailed description in readme."),l.createElement("code",null,"C++"))),e),l.createElement("article",{id:"contact",className:`${"contact"===this.props.article?"active":""} ${this.props.articleTimeout?"timeout":""}`,style:{display:"none",borderRadius:"10px"}},e))},t}(l.Component);var s=o;var c=e=>l.createElement("footer",{id:"footer",style:e.timeout?{display:"none"}:{}},l.createElement("ul",{className:"icons","aria-hidden":"true"},l.createElement("li",null,l.createElement("a",{href:"https://www.linkedin.com/in/akshayxml",className:"icon-linkedin2",target:"_blank",rel:"noopener noreferrer","aria-label":"linkedin"})),l.createElement("li",null,l.createElement("a",{href:"mailto:akshayknr7@gmail.com",className:"icon-mail",target:"_blank",rel:"noopener noreferrer","aria-label":"gmail"})),l.createElement("li",null,l.createElement("a",{href:"https://github.com/akshayxml",className:"icon-github",target:"_blank",rel:"noopener noreferrer","aria-label":"github"})),l.createElement("li",null,l.createElement("a",{href:"https://www.leetcode.com/akshayxml",className:"icon-leetcode",target:"_blank",rel:"noopener noreferrer","aria-label":"leetcode"})),l.createElement("li",null,l.createElement("a",{href:"https://twitter.com/akshayxml",className:"icon-x",target:"_blank",rel:"noopener noreferrer","aria-label":"twitter"})),l.createElement("li",null,l.createElement("a",{href:"https://www.instagram.com/akshayxml",className:"icon-instagram",target:"_blank",rel:"noopener noreferrer","aria-label":"instagram"})))),m=n(8154),d=n(4794);const u=e=>{let{title:t,description:n,image:a,pathname:r,article:i}=e;return l.createElement(d.StaticQuery,{query:h,render:e=>{let{site:{siteMetadata:{defaultTitle:o,titleTemplate:s,defaultDescription:c,siteUrl:d,defaultImage:u,twitterUsername:p}}}=e;const h={title:t||o,description:n||c,image:`${d}${a||u}`,url:`${d}${r||"/"}`};return l.createElement(l.Fragment,null,l.createElement(m.m,{title:h.title,titleTemplate:s},l.createElement("meta",{name:"description",content:h.description}),l.createElement("meta",{name:"image",content:h.image}),h.url&&l.createElement("meta",{property:"og:url",content:h.url}),!i?null:l.createElement("meta",{property:"og:type",content:"article"}),h.title&&l.createElement("meta",{property:"og:title",content:h.title}),h.description&&l.createElement("meta",{property:"og:description",content:h.description}),h.image&&l.createElement("meta",{property:"og:image",content:h.image}),l.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),p&&l.createElement("meta",{name:"twitter:creator",content:p}),h.title&&l.createElement("meta",{name:"twitter:title",content:h.title}),h.description&&l.createElement("meta",{name:"twitter:description",content:h.description}),h.image&&l.createElement("meta",{name:"twitter:image",content:h.image}),l.createElement("meta",{name:"robots",content:"INDEX, FOLLOW"}),l.createElement("meta",{name:"geo.region",content:"IN"}),l.createElement("meta",{name:"google-site-verification",content:"w1u6xqw0Ow8IJ6m7Gp0_suCVujv5OsVWyglE_cv20fg"})))}})};var p=u;u.defaultProps={title:null,description:null,image:null,pathname:null,article:!1};const h="3361508366";var g=n.p+"static/bg-5c364a452d7b83840ed58c5c60ab1baa.gif",f=n(3146);var E=e=>l.createElement(f.G,null,(t=>{let{theme:n,toggleTheme:a}=t;return"undefined"!=typeof window&&n&&(document.body.className=n),l.createElement("div",{className:"switch-container"},l.createElement("span",{className:"dark"===n?"icon-darkswitch themeTogglerButton":"icon-lightswitch themeTogglerButton",onClick:()=>a("dark"===n?"light":"dark"),style:e.isArticleVisible?{visibility:"hidden"}:{visibility:"visible"}}))})),b=n.p+"static/darkbg-sm-2273934676656d8f5b196a6fae070d55.mp4",y=n.p+"static/lightbg-cf3bcda40ebd766a3d063de8bd4ca431.mp4",v=n.p+"static/darkbg-591966d31e9558dbeb3801384d40b243.webp",w=n.p+"static/lightbg-1feec52ebaafbf627edf51c9529274f1.webp";var k=()=>{const e=()=>{const e=document.body.getAttribute("class");return e&&e.includes("light")?"light":"dark"},t=e=>{"light"===e?(document.getElementById("dark-video").style.display="none",document.getElementById("light-video").style.display="block"):(document.getElementById("light-video").style.display="none",document.getElementById("dark-video").style.display="block")};return(0,l.useEffect)((()=>{const n=e();t(n);const a=document.body,l=new MutationObserver(((n,a)=>{for(const l of n)if("attributes"===l.type&&"class"===l.attributeName){const n=e();t(n)}}));return l.observe(a,{attributes:!0,attributeFilter:["class"]}),()=>{l.disconnect()}}),[]),l.createElement("div",{id:"bg"},l.createElement("video",{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,id:"dark-video",className:"video",style:{display:"none"},poster:v},l.createElement("source",{src:b,type:"video/mp4"}),">"),l.createElement("video",{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,id:"light-video",className:"video",style:{display:"none"},poster:w},l.createElement("source",{src:y,type:"video/mp4"})))};var x=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={isArticleVisible:!1,timeout:!1,articleTimeout:!1,article:"",loading:"is-loading"},n.handleOpenArticle=n.handleOpenArticle.bind(n),n.handleCloseArticle=n.handleCloseArticle.bind(n),n.setWrapperRef=n.setWrapperRef.bind(n),n.handleClickOutside=n.handleClickOutside.bind(n),n}(0,a.A)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.timeoutId=setTimeout((()=>{this.setState({loading:""})}),100),document.addEventListener("mousedown",this.handleClickOutside)},n.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId),document.removeEventListener("mousedown",this.handleClickOutside)},n.setWrapperRef=function(e){this.wrapperRef=e},n.handleOpenArticle=function(e){!1!==this.state.disabledCloseButton&&(this.state.disabledCloseButton=!1,this.setState({isArticleVisible:!this.state.isArticleVisible,article:e}),setTimeout((()=>{this.setState({timeout:!this.state.timeout})}),325),setTimeout((()=>{this.setState({articleTimeout:!this.state.articleTimeout})}),350))},n.handleCloseArticle=function(){this.state.disabledCloseButton||(this.state.disabledCloseButton=!0,this.setState({articleTimeout:!this.state.articleTimeout}),setTimeout((()=>{this.setState({timeout:!this.state.timeout})}),325),setTimeout((()=>{this.setState({isArticleVisible:!this.state.isArticleVisible,article:""})}),350))},n.handleClickOutside=function(e){this.wrapperRef&&!this.wrapperRef.contains(e.target)&&this.state.timeout&&this.handleCloseArticle()},n.render=function(){return l.createElement(r.A,{location:this.props.location},l.createElement(p,{title:"Akshay M",description:"Akshay M's internet real estate",image:g,pathname:"/",article:!0}),l.createElement("div",{className:`body ${this.state.loading} ${this.state.isArticleVisible?"is-article-visible":""}`},l.createElement("div",{id:"wrapper"},l.createElement(E,{isArticleVisible:this.state.isArticleVisible}),l.createElement(i,{onOpenArticle:this.handleOpenArticle,timeout:this.state.timeout}),l.createElement(s,{isArticleVisible:this.state.isArticleVisible,timeout:this.state.timeout,articleTimeout:this.state.articleTimeout,article:this.state.article,onCloseArticle:this.handleCloseArticle,setWrapperRef:this.setWrapperRef}),l.createElement(c,{timeout:this.state.timeout})),l.createElement(k,null)))},t}(l.Component)},3693:function(e,t,n){var a=n(7736);e.exports=function(e,t,n){return(t=a(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.__esModule=!0,e.exports.default=e.exports},9045:function(e,t,n){var a=n(3738).default;e.exports=function(e,t){if("object"!=a(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var l=n.call(e,t||"default");if("object"!=a(l))return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)},e.exports.__esModule=!0,e.exports.default=e.exports},7736:function(e,t,n){var a=n(3738).default,l=n(9045);e.exports=function(e){var t=l(e,"string");return"symbol"==a(t)?t:t+""},e.exports.__esModule=!0,e.exports.default=e.exports},3738:function(e){function t(n){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(n)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=component---src-pages-index-js-65249f330904a430ea62.js.map