<template>
  <div class="mb-2">
    <label class="form-check" :class="{ 'is-invalid': error }">
      <input
        v-model="check"
        :class="{ 'is-invalid': error }"
        type="checkbox"
        class="form-check-input"
      />
      <span class="form-check-label">{{ label }}</span>
    </label>
    <div class="invalid-feedback" v-if="error">{{ error }}</div>
  </div>
</template>
<script>
import { computed } from "vue";
export default {
  name: "checkboxField",
  props: {
    modelValue: {
      type: Boolean,
      default: false,
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
    const check = computed({
      get: () => {
        return props.modelValue;
      },
      set: (value) => {
        emit("update:modelValue", value);
      },
    });
    return {
      check,
    };
  },
};
</script>
