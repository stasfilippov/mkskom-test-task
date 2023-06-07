<script>
import { defineComponent } from "vue";
import tsIconBase from "@/components/Shared/ts-icon-base.vue";

export default defineComponent({
  name: "ts-gallery-sidebar",
  components: { tsIconBase },
});
</script>

<template>
  <div class="ts-gallery__sidebar">
    <div class="ts-gallery__sidebar-top">
      <div class="ts-gallery__sidebar-header">
        <button class="ts-gallery__btn">
          <ts-icon-base class="ts-gallery__btn-icon" name="invoice" />
          <span class="ts-gallery__btn-desc">New Note</span>
        </button>
      </div>
      <div class="ts-gallery__sidebar-content">
        <ul class="ts-gallery__menu">
          <li class="ts-gallery__item_active">
            <div class="ts-gallery__item-wrapper">
              <ts-icon-base class="ts-gallery__item-icon" name="folder" />
              <span class="ts-gallery__item-text">All Notes</span>
            </div>
            <span class="ts-gallery__item-quantity">43</span>
          </li>
          <li class="ts-gallery__item">
            <div class="ts-gallery__item-wrapper">
              <ts-icon-base class="ts-gallery__item-icon" name="folder" />
              <span class="ts-gallery__item-text">Design</span>
            </div>
            <span class="ts-gallery__item-quantity">23</span>
          </li>
          <li class="ts-gallery__item">
            <div class="ts-gallery__item-wrapper">
              <ts-icon-base class="ts-gallery__item-icon" name="folder" />
              <span class="ts-gallery__item-text">Code Blocks</span>
            </div>
            <span class="ts-gallery__item-quantity">15</span>
          </li>
          <li class="ts-gallery__item">
            <div class="ts-gallery__item-wrapper">
              <ts-icon-base class="ts-gallery__item-icon" name="folder" />
              <span class="ts-gallery__item-text">Drafts</span>
            </div>
            <span class="ts-gallery__item-quantity">18</span>
          </li>
          <li class="ts-gallery__item">
            <div class="ts-gallery__item-wrapper">
              <ts-icon-base class="ts-gallery__item-icon" name="folder" />
              <span class="ts-gallery__item-text">Peoples Review</span>
            </div>
            <span class="ts-gallery__item-quantity">21</span>
          </li>
          <li class="ts-gallery__item">
            <div class="ts-gallery__item-wrapper">
              <ts-icon-base class="ts-gallery__item-icon" name="folder" />
              <span class="ts-gallery__item-text">Social</span>
            </div>
            <span class="ts-gallery__item-quantity">43</span>
          </li>
          <li class="ts-gallery__item">
            <div class="ts-gallery__item-wrapper">
              <ts-icon-base class="ts-gallery__item-icon" name="folder" />
              <span class="ts-gallery__item-text">Labels</span>
            </div>
            <span class="ts-gallery__item-quantity">36</span>
          </li>
          <li class="ts-gallery__item">
            <div class="ts-gallery__item-wrapper">
              <ts-icon-base class="ts-gallery__item-icon" name="folder" />
              <span class="ts-gallery__item-text">My Notes</span>
            </div>
            <span class="ts-gallery__item-quantity">29</span>
          </li>
        </ul>
        <button class="ts-gallery__sidebar-content-btn add-btn">
          <ts-icon-base class="ts-gallery__item-icon" name="plus" />
          <span class="ts-gallery__item-text">Add Folder</span>
        </button>
      </div>
    </div>
    <div class="ts-gallery__sidebar-footer">
      <h3 class="ts-gallery__footer-title">Labels</h3>
      <ul class="ts-gallery__footer-list">
        <li class="ts-gallery__footer-item">
          <ts-icon-base
            class="ts-gallery__footer-icon"
            name="label"
            fill="#33BFFF"
          />
          <span class="ts-gallery__item-text">Notes</span>
        </li>
        <li class="ts-gallery__footer-item">
          <ts-icon-base
            class="ts-gallery__footer-icon"
            name="label"
            fill="#FF6633"
          />
          <span class="ts-gallery__item-text">Change Notes</span>
        </li>
        <li class="ts-gallery__footer-item">
          <ts-icon-base
            class="ts-gallery__footer-icon"
            name="label"
            fill="#29CC39"
          />
          <span class="ts-gallery__item-text">From Family</span>
        </li>
        <li class="ts-gallery__footer-item">
          <ts-icon-base
            class="ts-gallery__footer-icon"
            name="label"
            fill="#8833FF"
          />
          <span class="ts-gallery__item-text">Imagium</span>
        </li>
        <li class="ts-gallery__footer-item">
          <ts-icon-base
            class="ts-gallery__footer-icon"
            name="label"
            fill="#33BFFF"
          />
          <span class="ts-gallery__item-text">Work</span>
        </li>
      </ul>
      <button class="ts-gallery__footer-btn add-btn">
        <ts-icon-base class="ts-gallery__item-icon" name="plus" />
        <span class="ts-gallery__item-text">New Label</span>
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>