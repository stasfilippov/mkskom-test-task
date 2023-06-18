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
        <ts-input-form @getNumber="getPhotos" />
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
              <div class="ts-gallery-content__navbar">
                <div class="ts-gallery-content__navbar-left">
                  <div class="ts-gallery-content__display-contr">
                    <div
                      class="ts-gallery-content__flex"
                      @click="toggleDisplay"
                    >
                      <ts-icon-base name="flex" />
                    </div>
                    <div
                      class="ts-gallery-content__grid"
                      @click="toggleDisplay"
                    >
                      <ts-icon-base name="grid" />
                    </div>
                  </div>
                  <div class="ts-gallery-content__delete-btn">
                    <ts-icon-base name="trash" />
                  </div>
                </div>
                <div class="ts-gallery-content__navbar-form">
                  <form class="ts-gallery-content__form-group">
                    <span class="ts-gallery-content__icon-search">
                      <ts-icon-base
                        name="search"
                        width="13.64"
                        height="13.65"
                      />
                    </span>
                    <input
                      type="text"
                      class="ts-gallery-content__input"
                      placeholder="Search"
                    />
                  </form>
                </div>
              </div>
              <div
                class="ts-gallery-content__wrapper-flex"
                style="display: none"
              >
                <ts-gallery-content-main-flex :items-flex="itemsFlex" />
              </div>
              <div
                class="ts-gallery-content__wrapper-grid"
                style="display: none"
              >
                <ts-gallery-content-main-grid :items-grid="itemsGrid" />
              </div>
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
import tsGalleryContentMainFlex from "@/components/ts-gallery-content-main-flex.vue";
import TsGalleryContentMainGrid from "@/components/ts-gallery-content-main-grid.vue";

export default {
  name: "app",
  components: {
    TsGalleryContentMainGrid,
    tsGalleryContentMainFlex,
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
    async getPhotos(number) {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/albums/${number}/photos?_limit=16`
        );
        this.itemsFlex = response.data;
      } catch (e) {
        alert("Ошибка!");
      }

      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/albums/${number}/photos?_limit=5`
        );
        this.itemsGrid = response.data;
      } catch (e) {
        alert("Ошибка!");
      }
    },
    toggleDisplay(event) {
      const flexComponent = document.querySelector(
        ".ts-gallery-content__wrapper-flex"
      );
      const gridComponent = document.querySelector(
        ".ts-gallery-content__wrapper-grid"
      );

      if (event.currentTarget.className === "ts-gallery-content__grid") {
        flexComponent.style.display = "none";
        gridComponent.style.display = "block";
      } else if (event.currentTarget.className === "ts-gallery-content__flex") {
        flexComponent.style.display = "block";
        gridComponent.style.display = "none";
      } else {
        return;
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>