<template>
  <div class="ts-progress-bar-circle">
    <svg
      class="ts-progress-bar-circle-svg"
      width="130"
      height="130"
      viewBox="0 0 130 130"
    >
      <circle
        cx="65"
        cy="65"
        r="61"
        fill="none"
        :stroke="`var(--${color}-hover)`"
        stroke-width="2"
      />
      <circle
        class="ts-progress-bar-circle-line"
        :style="[{ 'stroke-dashoffset': `calc(100 - ${percent})` }]"
        cx="65"
        cy="65"
        r="61"
        fill="none"
        :stroke="`var(--${color})`"
        stroke-width="2"
        pathLength="100"
      />
    </svg>
    <div class="ts-progress-bar-circle__person-image-box">
      <img
        class="ts-progress-bar-circle__person-image"
        src="@/assets/images/avatar1.jpg"
        alt="avatar-image"
      />
    </div>
    <div class="ts-progress-bar-circle__lvl-person">2</div>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ts-progress-bar",
  props: {
    percent: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
      default: "primary",
    },
  },
});
</script>

<style scoped lang="scss">
@import "@/assets/layouts/common/mixins";

.ts-progress-bar {
  &-circle {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 130px;
    height: 130px;
    border-radius: 50%;
    box-shadow: 0 10px 30px rgba(255, 102, 51, 0.1);
    margin-bottom: 30px;

    &-svg {
      position: absolute;
    }

    &-percent {
      position: absolute;
      left: 0;
      width: 100%;
      top: 0;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      font-size: 18px;
    }

    &-line {
      stroke-dasharray: 100;
      transition: 0.5s;
    }

    &__lvl-person {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30px;
      height: 30px;
      z-index: 1;
      top: 50px;
      right: -15px;
      @include font(#ffffff, 12px, 900, 20px);
      background-color: $colorPrimaryContent;
      border-radius: 50%;
    }
  }
}

.ts-progress-bar-circle__person-image-box {
  width: 110px;
  height: 110px;
  border-radius: 50%;
}

.ts-progress-bar-circle__person-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: inherit;
}
</style>