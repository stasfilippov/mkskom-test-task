<template>
  <div class="ts-person-control-content">
    <div class="ts-person-control-content__top">
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
          <h2 class="ts-person-control-content__name">Hello Alfred Bryant</h2>
          <p class="ts-person-control-content__email">adrain.nader@yahoo.com</p>
        </div>
      </div>
      <div class="ts-person-control-content__main">
        <div class="ts-person-control-content__menu">
          <div class="ts-person-control-content__menu-item">
            <div class="ts-person-control-content__item-wrapper">
              <ts-icon-base
                class="ts-person-control-content__item-icon"
                name="dashboard"
              ></ts-icon-base>
              <a href="#" class="ts-person-control-content__menu-link"
                >Dashboard</a
              >
            </div>
          </div>
          <div class="ts-person-control-content__menu-item">
            <div class="ts-person-control-content__item-wrapper">
              <ts-icon-base
                class="ts-person-control-content__item-icon"
                name="notes"
              ></ts-icon-base>
              <a href="#" class="ts-person-control-content__menu-link">Notes</a>
            </div>
          </div>
          <div class="ts-person-control-content__menu-item">
            <div class="ts-person-control-content__item-wrapper">
              <ts-icon-base
                class="ts-person-control-content__item-icon"
                name="invoice"
              ></ts-icon-base>
              <a href="#" class="ts-person-control-content__menu-link"
                >Invoice</a
              >
            </div>
          </div>
          <div class="ts-person-control-content__menu-item">
            <div class="ts-person-control-content__item-wrapper">
              <ts-icon-base
                class="ts-person-control-content__item-icon"
                name="files"
              ></ts-icon-base>
              <a href="#" class="ts-person-control-content__menu-link">Files</a>
            </div>
          </div>
          <div class="ts-person-control-content__menu-item">
            <div class="ts-person-control-content__item-wrapper">
              <ts-icon-base
                class="ts-person-control-content__item-icon"
                name="events"
              ></ts-icon-base>
              <a href="#" class="ts-person-control-content__menu-link"
                >Events</a
              >
            </div>
          </div>
          <div class="ts-person-control-content__menu-item">
            <div class="ts-person-control-content__item-wrapper">
              <ts-icon-base
                class="ts-person-control-content__item-icon"
                name="teams"
              ></ts-icon-base>
              <a href="#" class="ts-person-control-content__menu-link">Teams</a>
            </div>
          </div>
          <div class="ts-person-control-content__menu-item">
            <div class="ts-person-control-content__item-wrapper">
              <ts-icon-base
                class="ts-person-control-content__item-icon"
                name="massage"
              ></ts-icon-base>
              <a href="#" class="ts-person-control-content__menu-link"
                >Massage</a
              >
            </div>
          </div>
          <div class="ts-person-control-content__menu-item">
            <div class="ts-person-control-content__item-wrapper">
              <ts-icon-base
                class="ts-person-control-content__item-icon"
                name="settings"
              ></ts-icon-base>
              <a href="#" class="ts-person-control-content__menu-link"
                >Settings</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="ts-person-control-content__footer">
      <div class="ts-person-control-content__contacts">
        <ts-icon-base
          class="ts-person-control-content__footer-item"
          name="phone"
        ></ts-icon-base>
        <ts-icon-base
          class="ts-person-control-content__footer-item"
          name="email"
        ></ts-icon-base>
        <ts-icon-base
          class="ts-person-control-content__footer-item"
          name="reader-mode"
        ></ts-icon-base>
        <ts-icon-base
          class="ts-person-control-content__footer-item"
          name="telegram"
        ></ts-icon-base>
        <ts-icon-base
          class="ts-person-control-content__footer-item"
          name="whatsup"
        ></ts-icon-base>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import TsIconBase from "@/components/Shared/ts-icon-base.vue";
import tsProgressBar from "@/components/Shared/ts-progress-bar.vue";

const circleValue = ref(75);
// eslint-disable-next-line
</script>

<style lang="scss"></style>