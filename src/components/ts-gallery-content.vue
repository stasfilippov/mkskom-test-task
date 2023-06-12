<script>
import { defineComponent } from "vue";
import tsGalleryContentNavbar from "@/components/ts-gallery-content-navbar.vue";
import tsGalleryContentMainFlex from "@/components/ts-gallery-content-main-flex.vue";
import TsGalleryContentMainGrid from "@/components/ts-gallery-content-main-grid.vue";

export default defineComponent({
  name: "ts-gallery-content",
  components: {
    TsGalleryContentMainGrid,
    tsGalleryContentNavbar,
    tsGalleryContentMainFlex,
  },
  data() {
    return {};
  },
});
</script>

<template>
  <div class="ts-gallery-content">
    <ts-gallery-content-navbar />
    <ts-gallery-content-main-flex :itemsFlex="itemsFlex" />
    <ts-gallery-content-main-grid
      style="display: none"
      :items-grid="itemsGrid"
    />
  </div>
</template>

<style scoped lang="scss"></style>