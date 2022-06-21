<template>
  <div class="overflow-hidden h-100">
    <Navbar></Navbar>
    <div class="d-flex" style="height: 100%; overflow: visible">
      <Sidebar></Sidebar>
      <div class="overflow-scroll" style="height: 100%">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
export default {
  name: "DefaultLayout",
  components: {
    Navbar, Sidebar
  }
}
</script>

<style scoped>

</style>