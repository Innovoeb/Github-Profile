import React, {Component} from "react";
import moment from 'moment';
import { connect } from "react-redux";


class ProfileInfo extends Component {



  render() {
    return (
      <div id="canvas">

        <div id="profile-image">
          <img src={this.props.profileImage} alt='profile pic' />
          <p id="status">set status</p>
        </div>
        <div id="profile-info">
          <h4 id="profile-name">{this.props.profileName}</h4>
          <p id="profile-username">{this.props.profileUsername}</p>
          <p id="profile-location">{this.props.profileLocation}</p>
          <p id="profile-email">{this.props.profileEmail}</p>
          <button id="edit">Edit</button>
        </div>

        <div id="navbar">
          <p>Overview</p>
          <p>Repositories</p>
          <p>Projects</p>
          <p>Stars</p>
          <p>Followers</p>
          <p>Following</p>
        </div>

        <div id="find-repo">
          <div id="center-me">
            <input id="finda" placeholder="Find a repository..."></input>
            <button id="type-bttn">Type</button>
            <button id="language-bttn">Language</button>
            <button id="new">New</button>
          </div>
        </div>

        <div className="repoName-render">
          {this.props.repository.map(repo => (
            <div className="repos">
              <h3 className="repo-name">{repo.name}</h3>
              <div id= "repo-description"><p id="language">{repo.language}</p><p id="updated"> updated {moment(repo.updated_at).fromNow()}</p></div>
              <button className="star">Star</button>
            </div>
          ))
          }
        </div>

      </div>
    )
  }
}

// function that maps the application state to props
function mapStateToProps(appState) {
  return {
    profileImage: appState.profileImage,
    profileName: appState.profileName,
    profileUsername: appState.profileUsername,
    profileLocation: appState.profileLocation,
    profileEmail: appState.profileEmail,
    repository: appState.repository,
  }
}

// connect() is a higher order component that ...
export default connect(mapStateToProps)(ProfileInfo)
