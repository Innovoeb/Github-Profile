import React, {Component} from "react";
import moment from 'moment';
import { connect } from "react-redux";


class ProfileInfo extends Component {



  render() {
    return (
      <div id="canvas">

        <div id="profile-image">
          <img src={this.props.profileImage} alt='profile pic' />
          <p>set your status</p>
          <h4>{this.props.profileName}</h4>
          <p>{this.props.profileUsername}</p>
          <p>{this.props.profileLocation}</p>
          <p>{this.props.profileEmail}</p>
          <button id="edit">Edit</button>
        </div>

        <div id="navbar">
          navbar
        </div>

        <div id="find-repo">
          find repo
        </div>

        <div className="repoName-render">
        {
          this.props.repository.map(repo => (
            <div>
              <h3>{repo.name}</h3>
              <p>{repo.language} updated {moment(repo.updated_at).fromNow()}</p>
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
