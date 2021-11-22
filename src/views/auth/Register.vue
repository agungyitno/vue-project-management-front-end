<template>
  <div class="page page-center">
    <div class="container-tight py-4">
      <div class="text-center mb-3">
        <a href="." class="text-decoration-none h1 text-dark"
          ><bi icon="check2-square" size="2x" class="text-primary me-2"></bi
          ><span>SaktiProMan</span></a
        >
      </div>
      <form class="card card-md">
        <div class="card-body">
          <h2 class="card-title text-center mb-4">Create new account</h2>
          <alert type="danger" :message="failed" v-if="failed"></alert>
          <textField
            v-model="username"
            label="Username"
            :error="invalid.username ? invalid.username[0] : ''"
          ></textField>
          <textField
            v-model="email"
            label="Email"
            :error="invalid.email ? invalid.email[0] : ''"
          ></textField>
          <passwordField
            v-model="password"
            :error="invalid.password ? invalid.password[0] : ''"
          ></passwordField>
          <passwordField
            v-model="confirmPassword"
            label="Confirm Password"
            :error="invalid.password ? invalid.password[0] : ''"
          ></passwordField>
          <textField
            v-model="name"
            label="Name"
            :error="invalid.name ? invalid.name[0] : ''"
          ></textField>
          <checkboxField
            v-model="agree"
            label="I Agree Terms of Service"
            :error="invalid.agree ? invalid.agree[0] : ''"
          ></checkboxField>
          <div class="form-footer">
            <button
              @click.prevent="handleSubmit"
              class="btn btn-primary w-100"
              :class="{ disabled: isLoading }"
            >
              Create account
            </button>
          </div>
        </div>
      </form>
      <div class="text-center text-muted mt-3">
        Already have account?
        <router-link to="/login"> Sign in</router-link>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import alert from "../../components/Alert";
import passwordField from "../../components/field/Password";
import textField from "../../components/field/Text";
import checkboxField from "../../components/field/Checkbox";
export default {
  name: "Register",
  components: { alert, textField, passwordField, checkboxField },
  setup() {
    const store = useStore();
    const router = useRouter();
    const username = ref("");
    const email = ref("");
    const password = ref("");
    const confirmPassword = ref("");
    const name = ref("");
    const agree = ref(false);
    const invalid = ref([]);
    const failed = ref("");
    const isLoading = ref(false);

    function handleSubmit() {
      isLoading.value = true;
      invalid.value = {};
      failed.value = "";
      store
        .dispatch("register", {
          username: username.value,
          email: email.value,
          password: password.value,
          password_confirmation: confirmPassword.value,
          name: name.value,
          agree: agree.value,
        })
        .then(() => {
          isLoading.value = false;
          router.push({
            path: "/login",
            params: { success: "Account created!" },
          });
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
      email,
      password,
      confirmPassword,
      name,
      agree,
      invalid,
      failed,
      isLoading,
      handleSubmit,
    };
  },
};
</script>
