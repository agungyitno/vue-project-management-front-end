<template>
  <div class="alert d-flex align-items-center p-1" :class="`alert-${type}`">
    <span class="bg-transparent avatar" :class="`text-${type}`"
      ><bi icon="exclamation-circle"></bi
    ></span>
    <span class="font-weight-medium">{{ message }}</span>
  </div>
</template>
<script>
export default {
  name: "alert",
  props: {
    type: {
      type: String,
      default: "primary",
    },
    message: {
      type: String,
      default: "",
    },
  },
};
</script>
