<template>
  <div class="home">
    <MyHeader msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import MyHeader from '@/components/MyHeader.vue'

export default {
  name: 'HomeView',
  components: {
    MyHeader
  }
}
</script>
