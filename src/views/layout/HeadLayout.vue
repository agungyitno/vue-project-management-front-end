<template>
  <header
    class="navbar navbar-expand-md navbar-light d-none d-lg-flex d-print-none"
  >
    <div class="container-xl">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbar-menu"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="navbar-nav flex-row order-md-last">
        <div class="nav-item dropdown">
          <a
            href="#"
            class="nav-link d-flex lh-1 text-reset p-0"
            data-bs-toggle="dropdown"
            aria-label="Open user menu"
          >
            <span
              class="avatar avatar-sm"
              style="background-image: url(./static/avatars/000m.jpg)"
            ></span>
            <div class="d-none d-xl-block ps-2">
              <div v-if="user">{{ user.user.name }}</div>
              <div class="mt-1 small text-muted">UI Designer</div>
            </div>
          </a>
          <div class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
            <a href="#" class="dropdown-item">Set status</a>
            <a href="#" class="dropdown-item">Profile & account</a>
            <a href="#" class="dropdown-item">Feedback</a>
            <div class="dropdown-divider"></div>
            <a href="#" class="dropdown-item"
              ><bi icon="gear" class="me-2"></bi>Settings</a
            >
            <a href="javascript:;" class="dropdown-item" @click.prevent="logout"
              ><bi icon="box-arrow-right" class="me-2"></bi>Logout</a
            >
          </div>
        </div>
      </div>
      <div class="collapse navbar-collapse" id="navbar-menu">
        <div v-if="user">
          <button class="btn dropdown-toggle" data-bs-toggle="dropdown">
            {{ user.activeWorkspace.name }}
          </button>
          <div class="dropdown-menu dropdown-menu-center" style="">
            <a
              class="dropdown-item"
              href="javascript:;"
              v-for="workspace in workspaces"
              :key="workspace.id"
              :class="{ active: workspace.id == user.activeWorkspace.id }"
              @click.prevent="change(workspace.slug)"
            >
              <bi
                icon="check-circle"
                class="me-2"
                v-if="workspace.id == user.activeWorkspace.id"
              ></bi>
              <bi icon="circle" class="me-2" v-else></bi>
              {{ workspace.name }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { computed, onMounted, ref } from "vue";
import axios from "axios";
// import dropdown from "../../modules/dropdown";
export default {
  name: "HeadLayout",
  setup() {
    const store = useStore();
    const router = useRouter();
    const workspaces = ref([]);
    onMounted(() => {
      axios.get("/workspace").then((res) => {
        workspaces.value = res.data.data;
      });
    });
    const change = (slug) => {
      console.log(slug);
      axios.post(`/change/${slug}`).then((res) => {
        console.log(res);
      });
    };
    const logout = () => {
      store.dispatch("logout").then(() => {
        router.push("/login");
      });
    };

    return {
      workspaces,
      change,
      logout,
      user: computed(() => store.state.auth.user),
    };
  },
};
</script>
