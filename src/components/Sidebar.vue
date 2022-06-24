<template>
  <div class="h-100 overflow-hidden" style="width: 380px" v-if="isSideBarOpened">
    <div class="sidebar">
      <div class="sidebar-button">
        <font-awesome-icon class="fa-icons" icon="inbox" style="color: #3131ed"></font-awesome-icon>
        <span class="mx-2">Inbox</span>
      </div>
      <div class="mt-1 sidebar-button">
        <font-awesome-icon class="fa-icons" icon="calendar-day" style="color: #5aed31"></font-awesome-icon>
        <span class="mx-2 sidebar-button">Today</span>
      </div>
      <div class="mt-1 sidebar-button">
        <font-awesome-icon class="fa-icons" icon="calendar-days" style="color: #8c31ed"></font-awesome-icon>
        <span class="mx-2">Upcoming</span>
      </div>
      <div class="mt-1 sidebar-button">
        <font-awesome-icon class="fa-icons" icon="filter" style="color: #c89c0a"></font-awesome-icon>
        <span class="mx-2">Filters & Labels</span>
      </div>
      <div class="project" @click="collapse">
        <font-awesome-icon icon="chevron-right" style="width: 15px" v-if="!isProjectsCollapsed"></font-awesome-icon>
        <font-awesome-icon v-else icon="chevron-down" style="width: 15px"></font-awesome-icon>
        <span class="mx-2">Projects</span>
      </div>
      <div v-if="isProjectsCollapsed" class="my-2" style="width: 100%">
       <div class="mx-2 " style="width: 94%">
         <div v-for="project in projects" :key="project.id">
           <div class="sidebar-button" @click="openProject(project.id)">
             <font-awesome-icon class="mx-1" icon="user" style="font-size: 14px"></font-awesome-icon>
             <span class="mx-2">{{project.name}}</span>
           </div>
         </div>
         <div >
           <AddTitleComponent name="Add project" icon="clipboard-list" @save="saveProject"></AddTitleComponent>
         </div>
         <div class="animated-link">
           <font-awesome-icon icon="box-open"></font-awesome-icon>
           <span class="mx-2">archived projects</span>
         </div>
       </div>
      </div>

    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";
import AddTitleComponent from "@/components/AddTitleComponent";
export default {
  name: "Sidebar",
  components: {AddTitleComponent},

  props:{
    isOpened: {
      default: true
    }
  },
  computed:{
    ...mapState(["isSideBarOpened","isProjectsCollapsed","projects"]),
  },
  methods:{
    ...mapActions(["collapseProjects","addProject"]),
    collapse(){
      this.collapseProjects()
    },
    openProject(id){
      this.$router.push({name:"project", params:{id:id}})
    },
    saveProject(val){
      this.addProject(val)
    },
  },
}
</script>

<style scoped>
  .sidebar{
    width: 100%;
    background-color:#242424;
    color: white;
    height: 100% !important;
  }
  .fa-icons{
    font-size: 20px;
    margin-left: 10px;
  }
  .sidebar-button{
    border-radius: 4px;
    padding: 10px;
    width: 90%;
  }
  .sidebar-button:hover{
    background: #363636;
  }
  .project{
    width: 100%;
    margin-top: 20px;
    padding-left: 20px;
  }
  .project:hover{
    cursor: pointer;
  }
  .animated-link{
    font-size: 13px;
    color: #959494;
    transition: .2s;
    margin-top: 15px;
    margin-left: 8px;

  }
  .animated-link:hover{
    color: #e8e7e7;
    cursor: pointer;
  }
</style>