<template>
  <div class="app">
    <div class="ts-main-wrapper">
      <ts-header-navbar />
      <div class="ts-content">
        <ts-sedibar-nav-content />
        <tsPersonControlContent />
        <div class="ts-gallery">
          <div class="ts-gallery__wrapper">
            <ts-gallery-sidebar />
            <ts-gallery-content />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import tsHeaderNavbar from "@/components/ts-header-navbar.vue";
import tsPersonControlContent from "@/components/ts-person-control-content.vue";
import tsSedibarNavContent from "@/components/ts-sedibar-nav-content.vue";
import tsGalleryContent from "@/components/ts-gallery-content.vue";
import tsGallerySidebar from "@/components/ts-gallery-sidebar.vue";
import axios from "axios";

export default {
  name: "app",
  components: {
    tsGallerySidebar,
    tsGalleryContent,
    tsSedibarNavContent,
    tsPersonControlContent,
    tsHeaderNavbar,
  },
  methods: {
    async fetchItems() {
      try {
        const items = await axios.get(
          "https://jsonplaceholder.typicode.com/albums/1/photos?_limit=16"
        );
        console.log(items);
      } catch (e) {
        alert("Ошибка!");
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>