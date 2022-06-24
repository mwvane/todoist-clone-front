<template>
  <div class="main-section-container">
    <div class="w-100 mb-1" v-if="!isAddContainerOpen">
      <button @click="add" class="btn">
        <font-awesome-icon v-if="icon" :icon="icon" style="color: #DE392A; margin-right: 10px"></font-awesome-icon>
        {{name}}
      </button>
    </div>
    <div class="add-task-container py-2" v-if="isAddContainerOpen">
      <input :ref="uniqueString"
             class="form-control custom-input"
             placeholder="Enter title"
             type="text"
             v-model="newValue"
             @keydown.enter="save">
      <div class="d-flex justify-content-start text-white mt-2">
        <button class="btn btn-dark text-white action-button"
                @click="close">Cancel
        </button>
        <button class="btn btn-danger text-white action-button"
                :disabled="newValue.length === 0"
                @click="save">Submit
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Helpers from "@/helpers/helpers";
export default {
  name: "AddTitleComponent",
  props:{
    name: String,
    alignButtons: String,
    icon: {
      default: false
    }
  },
  data(){
    return{
      uniqueString: '',
      isAddContainerOpen: false,
      newValue: "",
    }
  },

  methods: {
    add() {
      this.isAddContainerOpen = !this.isAddContainerOpen
      this.$nextTick(() => {
        this.$refs[this.uniqueString].focus()
      })
    },
    close() {
      this.isAddContainerOpen = false
      this.text = ''
    },
    save() {
      if(this.newValue !== ''){
        this.$emit("save", this.newValue)
        this.isAddContainerOpen = false
        this.text = ''
      }
    },
  },
  mounted() {
    let x = this.icon
    console.log(x)
    this.uniqueString = Helpers.getUniqueString("input-")
  },
}
</script>

<style scoped>
.main-section-container {
  background-color: transparent;
}

.add-task-container {
  padding: 10px;
  width: 100%;
  border: 1px solid rgba(100, 100, 100, 80%);
  border-radius: 10px;
}

.btn {
  border: none;
  color: #4D4D4D;
  width: 100%;
  text-align: left;
}

.btn:hover {
  color: #DE392A;
}

.custom-input {
  border: none;
  background-color: transparent;
  color: white;
}

.custom-input:focus {
  background-color: transparent;
  border: 1px solid rgba(100, 100, 100, 80%);
  box-shadow: none;
  color: #959292;
  font-size: 14px;
}

.action-button {
  width: auto;
  margin-left: 5px;
  font-size: 13px;
  text-align: center;
  font-weight: bold;
  border-radius: 5px;
}
</style>