<template>
  <div class="ts-progress-bar-circle">
    <span
      class="ts-progress-bar-circle-percent"
      :style="[{ color: `var(--${color})` }]"
      >{{ percent }}%</span
    >
    <svg
      class="ts-progress-bar-circle-svg"
      width="120"
      height="120"
      viewBox="0 0 120 120"
    >
      <circle
        cx="60"
        cy="60"
        r="54"
        fill="none"
        :stroke="`var(--${color}-hover)`"
        stroke-width="12"
      />
      <circle
        class="ts-progress-bar-circle-line"
        :style="[{ 'stroke-dashoffset': `calc(100 - ${percent})` }]"
        cx="60"
        cy="60"
        r="54"
        fill="none"
        :stroke="`var(--${color})`"
        stroke-width="12"
        pathLength="100"
      />
    </svg>
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
.ts-progress-bar {
  &-circle {
    position: relative;
    margin-bottom: 20px;
    width: 120px;
    height: 120px;

    &-svg {
      transform: rotate(-90deg);
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
  }
}
</style>