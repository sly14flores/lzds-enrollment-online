<template>
  <Toast position="top-right" />
  <transition name="fade" mode="out-in">
      <router-view />
  </transition>
</template>

<script>

import Toast from 'primevue/toast';

export default {
  name: 'App',
  components: {
    Toast
  }
}
</script>

<style lang="scss">
  @import './App.scss';
</style>

<style>
    .lzds-center {
        text-align: center;
    }
</style>