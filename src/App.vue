<script setup>
// setup: 组合式写法，自动完成注册组件
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"
</script>

<template>
  <div class="top">
    <Header></Header>
  </div>
  <div class="body">
    <RouterView></RouterView>
  </div>
  <div class="bottom">
    <Footer></Footer>
  </div>
</template>

<style scoped>

</style>
