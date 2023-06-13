<template>
  <div class="app">
    <div class="ts-main-wrapper">
      <div class="ts-header-navbar">
        <div class="ts-header-navbar__burger">
          <span></span>
        </div>
        <a class="ts-header-navbar__logo" href="#">Constructor</a>
        <ul class="ts-header-navbar__menu-list">
          <li class="ts-header-navbar__menu-list">
            <a class="ts-header-navbar__menu-link" href="#">Dashboard</a>
          </li>
          <li class="ts-header-navbar__menu-list">
            <a class="ts-header-navbar__menu-link" href="#">About Us</a>
          </li>
          <li class="ts-header-navbar__menu-list">
            <a class="ts-header-navbar__menu-link" href="#">News</a>
          </li>
          <li class="ts-header-navbar__menu-list">
            <a class="ts-header-navbar__menu-link" href="#">User Policy</a>
          </li>
          <li class="ts-header-navbar__menu-list">
            <a class="ts-header-navbar__menu-link" href="#">Contacts</a>
          </li>
        </ul>
        <div class="ts-header-navbar__btn-menu">
          <img src="@/assets/icons/btn-menu.png" alt="btn-menu" />
        </div>
        <ts-input-form
          :fetch-fnc-flex="fetchItemsFlex"
          :fetch-fnc-grid="fetchItemsGrid"
        />
        <div class="ts-header-navbar__person-group">
          <ts-icon-base
            class="ts-header-navbar__icon-person"
            name="person-header"
          ></ts-icon-base>
          <div class="ts-header-navbar__name-person">Clayton Santos</div>
        </div>
        <div class="ts-header-navbar__control-group">
          <div class="ts-header-navbar__notify-box">
            <ts-icon-base
              class="ts-header-navbar__notify-icon"
              name="notify"
            ></ts-icon-base>
          </div>
          <div class="ts-header-navbar__close-box">
            <ts-icon-base
              class="ts-header-navbar__close-icon"
              name="close"
            ></ts-icon-base>
          </div>
        </div>
      </div>
      <div class="ts-content">
        <ts-sedibar-nav-content />
        <tsPersonControlContent />
        <div class="ts-gallery">
          <div class="ts-gallery__wrapper">
            <ts-gallery-sidebar />
            <div class="ts-gallery-content">
              <ts-gallery-content-navbar />
              <ts-gallery-content-main-flex
                :items-flex="itemsFlex"
                style="display: none"
              />
              <ts-gallery-content-main-grid :items-grid="itemsGrid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import tsPersonControlContent from "@/components/ts-person-control-content.vue";
import tsSedibarNavContent from "@/components/ts-sedibar-nav-content.vue";
import tsGallerySidebar from "@/components/ts-gallery-sidebar.vue";
import axios from "axios";
import tsInputForm from "@/components/ts-input-form.vue";
import TsIconBase from "@/components/Shared/ts-icon-base.vue";
import tsGalleryContentNavbar from "@/components/ts-gallery-content-navbar.vue";
import tsGalleryContentMainFlex from "@/components/ts-gallery-content-main-flex.vue";
import TsGalleryContentMainGrid from "@/components/ts-gallery-content-main-grid.vue";

export default {
  name: "app",
  components: {
    TsGalleryContentMainGrid,
    tsGalleryContentMainFlex,
    tsGalleryContentNavbar,
    TsIconBase,
    tsInputForm,
    tsGallerySidebar,
    tsSedibarNavContent,
    tsPersonControlContent,
  },
  data() {
    return {
      itemsFlex: [],
      itemsGrid: [],
    };
  },
  methods: {
    async fetchItemsFlex() {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/albums/1/photos?_limit=16"
        );
        this.itemsFlex = response.data;
      } catch (e) {
        alert("Ошибка!");
      }
    },
    async fetchItemsGrid() {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/albums/2/photos?_limit=5"
        );
        this.itemsGrid = response.data;
      } catch (e) {
        alert("Ошибка!");
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>