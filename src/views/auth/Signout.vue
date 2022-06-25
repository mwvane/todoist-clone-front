<template>
  <div class="text-center mt-5">
    <h3>Signing you out</h3>
    <div class="spinner spinner-border mt-3" style="width: 80px; height: 80px; font-size: 1.5em;">
    </div>
  </div>
</template>

<!--suppress ES6MissingAwait -->
<script>

import AuthService from "@/services/AuthService";

export default {
  name: "Signout",
  components:{
  },
  mounted() {
    setTimeout(() => {
      AuthService.signout()
      this.$router.push({name: 'login'});
    }, 300)
  }
}
</script>

<style scoped>

</style>