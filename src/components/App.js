import React, { Component } from 'react';
import '../styles/base.css'
import { Provider } from 'react-redux'
import store from '../store'
import { getProfileInfo } from '../actions/boutThatAction'
import ProfileInfo from './profileinfo'
import { getRepoInfo } from '../actions/boutThatAction'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'





class App extends Component {

  componentDidMount() {
    getProfileInfo()
    getRepoInfo()
  }

  render() {
    return (
      <Provider store={store}>

          <div id="header">
            <FontAwesomeIcon id="github-icon" icon={faGithubSquare} />
            <button id="slash">/</button>
            <input id="search-repo" placeholder="Search or jump to..."></input>
            <div id="header-text">
              <p className="header-text">Pull requests</p>
              <p className="header-text">Issues</p>
              <p className="header-text">Marketplace</p>
              <p className="header-text">Explore</p>
            </div>
          </div>

          <ProfileInfo />

          <div id="footer">
            <p>2019 GitHub, Inc.</p>
            <p>Terms</p>
            <p>Privacy</p>
            <p>Security</p>
            <p>Status</p>
            <p>Help</p>
            <FontAwesomeIcon id="giticon-bottom" icon={faGithubSquare} />
            <p>Contact GitHub</p>
            <p>Pricing</p>
            <p>API</p>
            <p>Training</p>
            <p>Blog</p>
            <p>About</p>
          </div>

      </Provider>
    )
  }
}

export default App;
