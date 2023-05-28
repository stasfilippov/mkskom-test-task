<template>
  <div class="home">
    <headerNavbar msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import headerNavbar from "@/components/ts-header-navbar.vue";

export default {
  name: "HomeView",
  components: {
    headerNavbar,
  },
};
</script>