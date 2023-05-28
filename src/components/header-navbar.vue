<template>
  <div class="header-navbar">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'header-navbar',
  components: { //оперделяет детей для компонента
  },
  props: { // это не персональные компонента, данные, которые приходят от родителя
  },
  data () { // это персональные данные компонента, то, что он возвращает и используется в HTML
    return {
      title: 'headerNavbar'
    }
  },
  computed: {}, // вычислительные свойства компонента
  methods: {}, // клики, модалки и тд - отлавливает действие пользователя
  watch: {}, // cледит за изменение какого-либо элемента
  mounted() { // хук = отрабатывает, когда компонент полностью загрузится
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
