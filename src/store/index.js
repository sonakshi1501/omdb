import {
  createStore
} from 'vuex';
import userInfo from '../utils/userInfo';
import userLoggedin from '../utils/userLoggedin';

export default createStore({
  state: {
    user: userInfo.getUser(),
    isLoggedin: userLoggedin()
  },
  mutations: {
    userChange: (state, payload) => (state.user = payload),
    userLoginChange: (state, payload) => (state.isLoggedin = payload),
  },
  actions: {},
  modules: {}
});