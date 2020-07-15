import * as types from './mutation_types'

export default {
  [types.SET_CURRENT_USER] (state, { currentUser, csrf }) {
    state.currentUser = currentUser
    state.signedIn = true
    state.csrf = csrf
  },
  [types.UNSET_CURRENT_USER] (state) {
    state.currentUser = {}
    state.signedIn = false
    state.csrf = null
  },
  [types.REFRESH] (state, csrf) {
    state.signedIn = true
    state.csrf = csrf
  }
}