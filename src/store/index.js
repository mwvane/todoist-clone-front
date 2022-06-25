import {createStore} from 'vuex'
import Helpers from "@/helpers/helpers";
import ProjectService from "@/services/ProjectService";

export default createStore({
    state: {
        isAuthorised: true,
        isSideBarOpened: true,
        isProjectsCollapsed: false,
        projects: [],
        currentProject: {},
        isLoading: true,
        isProjectLoading: false,
    },
    getters: {},
    mutations: {
        openCloseSidebar(state) {
            state.isSideBarOpened = !state.isSideBarOpened
        },
        collapseProjects(state) {
            state.isProjectsCollapsed = !state.isProjectsCollapsed
        },
        addTask(state, {sectionId, item}) {
            let sectionIndex = Helpers.findIndexById(sectionId, state.currentProject.sections)
            state.currentProject.sections[sectionIndex].items.push(JSON.parse(JSON.stringify(item)))
        },
        addSection(state, section) {
            state.currentProject.sections.push(JSON.parse(JSON.stringify(section)))
        },
        updateItem(state, {itemId, sectionId, item}) {
            let sectionIndex = Helpers.findIndexById(sectionId, state.currentProject.sections)
            let itemIndex = Helpers.findIndexById(itemId, state.currentProject.sections[sectionIndex].items)
            state.currentProject.sections[sectionIndex].items[itemIndex] = JSON.parse(JSON.stringify(item))
        },
        updateSectionName(state, {sectionId, value}) {
            let sectionIndex = Helpers.findIndexById(sectionId, state.currentProject.sections)
            state.currentProject.sections[sectionIndex].name = value
        },
        addProject(state, project) {
            state.projects.push(project)
        },
        toggleIsLoading(state, flag) {
            state.isLoading = flag;
        },
        setProjects(state, projects) {
            state.projects = projects
        },
        setCurrentProject(state, project) {
            state.currentProject = project
        },
        toggleProjectLoading(state, flag) {
            state.isProjectLoading = flag;
        }
    },
    actions: {
        openCloseSidebar({commit}) {
            commit('openCloseSidebar')
        },
        collapseProjects({commit}) {
            commit('collapseProjects')
        },
        addTask({commit}, {sectionId, item}) {
            commit('addTask', {sectionId, item})
        },
        addSection({commit}, section) {
            commit('addSection', section)
        },
        updateItem({commit}, {itemId, sectionId, item}) {
            commit('updateItem', {itemId, sectionId, item})
        },
        updateSectionName({commit}, {sectionId, value}) {
            commit("updateSectionName", {sectionId, value})
        },
        async addProject({commit}, name) {
            const project = await ProjectService.createProject({name})
            if (!project.ok) {
                alert("Can't create project")
                return;
            }
            commit('addProject', project.data)
        },
        async getDataFromApi({commit}) {
            commit("toggleIsLoading", true)
            const projects = await ProjectService.getProjects()
            commit("setProjects", projects.data)
            commit("toggleIsLoading", false)
        },
        async getCurrentProject({commit}, id) {
            commit("toggleProjectLoading", true)
            const project = await ProjectService.getProject(id)
            if (!project.ok) {
                alert("such project does not exist")
                return
            }
            commit("setCurrentProject", project.data)
            commit("toggleProjectLoading", false)
        }
    },
    modules: {}
})
