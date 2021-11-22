<template>
  <div class="wrapper">
    <side-layout />
    <head-layout />
    <div class="page-wrapper">
      <router-view></router-view>
    </div>

    <foot-layout />
  </div>
</template>
<script>
import { onMounted } from "vue";
import dropdown from "../../modules/dropdown";
import HeadLayout from "./HeadLayout";
import SideLayout from "./SideLayout";
import FootLayout from "./FootLayout";
export default {
  name: "MainLayout",
  components: { HeadLayout, SideLayout, FootLayout },
  setup() {
    onMounted(() => {
      dropdown;
    });
  },
};
</script>
