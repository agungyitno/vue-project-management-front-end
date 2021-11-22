<template>
  <div
    class="modal modal-blur fade show"
    id="modal-team"
    tabindex="-1"
    style="display: block"
    aria-modal="true"
    role="dialog"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="progress card-progress" v-if="isLoading">
          <div class="progress-bar progress-bar-indeterminate bg-primary">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
        <div class="modal-header">
          <h5 class="modal-title">Invite new user</h5>
          <router-link to="/users" class="btn-close"></router-link>
        </div>
        <form @submit.prevent="handleSubmit">
          <div class="modal-body">
            <alert type="danger" :message="failed" v-if="failed"></alert>
            <text-field
              label="Email"
              v-model="email"
              :error="invalid.email ? invalid.email[0] : ''"
            ></text-field>
          </div>
          <div class="modal-footer">
            <router-link to="/users" class="btn me-auto"> Cancel </router-link>
            <button type="submit" class="btn btn-primary">Invite</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "@vue/reactivity";
import textField from "../../components/field/Text";
import alert from "../../components/Alert";
import axios from "axios";
import { useRouter } from "vue-router";
export default {
  name: "Users Invite",
  components: {
    textField,
    alert,
  },
  setup(_, { emit }) {
    const router = useRouter();
    const email = ref("");
    const invalid = ref([]);
    const failed = ref("");
    const isLoading = ref(false);
    const handleSubmit = () => {
      isLoading.value = true;
      invalid.value = {};
      failed.value = "";
      axios
        .post("/user", { email: email.value })
        .then((res) => {
          console.log(res);
          isLoading.value = false;
          emit("updateUser");
          router.push("/users");
        })
        .catch((err) => {
          if (err.response.status == 422) {
            invalid.value = err.response.data;
          } else if (err.response.status == 404) {
            failed.value = err.response.data.message;
          }
          isLoading.value = false;
        });
    };
    return {
      email,
      invalid,
      failed,
      isLoading,
      handleSubmit,
    };
  },
};
</script>
