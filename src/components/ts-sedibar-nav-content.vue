<template>
  <div class="ts-sidebar-nav-content">
    <ul class="ts-sidebar-nav-content__control-group-list">
      <li class="ts-sidebar-nav-content__item">
        <ts-icon-base
          class="ts-sidebar-nav-content__item-icon"
          name="main"
        ></ts-icon-base>
      </li>
      <li class="ts-sidebar-nav-content__item">
        <ts-icon-base
          class="ts-sidebar-nav-content__item-icon"
          name="favourites"
        ></ts-icon-base>
      </li>
      <li class="ts-sidebar-nav-content__item">
        <ts-icon-base
          class="ts-sidebar-nav-content__item-icon"
          name="message"
        ></ts-icon-base>
      </li>
      <li class="ts-sidebar-nav-content__item">
        <ts-icon-base
          class="ts-sidebar-nav-content__item-icon"
          name="stats"
        ></ts-icon-base>
      </li>
      <li class="ts-sidebar-nav-content__item">
        <ts-icon-base
          class="ts-sidebar-nav-content__item-icon"
          name="word"
        ></ts-icon-base>
      </li>
      <li class="ts-sidebar-nav-content__item">
        <ts-icon-base
          class="ts-sidebar-nav-content__item-icon"
          name="location"
        ></ts-icon-base>
      </li>
    </ul>
    <ul class="ts-sidebar-nav-content__avatar-group-list">
      <li class="ts-sidebar-nav-content__item">
        <img
          class="ts-sidebar-nav-content__item-image"
          src="@/assets/images/avatar1.jpg"
          alt="avatar1"
        />
      </li>
      <li class="ts-sidebar-nav-content__item">
        <img
          class="ts-sidebar-nav-content__item-image"
          src="@/assets/images/avatar2.jpg"
          alt="avatar2"
        />
      </li>
      <li class="ts-sidebar-nav-content__item">
        <img
          class="ts-sidebar-nav-content__item-image"
          src="@/assets/images/avatar3.jpg"
          alt="avatar3"
        />
      </li>
      <li class="ts-sidebar-nav-content__item">
        <img
          class="ts-sidebar-nav-content__item-image"
          src="@/assets/images/avatar4.jpg"
          alt="avatar4"
        />
      </li>
      <li class="ts-sidebar-nav-content__item">
        <ts-icon-base
          class="ts-sidebar-nav-content__item-icon"
          name="plus"
        ></ts-icon-base>
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import TsIconBase from "@/components/Shared/ts-icon-base.vue";

export default defineComponent({
  name: "ts-sedibar-nav-content",
  components: { TsIconBase },
});
</script>

<style scoped lang="scss"></style>