<template>
  <div class="ts-person-control-content">
    <div class="ts-person-control-content__content">
      <div class="ts-person-control-content__header">
        <div class="ts-person-control-content__btns">
          <div class="ts-person-control-content__person-box">
            <ts-icon-base
              class="ts-person-control-content__person-icon"
              name="person-content"
            ></ts-icon-base>
          </div>
          <div class="ts-person-control-content__dots-box">
            <ts-icon-base
              class="ts-person-control-content__dots-icon"
              name="dots"
            ></ts-icon-base>
          </div>
        </div>
        <div class="ts-person-control-content__person-info">
          <ts-progress-bar :percent="circleValue" />
          <div class="ts-person-control-content__person-image-box">
            <img
              class="ts-person-control-content__person-image"
              src="@/assets/images/avatar1.jpg"
              alt="avatar-image"
            />
          </div>
        </div>
      </div>
      <div class="ts-person-control-content__main"></div>
    </div>
    <div class="ts-person-control-content__footer"></div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import TsIconBase from "@/components/Shared/ts-icon-base.vue";
import tsProgressBar from "@/components/Shared/ts-progress-bar.vue";

const circleValue = ref(60);
// eslint-disable-next-line
</script>

<style lang="scss"></style>