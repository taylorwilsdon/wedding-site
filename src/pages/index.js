import React from 'react'
import Layout from '../components/layout'
import Header from '../components/Header'
import AuthHeader from '../components/AuthHeader';
import Main from '../components/Main'
import Footer from '../components/Footer'
require('../assets/scss/main.scss');


class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isArticleVisible: false,
      timeout: false,
      articleTimeout: false,
      article: '',
      loading: 'is-loading',
      isAuthenticated: false,
      passwordInput: ''
    }
    this.handleOpenArticle = this.handleOpenArticle.bind(this)
    this.handleCloseArticle = this.handleCloseArticle.bind(this)
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
  handleSubmit(event) {
    event.preventDefault();
    if (this.state.passwordInput.toLowerCase() == 'sunday') {
      this.setState({
        isAuthenticated: true
      })
    } else {
      window.alert('Sorry, password was not entered correctly. Please try again!');
    }
  }
  handleChange(event) {
    this.setState({passwordInput: event.target.value});
    if (event.target.value.toLowerCase() == 'sunday') {
      this.setState({
        isAuthenticated: true
      })
    }
  }
  
  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      if (this.state.isArticleVisible) {
        this.handleCloseArticle();
      }
    }
  }

  render() {
    return (
      <Layout location={this.props.location}>
        <div className={`body ${this.state.loading} ${this.state.isArticleVisible ? 'is-article-visible' : ''}`}>
          <div id="wrapper">
          {this.state.isAuthenticated ? (
            <Header onOpenArticle={this.handleOpenArticle} timeout={this.state.timeout} />
          ) : (
            <header id="header" style={this.state.timeout ? {display: 'none'} : {}}>
              <div className="content">
                  <div className="inner">
                      <p>
                      To access, please enter the password you were provided</p>
                      <form onSubmit={this.handleSubmit}>
                          <input type="password" value={this.state.passwordInput} onChange={this.handleChange}></input><br />
                          <button type="submit">Submit</button>
                      </form>
                  </div>
              </div>
            </header>    
          )}
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
          <div id="bg"></div>
        </div>
      </Layout>
    )
  }
}

export default IndexPage
