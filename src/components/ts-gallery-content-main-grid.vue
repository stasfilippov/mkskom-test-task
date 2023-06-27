<template>
  <div class="ts-gallery-content__main-grid">
    <div
      :class="'ts-gallery-item-' + index"
      :key="item.id"
      v-for="(item, index) in itemsGrid"
    >
      <div class="ts-gallery-item__image-box">
        <div class="ts-gallery-item__burger">
          <ts-icon-base
            class="ts-gallery-item__icon"
            name="burger"
          ></ts-icon-base>
        </div>
        <div class="ts-gallery-item__share">
          <ts-icon-base
            class="ts-gallery-item__icon"
            name="share"
          ></ts-icon-base>
        </div>
        <img :src="item.url" alt="#" class="ts-gallery-item__image" />
      </div>
    </div>
  </div>
</template>
<script>
import TsIconBase from "@/components/Shared/ts-icon-base.vue";

export default {
  name: "ts-gallery-content__main-grid",
  components: { TsIconBase },
  props: {
    itemsGrid: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
@import "src/assets/layouts/common/extends";

.ts-gallery-content__main-grid {
  height: 100%;
  width: 100%;
  padding: 45px 45px 35px 45px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 30px;
  grid-template-areas: "one one one two two two" "three three four four five five";
}

.ts-gallery-item {
  &__image-box {
    position: relative;
    width: 100%;
    height: 100%;
    box-shadow: 0 2px 5px rgba(38, 51, 77, 0.03);
    border-radius: 10px;
    background: #f2f3f5;
  }

  &__image {
    border-radius: 5px;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
}

.ts-gallery-item__burger,
.ts-gallery-item__share {
  position: absolute;
  @extend .btn-control;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  transition: 0.2s;
}

.ts-gallery-item__burger:hover,
.ts-gallery-item__share:hover {
  -webkit-transform: scale(1.2);
  -ms-transform: scale(1.2);
  transform: scale(1.2);
  background: rgba(255, 255, 255, 0.3);

  .ts-gallery-item__icon {
    fill: #fff;
  }
}

.ts-gallery-item__burger {
  top: 40px;
  left: 40px;
}

.ts-gallery-item__share {
  top: 40px;
  right: 40px;
}

.ts-gallery-item-0 {
  grid-area: one;
}

.ts-gallery-item-1 {
  grid-area: two;
}

.ts-gallery-item-2 {
  grid-area: three;
}

.ts-gallery-item-3 {
  grid-area: four;
}

.ts-gallery-item-4 {
  grid-area: five;
}
</style>