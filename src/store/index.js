import { createStore } from 'vuex'

export default createStore({
  state: {
    isAuthorised: true,
    isSideBarOpened: true,
    isProjectsCollapsed: false
  },
  getters: {
  },
  mutations: {
    openCloseSidebar(state){
      state.isSideBarOpened =!state.isSideBarOpened
    },
    collapseProjects(state){
      state.isProjectsCollapsed = !state.isProjectsCollapsed
    }
  },
  actions: {
    openCloseSidebar({commit}){
      commit('openCloseSidebar')
    },
    collapseProjects({commit}){
      commit('collapseProjects')
    }
  },
  modules: {
  }
})
