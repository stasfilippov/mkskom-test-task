<script>
import { defineComponent } from "vue";
import tsGalleryContentNavbar from "@/components/ts-gallery-content-navbar.vue";
import tsGalleryContentMain from "@/components/ts-gallery-content-main.vue";

export default defineComponent({
  name: "ts-gallery-content",
  components: {
    tsGalleryContentNavbar,
    tsGalleryContentMain,
  },
});
</script>

<template>
  <div class="ts-gallery-content">
    <ts-gallery-content-navbar />
    <ts-gallery-content-main />
  </div>
</template>

<style scoped lang="scss"></style>