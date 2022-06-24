<template>
  <div class="item-container">
    <button class="project-item px-5 m- ">
      <EditableString :title="title" @update="update"></EditableString>
    </button>
  </div>
</template>

<script>
import {mapActions} from "vuex";
import EditableString from "@/components/EditableString";
export default {
  name: "ProjectItem",
  components:{EditableString},
  props: {
    title: String,
    itemId: Number,
    projectId: Number,
    sectionId: Number,
  },
  methods: {
    update(val){
      this.$emit('update',val)
    },
  }
}
</script>

<style scoped>
.project-item {
  background-color: #282828;
  border: 1px solid rgba(100, 100, 100, 45%);
  color: #D7D7D7;
  border-radius: 4px;
  min-height: 50px;
  width: 100%;
  font-size: 14px;
  transition: .4s;
  box-shadow: rgba(20, 20, 20, 0.6) 0 6px 12px -2px,
  rgba(0, 0, 0, 0.3) 0 3px 7px -3px;;
  word-break: break-all;
}

.project-item:hover {
  border: 1px solid rgba(100, 100, 100, 80%);
}

.action-button {
  margin-left: 30px;
  padding: 4px;
  border-radius: 50%;
}

.action-button:hover {
  background-color: #4D4D4D;
  box-shadow: rgba(20, 20, 20, 0.6) 0 6px 12px -2px, rgba(0, 0, 0, 0.3) 0 3px 7px -3px;;

}

.item-avatar {
  max-width: 20px !important;
  max-height: 20px !important;
}
</style>