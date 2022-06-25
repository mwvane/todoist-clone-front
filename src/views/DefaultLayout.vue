<template>
  <div class="overflow-hidden h-100">
    <Navbar>
    </Navbar>
    <div class="d-flex" style="height: 100%; overflow: hidden !important;">
      <Sidebar></Sidebar>
      <div class="layout-body" style="height: 100%">
        <template v-if="!isLoading">
          <router-view></router-view>
        </template>
        <template v-else>
          <div class="text-center mt-5">
            <div class="spinner spinner-border" style="width: 70px; height: 70px; font-size: 1.6rem"></div>
          </div>
        </template>
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
    ...mapState(["isProjectsCollapsed","projects", "isLoading"]),
  },
  methods:{
    ...mapActions(["collapseProjects", "getDataFromApi"]),
    collapse(){
      this.collapseProjects()
    },
    openProject(id){
      this.$router.push({name:"project", params:{id:id}})
    },
  },
  mounted() {
    this.getDataFromApi()
  }
}
</script>

<style scoped>
 .layout-body{
   background: #1f1f1f !important;
   width: 100% !important;
   height: 100% !important;
   color: white;
   overflow-x: scroll !important;
   overflow-Y: scroll !important;
 }
</style>