import React from 'react'
import Layout from '../components/layout'

import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/footer'
import SEO from '../components/SEO'

import pic from '../images/bg.gif'
import ThemeToggle from "../components/ThemeToggle";
import Background from "../components/Background";

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isArticleVisible: false,
      timeout: false,
      articleTimeout: false,
      article: '',
      loading: 'is-loading'
    }
    this.handleOpenArticle = this.handleOpenArticle.bind(this)
    this.handleCloseArticle = this.handleCloseArticle.bind(this)
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount () {
    this.timeoutId = setTimeout(() => {
        this.setState({loading: ''});
    }, 100);
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount () {
    if (this.timeoutId) {
        clearTimeout(this.timeoutId);
    }
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  handleOpenArticle(article) {
    if(this.state.disabledCloseButton === false)
      return;
    this.state.disabledCloseButton = false;

    this.setState({
      isArticleVisible: !this.state.isArticleVisible,
      article
    })

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout
      })
    }, 325)

    setTimeout(() => {
      this.setState({
        articleTimeout: !this.state.articleTimeout
      })
    }, 350)

  }

  handleCloseArticle() {
    if(this.state.disabledCloseButton)
      return;
    this.state.disabledCloseButton = true;

    this.setState({
      articleTimeout: !this.state.articleTimeout
    })

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout
      })
    }, 325)

    setTimeout(() => {
      this.setState({
        isArticleVisible: !this.state.isArticleVisible,
        article: ''
      })
    }, 350)

  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      if (this.state.timeout) {
        this.handleCloseArticle();
      }
    }
  }

  render() {
    return (
      <Layout location={this.props.location}>
        <SEO
          title="Akshay M"
          description="Akshay M's internet real estate"
          image={pic}
          pathname="/"
          article
        />
        <div className={`body ${this.state.loading} ${this.state.isArticleVisible ? 'is-article-visible' : ''}`}>
          <div id="wrapper">
            <ThemeToggle isArticleVisible={this.state.isArticleVisible}/>
            <Header onOpenArticle={this.handleOpenArticle} timeout={this.state.timeout} />
            <Main
              isArticleVisible={this.state.isArticleVisible}
              timeout={this.state.timeout}
              articleTimeout={this.state.articleTimeout}
              article={this.state.article}
              onCloseArticle={this.handleCloseArticle}
              setWrapperRef={this.setWrapperRef}
            />
            <Footer timeout={this.state.timeout} />
          </div>
          <Background/>
        </div>
      </Layout>
    )
  }
}

export default IndexPage
