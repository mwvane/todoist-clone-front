<template>
  <div class="h-100 overflow-hidden" v-if="isSideBarOpened">
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
      <slot></slot>

    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "Sidebar",
  props:{
    isOpened: {
      default: true
    }
  },
  computed:{
    ...mapState(["isSideBarOpened"]),
  }
}
</script>

<style scoped>
  .sidebar{
    width: 300px;
    display: flex;
    background-color: rgb(50,50,50);
    flex-direction: column;
    color: white;
    height: 100% !important;
    justify-content: flex-start;
    align-items: center ;
  }
  .fa-icons{
    font-size: 20px;
    margin-left: 10px;
  }
  .sidebar-button{
    border-radius: 4px;
    padding: 10px;
    width: 98%;
  }
  .sidebar-button:hover{
    background: #5a5959;
  }
</style>