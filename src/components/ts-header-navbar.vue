<template>
  <div class="ts-header-navbar">
    <div class="ts-header-navbar__burger">
      <span></span>
    </div>
    <a class="ts-header-navbar__logo" href="#">Constructor</a>
    <ul class="ts-header-navbar__menu-list">
      <li class="ts-header-navbar__menu-list">
        <a class="ts-header-navbar__menu-link" href="#">Dashboard</a>
      </li>
      <li class="ts-header-navbar__menu-list">
        <a class="ts-header-navbar__menu-link" href="#">About Us</a>
      </li>
      <li class="ts-header-navbar__menu-list">
        <a class="ts-header-navbar__menu-link" href="#">News</a>
      </li>
      <li class="ts-header-navbar__menu-list">
        <a class="ts-header-navbar__menu-link" href="#">User Policy</a>
      </li>
      <li class="ts-header-navbar__menu-list">
        <a class="ts-header-navbar__menu-link" href="#">Contacts</a>
      </li>
    </ul>
    <div class="ts-header-navbar__btn-menu">
      <img src="@/assets/icons/btn-menu.png" alt="btn-menu" />
    </div>
    <ts-input-form />
    <div class="ts-header-navbar__person-group">
      <ts-icon-base
        class="ts-header-navbar__icon-person"
        name="person-header"
      ></ts-icon-base>
      <div class="ts-header-navbar__name-person">Clayton Santos</div>
    </div>
    <div class="ts-header-navbar__control-group">
      <div class="ts-header-navbar__notify-box">
        <ts-icon-base
          class="ts-header-navbar__notify-icon"
          name="notify"
        ></ts-icon-base>
      </div>
      <div class="ts-header-navbar__close-box">
        <ts-icon-base
          class="ts-header-navbar__close-icon"
          name="close"
        ></ts-icon-base>
      </div>
    </div>
  </div>
</template>

<script>
import tsInputForm from "@/components/ts-input-form.vue";
import TsIconBase from "@/components/Shared/ts-icon-base.vue";

export default {
  name: "ts-header-navbar",
  components: {
    TsIconBase,
    tsInputForm, //оперделяет детей для компонента
  },
  props: {
    // это не персональные компонента, данные, которые приходят от родителя
  },
  data() {
    // это персональные данные компонента, то, что он возвращает и используется в HTML
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>