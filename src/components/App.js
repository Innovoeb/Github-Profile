import React, { Component } from 'react';
import '../styles/base.css'
import { Provider } from 'react-redux'
import store from '../store'
import { getProfileInfo } from '../actions/boutThatAction'
import ProfileInfo from './profileinfo'
import { getRepoInfo } from '../actions/boutThatAction'

class App extends Component {

  componentDidMount() {
    getProfileInfo()
    getRepoInfo()
  }

  render() {
    return (
      <Provider store={store}>

          <div id="header">
          </div>

          <ProfileInfo />

          <div id="footer">
          </div>

      </Provider>
    )
  }
}

export default App;
