<template>
  <div class="project">
    <div class="d-flex" v-if="!isProjectLoading">
      <draggable class="d-flex" style="align-items: flex-start" v-model="currentProject.sections"
                 handle=".draggable-section">
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
                    <ProjectItem :name="item.name"
                                 :project-id="currentProject.id"
                                 :section-id="section.id"
                                 :item-id="item.id"
                                 @update="updateItemName($event, section.id, item.id)">
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
        <AddTitleComponent class="my-4" @save="saveSection" :name="'Add addSection'"
                           icon="align-left"></AddTitleComponent>
      </div>
    </div>
    <div v-else class="text-center mt-5">
      <div class="spinner spinner-border" style="width: 70px; height: 70px; font-size: 1.6rem"></div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";
import draggable from "vuedraggable"
import ProjectItem from "@/components/ProjectItem";
import EditableString from "@/components/EditableString";
import AddTitleComponent from "@/components/AddTitleComponent";
import SectionService from "@/services/SectionService";
import ItemService from "@/services/ItemService";

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
    return {}
  },
  computed: {
    ...mapState(["projects", "currentProject", 'isProjectLoading']),
  },
  methods: {
    ...mapActions([
      "addTask",
      "addSection",
      "updateItem",
      "updateSectionName",
      "getCurrentProject"
    ]),
    async saveItem(val, sectionId) {
      const itemData = await ItemService.createItem({name: val, section_id: sectionId})
      if (!itemData.ok) {
        alert("Can't create item")
        return
      }
      this.addTask({sectionId: sectionId, item: itemData.data})
    },
    async saveSection(name) {
      const sectionData = await SectionService.createSection({name, project_id: this.currentProject.id})
      if (!sectionData.ok) {
        alert("Can't create section")
        return
      }
      this.addSection(sectionData.data)
    },
    async updateItemName(val, sectionId, itemId) {
      const itemData = await ItemService.updateItem(itemId, {name: val, section_id: sectionId})
      if (!itemData.ok) {
        alert("Can't update item")
        return;
      }

      this.updateItem({
        itemId: itemId,
        sectionId: sectionId,
        item: itemData.data
      })
    },
    async updateSectionTitle(name, sectionId) {
      const sectionData = await SectionService.updateSection(sectionId, {name, project_id: this.currentProject.id})
      if (!sectionData.ok) {
        alert("Can't update section")
        return
      }
      this.updateSectionName({
        sectionId: sectionId,
        value: name,
      })
    }
  },
  mounted() {
    const projectId = this.$route.params.id
    this.getCurrentProject(projectId)
  },
}
</script>

<style scoped>
.section {
  width: 280px;
  border: 1px solid rgba(60, 60, 60, 50%);
  box-shadow: 0 2px 10px 0 rgba(60, 60, 60, 100);
  border-radius: 10px;
}

.draggable-section {
  display: none;
  cursor: pointer;
  color: #4D4D4D;
}

.draggable-section:hover {
  color: #c8c5c5;
}

.section:hover .draggable-section {
  display: block
}
</style>