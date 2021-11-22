<template>
  <div class="mb-3">
    <label class="form-label">{{ label }}</label>
    <input
      v-model="textInput"
      type="text"
      class="form-control"
      :class="{ 'is-invalid': error }"
      :placeholder="`Enter ${label}`"
    />
    <div class="invalid-feedback" v-if="error">{{ error }}</div>
  </div>
</template>
<script>
import { computed } from "vue";
export default {
  name: "textField",
  props: {
    modelValue: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    error: {
      type: String,
      default: "",
    },
  },

  setup(props, { emit }) {
    const textInput = computed({
      get: () => {
        return props.modelValue;
      },
      set: (value) => {
        emit("update:modelValue", value);
      },
    });
    return {
      textInput,
    };
  },
};
</script>
