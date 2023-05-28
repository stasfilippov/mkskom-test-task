<template>
  <div class="ts-header-navbar">
    <div class="ts-header-navbar__burger">
      <span></span>
    </div>
    <a href="#" class="ts-header-navbar__logo">Constructor</a>
    <ul class="ts-header-navbar__menu-list">
      <li class="ts-header-navbar__menu-list">
        <a href="#" class="ts-header-navbar__menu-link">Dashboard</a>
      </li>
      <li class="ts-header-navbar__menu-list">
        <a href="#" class="ts-header-navbar__menu-link">About Us</a>
      </li>
      <li class="ts-header-navbar__menu-list">
        <a href="#" class="ts-header-navbar__menu-link">News</a>
      </li>
      <li class="ts-header-navbar__menu-list">
        <a href="#" class="ts-header-navbar__menu-link">User Policy</a>
      </li>
      <li class="ts-header-navbar__menu-list">
        <a href="#" class="ts-header-navbar__menu-link">Contacts</a>
      </li>
    </ul>
    <div class="ts-header-navbar__btn-menu">
      <img src="@/assets/icons/btn-menu.png" alt="btn-menu" />
    </div>
    <ts-input-form />
  </div>
</template>

<script>
import tsInputForm from "@/components/ts-input-form.vue";

export default {
  name: "ts-header-navbar",
  components: {
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
<style scoped lang="scss">
@import "@/assets/layouts/common/mixins";

.ts-header-navbar {
  display: flex;
  align-items: center;
  height: 100px;
  padding: 25px;
  border-bottom: 2px solid #edeff2;
}

.ts-header-navbar__burger {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  background-color: $bgColorBtns;
  box-shadow: 0px 2px 5px rgba(38, 51, 77, 0.03);
  border-radius: 100px;
}

.ts-header-navbar__burger > span,
.ts-header-navbar__burger > span::before,
.ts-header-navbar__burger > span::after {
  display: block;
  position: absolute;
  width: 18px;
  height: 2px;
  background-color: #c3cad9;
}

.ts-header-navbar__burger > span::before {
  content: "";
  top: -5px;
}

.ts-header-navbar__burger > span::after {
  content: "";
  top: 5px;
}

.ts-header-navbar__logo {
  @include font(#4d5e80, 18px, 700, 30px);
  text-decoration: none;
}

.ts-header-navbar__menu-list {
  display: flex;
  align-items: center;
}

.ts-header-navbar__menu-link {
  @include font(#7d8fb3, 13px, 700, 25px);
  text-decoration: none;
}

.ts-header-navbar__btn-menu {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>