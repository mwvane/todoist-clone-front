<template>
  <div class="home">
    <div class="test">
      hi
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import {mapState} from "vuex";
import axiosClient from "@/shared/axiosClient";

export default {
  name: 'HomeView',
  components: {

  },
  computed:{
    ...mapState(['isAuthorised'])
  },
  mounted() {
    axiosClient.get('/api/test')
  }
}
</script>

<style>
</style>