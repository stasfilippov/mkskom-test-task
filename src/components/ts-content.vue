<template>
  <div class="ts-content">
    <ts-sedibar-nav-content />
    <ts-gallery />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import tsGallery from "@/components/ts-gallery.vue";
import tsSedibarNavContent from "@/components/ts-sedibar-nav-content.vue";

export default defineComponent({
  name: "ts-content",
  components: {
    tsGallery,
    tsSedibarNavContent,
  },
});
</script>

<style scoped lang="scss"></style>