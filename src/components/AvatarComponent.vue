<template>
  <div class="avatar-container" @click="openAvatar">
    <img  class="rounded-avatar" src="../assets/avatar.png" alt=" ">
  </div>
</template>

<script>
export default {
  name: "AvatarComponent",
  props:{
    image: {
      default: "../assets/avatar.png"
    }
  },
  methods:{
    openAvatar(){
      this.$emit('openAvatar')
    }
  }
}
</script>

<style scoped>
.avatar-container{
  width: 30px;
  height: 30px;
}
.rounded-avatar{
  border-radius: 50%;
  border: 1px solid rgba(250,550,250, 50%);
  width: 100%;
  height: 100%;
  transition: .4s;
}
.rounded-avatar:hover{
  border: 3px solid rgba(38, 150, 70, 60%);
  cursor: pointer;
}
</style>