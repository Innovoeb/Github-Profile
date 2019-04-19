// application's initial state
const initialState = {
  profileImage: "",
    profileName: "",
    profileUsername: "",
    profileLocation: "",
    profileEmail: "",
    repository: [],

}
// a reducer receives actions in order to change the different application states
export default function myReducer(state = initialState, action) {
  switch ( action.type ) {
    // grab profile data from github api and change state of the application in order to render the data
    case 'GET_PROFILE_INFO':
      return {...state,
        profileImage: action.profileImage,
        profileName: action.profileName,
        profileUsername: action.profileUsername,
        profileLocation: action.profileLocation,
        profileEmail: action.profileEmail,
      }
    // grab profile's repository data and change the state of the application in order to render the data
    case 'GET_REPO_INFO':
      return{...state,
        repository: action.repository
      }
    default:
      return state
  }
}
