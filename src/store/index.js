import { createStore } from 'vuex'

export default createStore({
  state: {
    isAuthorised: true,
    isSideBarOpened: true
  },
  getters: {
  },
  mutations: {
    openCloseSidebar(state){
      state.isSideBarOpened =!state.isSideBarOpened
    }
  },
  actions: {
    openCloseSidebar({commit}){
      commit('openCloseSidebar')
    }
  },
  modules: {
  }
})
