<script>
import { defineComponent } from "vue";
import tsIconBase from "@/components/Shared/ts-icon-base.vue";

export default defineComponent({
  name: "ts-gallery-content",
  components: {
    tsIconBase,
  },
});
</script>

<template>
  <div class="ts-gallery-content">
    <div class="ts-gallery-content__navbar">
      <div class="ts-gallery-content__navbar-left">
        <div class="ts-gallery-content__display-contr">
          <div class="ts-gallery-content__flex">
            <ts-icon-base name="flex" />
          </div>
          <div class="ts-gallery-content__grid">
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
            <ts-icon-base name="search" width="13.64" height="13.65" />
          </span>
          <input
            type="text"
            class="ts-gallery-content__input"
            placeholder="Search"
          />
        </form>
      </div>
    </div>
    <div class="ts-gallery-content__main"></div>
  </div>
</template>

<style scoped lang="scss"></style>