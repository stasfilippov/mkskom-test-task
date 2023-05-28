<template>
  <div class="ts-header-navbar">
    <h1>{{ title }}</h1>
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
    return {
      title: "headerNavbar",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>