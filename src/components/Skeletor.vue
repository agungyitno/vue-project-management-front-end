<template>
  <div :style="{ width: width }" :class="{ 'mx-auto': center }">
    <div
      :class="{
        'skeleton-avatar': circle,
        'skeleton-heading': heading,
        'skeleton-line': !heading && !circle,
      }"
      :style="[circle ? { width: size, height: size } : {}]"
    ></div>
  </div>
</template>
<script>
export default {
  nama: "skeletor",
  props: {
    circle: {
      type: Boolean,
      default: false,
    },
    heading: {
      type: Boolean,
      default: false,
    },
    center: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: "inherit",
    },
    width: {
      type: String,
      default: "100%",
    },
  },
};
</script>
