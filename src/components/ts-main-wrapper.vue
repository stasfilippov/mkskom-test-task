<template>
  <div class="ts-main-wrapper">
    <ts-header-navbar />
    <ts-content />
  </div>
</template>
<script>
import { defineComponent } from "vue";
import tsHeaderNavbar from "@/components/ts-header-navbar.vue";
import tsContent from "@/components/ts-content.vue";

export default defineComponent({
  name: "ts-main-wrapper",
  components: {
    tsHeaderNavbar,
    tsContent,
  },
});
</script>

<style scoped lang="scss"></style>