<template>
  <div class="ts-gallery">
    <div class="ts-gallery__wrapper">
      <div class="ts-gallery__sidebar">
        <div class="ts-gallery__sidebar-header">
          <button class="ts-gallery__btn">
            <ts-icon-base class="ts-gallery__btn-icon" name="invoice"/>
            <span class="ts-gallery__btn-desc">New Note</span>
          </button>
        </div>
        <div class="ts-gallery__sidebar-content">
          <ul class="ts-gallery__menu">
            <li class="ts-gallery__item">
              <div class="ts-gallery__item-wrapper">
                <ts-icon-base class="ts-gallery__item-icon" name="folder"/>
                <span class="ts-gallery__item-text">All Notes</span>
              </div>
              <span class="ts-gallery__item-quantity">43</span>
            </li>
            <li class="ts-gallery__item">
              <div class="ts-gallery__item-wrapper">
                <ts-icon-base class="ts-gallery__item-icon" name="folder"/>
                <span class="ts-gallery__item-text">Design</span>
              </div>
              <span class="ts-gallery__item-quantity">23</span>
            </li>
            <li class="ts-gallery__item">
              <div class="ts-gallery__item-wrapper">
                <ts-icon-base class="ts-gallery__item-icon" name="folder"/>
                <span class="ts-gallery__item-text">Code Blocks</span>
              </div>
              <span class="ts-gallery__item-quantity">15</span>
            </li>
            <li class="ts-gallery__item">
              <div class="ts-gallery__item-wrapper">
                <ts-icon-base class="ts-gallery__item-icon" name="folder"/>
                <span class="ts-gallery__item-text">Drafts</span>
              </div>
              <span class="ts-gallery__item-quantity">18</span>
            </li>
            <li class="ts-gallery__item">
              <div class="ts-gallery__item-wrapper">
                <ts-icon-base class="ts-gallery__item-icon" name="folder"/>
                <span class="ts-gallery__item-text">Peoples Review</span>
              </div>
              <span class="ts-gallery__item-quantity">21</span>
            </li>
            <li class="ts-gallery__item">
              <div class="ts-gallery__item-wrapper">
                <ts-icon-base class="ts-gallery__item-icon" name="folder"/>
                <span class="ts-gallery__item-text">Social</span>
              </div>
              <span class="ts-gallery__item-quantity">43</span>
            </li>
            <li class="ts-gallery__item">
              <div class="ts-gallery__item-wrapper">
                <ts-icon-base class="ts-gallery__item-icon" name="folder"/>
                <span class="ts-gallery__item-text">Labels</span>
              </div>
              <span class="ts-gallery__item-quantity">36</span>
            </li>
            <li class="ts-gallery__item">
              <div class="ts-gallery__item-wrapper">
                <ts-icon-base class="ts-gallery__item-icon" name="folder"/>
                <span class="ts-gallery__item-text">My Notes</span>
              </div>
              <span class="ts-gallery__item-quantity">29</span>
            </li>
          </ul>
          <button class="ts-gallery__add-btn"></button>
        </div>
        <div class="ts-gallery__sidebar-footer">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import tsIconBase from "@/components/Shared/ts-icon-base.vue";

export default defineComponent({
  name: "ts-gallery",
  components: {
    tsIconBase
  }
});
</script>

<style scoped lang="scss"></style>