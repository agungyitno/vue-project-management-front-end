<template>
  <div class="container-xl">
    <div class="page-header d-print-none">
      <div class="row align-items-center">
        <div class="col">
          <h2 class="page-title">{{ this.$route.meta.title }}</h2>
        </div>
        <div class="col-auto ms-auto d-print-none">
          <div class="d-flex">
            <router-link :to="{ name: 'projectNew' }" class="btn btn-primary">
              <bi icon="person-plus-fill" class="me-2"></bi>
              New Project
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="page-body">
    <div class="container-xl">
      <div class="row row-cards">
        <div
          class="col-md-6 col-xl-3"
          v-for="project in projects"
          :key="project.id"
        >
          <div class="card">
            <div
              class="card-status-top"
              :class="[
                { 'bg-green': project.status == 'Finish' },
                { 'bg-yellow': project.status == 'Ongoing' },
                { 'bg-red': project.status == 'OnHold' },
              ]"
            ></div>
            <div class="card-body">
              <div
                class="badge my-1"
                :class="[
                  { 'bg-green': project.status == 'Finish' },
                  { 'bg-yellow': project.status == 'Ongoing' },
                  { 'bg-red': project.status == 'OnHold' },
                ]"
              >
                {{ project.status }}
              </div>
              <h3 class="card-title">
                <a href="#">{{ project.name }}</a>
              </h3>
              <div class="avatar-list avatar-list-stacked mb-3">
                <span
                  v-for="user in project.users"
                  :key="user.id"
                  class="avatar avatar-sm avatar-rounded"
                  :title="user.name"
                  :style="`background-image: url(http://localhost:8000/user/${user.username}/avatar)`"
                ></span>
              </div>
              <div class="card-meta d-flex justify-content-between">
                <div class="d-flex align-items-center">
                  <bi icon="list-check" class="me-2"></bi>
                  <span>{{ project.tasks_count }}</span>
                </div>
                <span>{{ project.end_date }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <router-view @updateUser="loadProject"></router-view>
  <div class="modal-backdrop fade show" v-if="this.$route.meta.modal"></div>
</template>
<script>
import axios from "axios";
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
export default {
  name: "Project",
  setup() {
    const projects = ref([]);
    onMounted(() => {
      loadProject();
    });
    const loadProject = async () => {
      axios.get("project").then((res) => {
        projects.value = res.data.data;
        console.log(projects.value);
      });
    };
    return {
      projects,
      loadProject,
    };
  },
};
</script>
