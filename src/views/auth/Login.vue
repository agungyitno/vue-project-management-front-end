<template>
  <div class="page page-center">
    <div class="container-tight py-4">
      <div class="text-center mb-4">
        <a href="." class="text-decoration-none h1 text-dark"
          ><bi icon="check2-square" size="2x" class="text-primary me-2"></bi
          ><span>SaktiProMan</span></a
        >
      </div>
      <form class="card card-md">
        <div class="progress card-progress" v-if="isLoading">
          <div class="progress-bar progress-bar-indeterminate bg-primary">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
        <div class="card-body">
          <h2 class="card-title text-center mb-4">Login to your account</h2>
          <alert type="danger" :message="failed" v-if="failed"></alert>
          <alert type="success" :message="success" v-if="success"></alert>
          <textField
            v-model="username"
            label="Username or Email"
            :error="invalid.username ? invalid.username[0] : ''"
          ></textField>
          <passwordField
            v-model="password"
            :error="invalid.password ? invalid.password[0] : ''"
          ></passwordField>
          <checkboxField v-model="remember" label="Remember Me"></checkboxField>
          <div class="form-footer">
            <button
              @click.prevent="handleSubmit"
              class="btn btn-primary w-100"
              :class="{ disabled: isLoading }"
            >
              Sign in
            </button>
          </div>
        </div>
      </form>
      <div class="text-center text-muted mt-3">
        <a href="./forgot-password.html">I forgot password</a>
      </div>
      <div class="text-center text-muted mt-3">
        Don't have account yet?
        <router-link :to="{ name: 'register' }">Sign up</router-link>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import alert from "../../components/Alert";
import textField from "../../components/field/Text";
import passwordField from "../../components/field/Password";
import checkboxField from "../../components/field/Checkbox";
export default {
  name: "Login",
  components: { alert, textField, passwordField, checkboxField },
  props: {
    success: { type: String, default: "" },
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const username = ref("");
    const password = ref("");
    const remember = ref(false);
    const invalid = ref([]);
    const failed = ref("");
    const isLoading = ref(false);

    function handleSubmit() {
      isLoading.value = true;
      invalid.value = {};
      failed.value = "";
      store
        .dispatch("login", {
          username: username.value,
          password: password.value,
          remember: remember.value,
        })
        .then(() => {
          store.dispatch("getLogged");
          isLoading.value = false;
          router.push("/");
        })
        .catch((err) => {
          if (err.response.status == 422) {
            invalid.value = err.response.data;
          } else if (err.response.status == 404) {
            failed.value = err.response.data.message;
          }
          isLoading.value = false;
        });
    }
    return {
      username,
      password,
      remember,
      invalid,
      failed,
      isLoading,
      handleSubmit,
    };
  },
};
</script>
