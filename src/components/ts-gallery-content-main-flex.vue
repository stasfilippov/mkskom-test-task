<script>
import { defineComponent } from "vue";
// import tsGalleryItem from "@/components/ts-gallery-item.vue";

export default defineComponent({
  name: "ts-gallery-content-main",
  components: {},
  props: {
    itemsFlex: {
      type: Array,
      required: true,
    },
  },
});
</script>

<template>
  <div class="ts-gallery-content__main-flex">
    <div class="ts-gallery-item" :key="item.id" v-for="item in items">
      <div class="ts-gallery-item__image-box">
        <img :src="item.url" alt="#" class="ts-gallery-item__image" />
      </div>
      <h4 class="ts-gallery-item__title">{{ item.title }}</h4>
      <p class="ts-gallery-item__date">28.11.2045</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/layouts/common/mixins";

.ts-gallery-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 160px;

  &__image-box {
    border: 2px solid $borderColor;
    box-shadow: 0 2px 5px rgba(38, 51, 77, 0.03);
    border-radius: 10px;
    padding: 5px;
    width: 160px;
    height: 120px;
    margin-bottom: 20px;
  }

  &__image {
    border-radius: 5px;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  &__title {
    @include font($colorTextDark, 12px, 700, 20px);
    margin-bottom: 10px;
    text-align: center;
    max-width: 122px;
    max-height: 20px;
    overflow: hidden;
  }

  &__date {
    @include font($colorTextSecond, 10px, 900, 20px);
  }
}
</style>