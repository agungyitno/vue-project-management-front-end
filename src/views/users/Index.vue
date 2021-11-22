<template>
  <div class="container-xl">
    <div class="page-header d-print-none">
      <div class="row align-items-center">
        <div class="col">
          <h2 class="page-title">{{ this.$route.name }}</h2>
        </div>
        <div class="col-auto ms-auto d-print-none">
          <div class="d-flex">
            <input
              type="search"
              class="form-control d-inline-block w-9 me-3"
              placeholder="Search user…"
            />
            <router-link to="/users/invite" class="btn btn-primary">
              <bi icon="person-plus-fill" class="me-2"></bi>
              Invite user
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="page-body">
    <div class="container-xl">
      <div class="row row-cards">
        <div class="col-md-6 col-xl-3" v-for="user in users" :key="user.id">
          <div class="card">
            <div class="card-body">
              <div class="row mb-2">
                <div class="col">
                  <div class="mt-0">
                    <span
                      class="badge"
                      :class="[
                        user.pivot.role == 'Owner' ? 'bg-green' : 'bg-yellow',
                      ]"
                      >{{ user.pivot.role }}</span
                    >
                  </div>
                </div>
                <div class="col-auto">
                  <div class="dropdown" v-if="user.pivot.role != 'Owner'">
                    <a
                      href="#"
                      class="card-dropdown"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <bi icon="grid-fill" class="text-primary"></bi>
                    </a>
                    <div class="dropdown-menu dropdown-menu-end">
                      <a href="#" class="dropdown-item text-warning"
                        ><bi icon="pencil-fill" class="me-2"></bi>Edit</a
                      >
                      <a href="#" class="dropdown-item text-danger"
                        ><bi icon="trash-fill" class="me-2"></bi>Remove</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-center">
                <div class="mb-3">
                  <span
                    class="avatar avatar-xl avatar-rounded"
                    :style="`background-image: url(http://localhost:8000/user/${user.username}/avatar)`"
                  ></span>
                </div>
                <div class="card-title mb-1">
                  <a href="#">{{ user.name }}</a>
                </div>
                <div class="text-muted">{{ user.email }}</div>
              </div>
              <!-- <hr /> -->
            </div>
            <div class="card-footer">
              <div class="row text-center">
                <div class="col">
                  <div class="small">Projects</div>
                  <div class="h3">{{ user.projects_count }}</div>
                </div>
                <div class="col">
                  <div class="small">Tasks</div>
                  <div class="h3">{{ user.tasks_count }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <router-view @updateUser="loadUser"></router-view>
  <div class="modal-backdrop fade show" v-if="this.$route.meta.modal"></div>
</template>
<script>
import { ref } from "@vue/reactivity";
import axios from "axios";
import { onMounted } from "@vue/runtime-core";
export default {
  name: "Users List",
  setup() {
    const users = ref([]);
    onMounted(() => {
      loadUser();
    });
    const loadUser = () => {
      axios
        .get("/user")
        .then((res) => {
          users.value = res.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    };

    return {
      users,
      loadUser,
    };
  },
};
</script>
