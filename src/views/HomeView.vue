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

export default {
  name: 'HomeView',
  components: {

  },
  computed:{
    ...mapState(['isAuthorised'])
  },
  mounted() {
    if(!this.isAuthorised){
      this.$router.push({name: "login"})
    }
  }
}
</script>

<style>
</style>