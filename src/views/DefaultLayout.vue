<template>
  <div class="overflow-hidden h-100">
    <Navbar>
      <div class="actions">
        <font-awesome-icon class="fa-icons mx-1" icon="plus"></font-awesome-icon>
        <font-awesome-icon class="fa-icons mx-1" icon="circle-question"></font-awesome-icon>
        <font-awesome-icon class="fa-icons mx-1" icon="bell"></font-awesome-icon>
        <span class="mx-1"><img src="../assets/avatar.png" alt="" class="avatar"></span>
      </div>
    </Navbar>
    <div class="d-flex" style="height: 100%; overflow: visible">
      <Sidebar>
        <div class="project" @click="collapse">
          <font-awesome-icon icon="chevron-right" style="width: 15px" v-if="!isProjectsCollapsed"></font-awesome-icon>
          <font-awesome-icon v-else icon="chevron-down" style="width: 15px"></font-awesome-icon>
          <span class="mx-2">Projects</span>
        </div>
        <div v-if="isProjectsCollapsed" class="my-2" style="width: 80%">
          <p>project one</p>
          <p>projects two</p>
          <span class="animated-link">archived projects</span>
        </div>
      </Sidebar>
      <div class="overflow-scroll" style="height: 100%">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import {mapActions, mapState} from "vuex";
export default {
  name: "DefaultLayout",
  components: {
    Navbar, Sidebar
  },
  computed:{
    ...mapState(["isProjectsCollapsed"]),
  },
  methods:{
    ...mapActions(["collapseProjects"]),
    collapse(){
      this.collapseProjects()
    }
  },
}
</script>

<style scoped>
 .actions{
   position: absolute;
   right: 8px;
   top:8px;
 }
 .fa-icons{
   padding: 6px;
   width: 20px;
   height: 20px;
   cursor: pointer;
   border-radius: 4px;
 }
 .fa-icons:hover{
   background-color: #5a5959;
 }
 .avatar{
   width: 30px;
   height: 30px;
   border-radius: 50%;
   border: 1px solid;
 }
 .project{
   width: 84%;
   margin-top: 20px;
 }
 .project:hover{
   cursor: pointer;
 }
 .animated-link{
   font-size: 13px;
   color: #959494;
   transition: .2s;
 }
 .animated-link:hover{
   color: #e8e7e7;
   cursor: pointer;
 }
</style>