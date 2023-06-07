<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ts-gallery-item",
});
</script>

<template>
  <div class="ts-gallery-item">
    <div class="ts-gallery-item__image-box">
      <img src="" alt="#" class="ts-gallery-item__image" />
    </div>
    <h4 class="ts-gallery-item__title">Shooting Stars</h4>
    <p class="ts-gallery-item__date">28.11.2045</p>
  </div>
</template>

<style lang="scss">
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
  }

  &__date {
    @include font($colorTextSecond, 10px, 900, 20px);
  }
}
</style>