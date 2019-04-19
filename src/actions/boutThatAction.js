import store from '../store'
import axios from "axios";
// so we can use store.dispatch() and axios.get()

// actions perform all the work in our app so components can just render

// export a function that calls the github api and renders our profile image and profile info
export function getProfileInfo() {
  axios.get('https://api.github.com/users/innovoeb').then(resp => {
    store.dispatch({
      type: 'GET_PROFILE_INFO',
      profileImage: resp.data.avatar_url,
      profileName: resp.data.name,
      profileUsername: resp.data.login,
      profileLocation: resp.data.location,
      profileEmail: resp.data.email,
    })
  })
}
// export a function that that grabs my github repository data for rendering
export function getRepoInfo() {
  axios.get('https://api.github.com/users/innovoeb/repos').then(resp => {
    store.dispatch({
      type: 'GET_REPO_INFO',
      repository: resp.data
    })
  })

}
