import {createStore} from 'vuex'
import Helpers from "@/helpers/helpers";

export default createStore({
    state: {
        isAuthorised: true,
        isSideBarOpened: true,
        isProjectsCollapsed: false,
        //created for testing
        projects: [{
            name: "Todoist-clone",
            id: 1,
            sections: [
                {
                    id: 1,
                    name: "example",
                    items: [
                        {
                            id: 1,
                            title: "example task",
                            isArchived: false
                        },
                    ]
                },
            ]
        }]
    },
    getters: {},
    mutations: {
        openCloseSidebar(state) {
            state.isSideBarOpened = !state.isSideBarOpened
        },
        collapseProjects(state) {
            state.isProjectsCollapsed = !state.isProjectsCollapsed
        },
        addTask(state, {projectId, sectionId, value}) {
            let projectIndex = Helpers.findIndexById(projectId, state.projects)
            let sectionIndex = Helpers.findIndexById(sectionId, state.projects[projectIndex].sections)
            state.projects[projectIndex].sections[sectionIndex].items.push({
                id: Helpers.getID(state.projects[projectIndex].sections[sectionIndex].items),
                title: value,
                isArchived: false
            })
        },
        addSection(state, {projectId, sectionName}) {

            let index = Helpers.findIndexById(projectId, state.projects)
            let section = {
                id: Helpers.getID(state.projects[index].sections),
                name: sectionName,
                items: [],
            }
            state.projects[index].sections.push(section)
        },
        updateItem(state, {projectId, itemId, sectionId, value}) {
            let projectIndex = Helpers.findIndexById(projectId, state.projects)
            let sectionIndex = Helpers.findIndexById(sectionId, state.projects[projectIndex].sections)
            let itemIndex = Helpers.findIndexById(itemId,state.projects[projectIndex].sections[sectionIndex].items)
            state.projects[projectIndex].sections[sectionIndex].items[itemIndex].title = value
        },
        updateSectionName(state, {projectId, sectionId, value}){
            let projectIndex = Helpers.findIndexById(projectId, state.projects)
            let sectionIndex = Helpers.findIndexById(sectionId, state.projects[projectIndex].sections)
            state.projects[projectIndex].sections[sectionIndex].name = value
        },
        addProject(state, title){
            let project = {
                name: title,
                id: Helpers.getID(state.projects),
                sections: [
                ]
            }
            state.projects.push(project)
        }
    },
    actions: {
        openCloseSidebar({commit}) {
            commit('openCloseSidebar')
        },
        collapseProjects({commit}) {
            commit('collapseProjects')
        },
        addTask({commit}, {projectId, sectionId, value}) {
            commit('addTask', {projectId, sectionId, value})
        },
        addSection({commit}, {projectId, sectionName}) {
            commit('addSection', {projectId, sectionName})
        },
        updateItem({commit}, {projectId, itemId, sectionId, value}) {
            commit('updateItem', {projectId, itemId, sectionId, value})
        },
        updateSectionName({commit}, {projectId, sectionId, value}){
            commit("updateSectionName", {projectId, sectionId, value})
        },
        addProject({commit},title){
            commit('addProject', title)
        }

    },
    modules: {}
})
