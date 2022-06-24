<template>
  <div class="editable-string-container">
    <span v-if="!isEditable" @dblclick="edit">{{ title }}</span>
    <input v-if="isEditable"
           ref="input-for-name"
           class="form-control custom-input"
           type="text"
           v-model="newValue"
           @keydown.enter="update">
  </div>
</template>

<script>
export default {
  name: "EditableString",
  props:{
    title: String,
    canBeEmpty: {
      default: false
    },
  },
  data(){
    return{
      newValue: this.title,
      isEditable: false,
    }
  },
  methods:{
    update(){
      if(this.canBeEmpty){
        this.$emit("update", this.newValue)
        this.isEditable = false
      }
      else if(this.newValue.trim()){
        this.$emit("update", this.newValue)
        this.isEditable = false
      }
    },
    edit() {
      this.isEditable = true
      this.$nextTick(() => {
        this.$refs["input-for-name"].focus()
      })
    },
  }
}
</script>

<style scoped>
.custom-input {
  border: none;
  background-color: transparent;
  color: white;
  text-align: center;
}

.custom-input:focus {
  background-color: transparent;
  /*border: 1px solid rgba(100, 100, 100, 80%);*/
  box-shadow: none;
  color: #c1bebe;
  font-size: 15px;
}
</style>