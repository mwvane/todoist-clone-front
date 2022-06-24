<template>
  <div class="d-flex">
    <draggable class="d-flex" style="align-items: flex-start" v-model="currentProject.sections" handle=".draggable-section">
      <template #item="{element: section}">
        <div class="section m-4 position-relative">
          <div class="position-absolute draggable-section" style="left:calc(50% - 0.75rem);top: -0.75rem">
            <font-awesome-icon class="" icon="grip-lines" style="font-size: 1.5rem"></font-awesome-icon>
          </div>
          <EditableString :title="section.name" class="m-3" style="font-size: 23px"
                          @update="updateSectionTitle($event, section.id)"></EditableString>
          <div class="m-3">
            <draggable v-model="section.items" draggable=".draggable-handle" :group="{name:'lua'}">
              <template #item="{element: item}">
                <div class="draggable-handle my-3">
                  <ProjectItem :title="item.title"
                               :project-id="currentProject.id"
                               :section-id="section.id"
                               :item-id="item.id"
                               @update="updateItemTitle($event, section.id, item.id)">
                  </ProjectItem>
                </div>
              </template>
            </draggable>
            <AddTitleComponent @save="saveItem($event,section.id)" name="Add task" icon="plus"></AddTitleComponent>
          </div>
        </div>
      </template>
    </draggable>
    <div style="min-width: 280px">
      <AddTitleComponent class="my-4" @save="saveSection" :name="'Add addSection'" icon="align-left"></AddTitleComponent>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";
import draggable from "vuedraggable"
import ProjectItem from "@/components/ProjectItem";
import EditableString from "@/components/EditableString";
import AddTitleComponent from "@/components/AddTitleComponent";
export default {
  name: "ProjectsView",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    draggable,
    ProjectItem,
    EditableString,
    AddTitleComponent,
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapState(["projects"]),
    currentProject(){
      return this.projects.find(item => item.id === Number(this.$route.params.id))
    }
  },
  mounted() {

  },
  methods: {
    ...mapActions([
      "addTask",
      "addSection",
      "updateItem",
      "updateSectionName",
    ]),
    saveItem(val, sectionId) {
      this.addTask({projectId: this.currentProject.id, sectionId: sectionId, value: val})
    },
    saveSection(val) {
      this.addSection({projectId: this.currentProject.id, sectionName: val})
    },
    updateItemTitle(val, sectionId, itemId) {
      this.updateItem({
        projectId: this.currentProject.id,
        itemId: itemId,
        sectionId: sectionId,
        value: val
      })
    },
    updateSectionTitle(val, sectionId) {
      this.updateSectionName({
        projectId: this.currentProject.id,
        sectionId: sectionId,
        value: val,
      })
    }
  }
}
</script>

<style scoped>
.section {
  width: 280px;
  border: 1px solid rgba(60, 60, 60, 50%);
  box-shadow: 0 2px 10px 0 rgba(60, 60, 60, 100);
  border-radius: 10px;
}
.draggable-section{
  display: none;
  cursor: pointer;
  color: #4D4D4D;
}
.draggable-section:hover{
  color: #c8c5c5;
}
.section:hover .draggable-section{
  display: block
}
</style>