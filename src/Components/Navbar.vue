<template>
  <div class="custom-navbar shadow position-relative">
    <div class="row">
      <div class="col-12">
        <font-awesome-icon  class="mx-2 fa-icons" icon="bars" @click="openSidebar"></font-awesome-icon>
        <font-awesome-icon  class="mx-3 fa-icons" icon="house-chimney"></font-awesome-icon>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "Navbar",
  components: {},
  methods:{
    ...mapActions(['openCloseSidebar']),
    openSidebar(){
      this.openCloseSidebar()
    }
  }

}
</script>

<style scoped>
.custom-navbar{
  font-size: 20px;
  color: white;
  background: #2c2b2b;
  padding: 5px;
  overflow-x: hidden;
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
</style>