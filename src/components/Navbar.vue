<template>
  <div class="custom-navbar position-relative">
    <div class="row">
      <div class="col-12">
        <font-awesome-icon  class="mx-2 fa-icons" icon="bars" @click="openSidebar"></font-awesome-icon>
        <font-awesome-icon  class="mx-3 fa-icons" icon="house-chimney"></font-awesome-icon>
        <div class="actions">
          <font-awesome-icon class="fa-icons mx-1" icon="plus"></font-awesome-icon>
          <font-awesome-icon class="fa-icons mx-1" icon="circle-question"></font-awesome-icon>
          <font-awesome-icon class="fa-icons mx-1" icon="bell"></font-awesome-icon>
          <AvatarComponent></AvatarComponent>
        </div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";
import AvatarComponent from "@/components/AvatarComponent";
export default {
  name: "Navbar",
  components: {AvatarComponent},
  methods:{
    ...mapActions(['openCloseSidebar']),
    openSidebar(){
      this.openCloseSidebar()
    }
  }

}
</script>

<style scoped>
.actions{
  position: absolute;
  right: 8px;
  top:8px;
  display: flex;
}
.custom-navbar{
  font-size: 20px;
  color: white;
  background: #282828;
  padding: 5px;
  overflow-x: hidden;
  box-shadow: 1px 1px 2px 2px rgba(45,45,45, .6);
}
.fa-icons{
  padding: 6px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  border-radius: 4px;

}
.fa-icons:hover{
  background-color: #363636;
}
</style>