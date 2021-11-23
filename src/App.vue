<template>
  <router-view />
</template>
<script>
import { onMounted } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import axios from "axios";
export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const token = localStorage.getItem("token");
    onMounted(() => {
      if (token) {
        store.commit("setToken", token);
        store.dispatch("getLogged");
      }
      axios.interceptors.response.use(
        (response) => response,
        (error) => {
          if (error.response.status === 401) {
            store.dispatch("forceLogout");
            router.push("/login");
          }
          return Promise.reject(error);
        }
      );
    });
    return {
      token,
    };
  },
};
</script>
<style lang="scss">
@import "./assets/scss/tabler";
.bi {
  width: 1.25rem !important;
  height: 1.25rem !important;
}
.bi.icon-lg {
  width: 3.5rem !important;
  height: 3.5rem !important;
}
</style>
