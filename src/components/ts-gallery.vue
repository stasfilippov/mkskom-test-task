<template>
  <div class="ts-gallery">
    <div class="ts-gallery__wrapper">
      <ts-gallery-sidebar />
      <ts-gallery-content />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import tsGallerySidebar from "@/components/ts-gallery-sidebar.vue";
import tsGalleryContent from "@/components/ts-gallery-content.vue";

export default defineComponent({
  name: "ts-gallery",
  components: {
    tsGallerySidebar,
    tsGalleryContent,
  },
});
</script>

<style scoped lang="scss"></style>