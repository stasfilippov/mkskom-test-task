<template>
  <div class="ts-content">
    <ts-gallery />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import tsGallery from "@/components/ts-gallery.vue";

export default defineComponent({
  name: "ts-content",
  components: {
    tsGallery,
  },
});
</script>

<style scoped lang="scss"></style>