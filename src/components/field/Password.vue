<template>
  <div class="mb-3">
    <label class="form-label"> {{ label }} </label>
    <div class="input-group input-group-flat">
      <input
        v-model="password"
        :type="type"
        :class="{ 'is-invalid': error }"
        :placeholder="label"
        class="form-control"
      />
      <span class="input-group-text bg-light">
        <a
          @click.prevent="showPassword"
          href="javascript:;"
          class="link-secondary"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          data-bs-original-title="Show/Hide password"
          ><bi :icon="icon"></bi>
        </a>
      </span>
    </div>
    <div class="invalid-feedback" v-if="error" :class="{ 'd-block': error }">
      {{ error }}
    </div>
  </div>
</template>
<script>
import { ref, onMounted, computed } from "vue";
import { Tooltip } from "bootstrap";
export default {
  name: "passwordField",
  props: {
    modelValue: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "Password",
    },
    error: {
      type: String,
      default: "",
    },
  },
  setup(props, { emit }) {
    const type = ref("password");
    const icon = ref("eye");
    onMounted(() => {
      let a = document.querySelector("a[data-bs-toggle='tooltip']");
      new Tooltip(a);
    });
    const password = computed({
      get: () => {
        return props.modelValue;
      },
      set: (value) => {
        emit("update:modelValue", value);
      },
    });
    const showPassword = () => {
      if (type.value === "password") {
        type.value = "text";
        icon.value = "eye-slash";
      } else {
        type.value = "password";
        icon.value = "eye";
      }
    };

    return {
      type,
      icon,
      password,
      showPassword,
    };
  },
};
</script>
